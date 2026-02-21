import * as p from '@clack/prompts';
import pc from 'picocolors';
import path from 'node:path';
import fs from 'node:fs';
import {
  TEMPLATE_OPTIONS,
  FRAMEWORK_OPTIONS,
  PARADIGM_OPTIONS,
  STYLING_OPTIONS,
  STATE_OPTIONS,
  EXTRAS_OPTIONS,
  STYLING_COMPATIBILITY,
  STATE_COMPATIBILITY,
} from './constants.js';
import { generateProject } from './generator.js';
import { validateProjectName, isDirectoryEmpty } from './utils.js';
import type { ProjectConfig, Framework, Styling, StateManagement } from './types.js';

export async function runCli(): Promise<void> {
  console.log('');
  p.intro(pc.bgCyan(pc.black(' webforge-cli ')) + pc.dim(' — project template generator'));

  const argProjectName = process.argv[2];

  const config = await p.group(
    {
      projectName: () =>
        p.text({
          message: 'Project name:',
          placeholder: 'my-awesome-project',
          initialValue: argProjectName,
          validate: (value) => validateProjectName(value ?? ''),
        }),

      templateType: () =>
        p.select({
          message: 'Select a template type:',
          options: TEMPLATE_OPTIONS.map((t) => ({
            value: t.value,
            label: t.label,
            hint: t.hint,
          })),
        }),

      framework: () =>
        p.select({
          message: 'Select a framework:',
          options: FRAMEWORK_OPTIONS.map((f) => ({
            value: f.value,
            label: f.label,
            hint: f.hint,
          })),
        }),

      paradigm: () =>
        p.select({
          message: 'Select a coding paradigm:',
          options: PARADIGM_OPTIONS.map((p) => ({
            value: p.value,
            label: p.label,
            hint: p.hint,
          })),
        }),

      styling: ({ results }) => {
        const fw = results.framework as Framework;
        const compatible = STYLING_OPTIONS.filter((s) =>
          STYLING_COMPATIBILITY[s.value as Styling]?.includes(fw)
        );
        return p.select({
          message: 'Select a styling solution:',
          options: compatible.map((s) => ({
            value: s.value,
            label: s.label,
            hint: s.hint,
          })),
        });
      },

      stateManagement: ({ results }) => {
        const fw = results.framework as Framework;
        const compatible = STATE_OPTIONS.filter((s) =>
          STATE_COMPATIBILITY[s.value as StateManagement]?.includes(fw)
        );
        return p.select({
          message: 'Select state management:',
          options: compatible.map((s) => ({
            value: s.value,
            label: s.label,
            hint: s.hint,
          })),
        });
      },

      extras: () =>
        p.multiselect({
          message: 'Select additional tools:',
          options: EXTRAS_OPTIONS.map((e) => ({
            value: e.value,
            label: e.label,
            hint: e.hint,
          })),
          required: false,
        }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.');
        process.exit(0);
      },
    }
  );

  const targetDir = path.resolve(process.cwd(), config.projectName);

  // Check if directory exists and is not empty
  if (!isDirectoryEmpty(targetDir)) {
    const shouldOverwrite = await p.confirm({
      message: `Directory "${config.projectName}" is not empty. Overwrite?`,
      initialValue: false,
    });

    if (p.isCancel(shouldOverwrite) || !shouldOverwrite) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }

    // Clear the directory
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  const projectConfig: ProjectConfig = {
    projectName: config.projectName,
    templateType: config.templateType,
    framework: config.framework,
    paradigm: config.paradigm,
    styling: config.styling as ProjectConfig['styling'],
    stateManagement: config.stateManagement as ProjectConfig['stateManagement'],
    extras: config.extras as ProjectConfig['extras'],
    targetDir,
  };

  // Show summary
  p.log.info(
    `${pc.bold('Configuration:')}\n` +
    `  Template:    ${pc.cyan(config.templateType)}\n` +
    `  Framework:   ${pc.cyan(config.framework)}\n` +
    `  Paradigm:    ${pc.cyan(config.paradigm)}\n` +
    `  Styling:     ${pc.cyan(String(config.styling))}\n` +
    `  State:       ${pc.cyan(String(config.stateManagement))}\n` +
    `  Extras:      ${pc.cyan((config.extras as string[]).join(', ') || 'none')}`
  );

  const spinner = p.spinner();
  spinner.start('Generating project...');

  try {
    await generateProject(projectConfig);
    spinner.stop('Project generated successfully!');
  } catch (err) {
    spinner.stop('Generation failed.');
    p.log.error(String(err));
    process.exit(1);
  }

  const pkgManager = detectPackageManager();

  p.note(
    [
      `cd ${config.projectName}`,
      `${pkgManager} install`,
      `${pkgManager === 'npm' ? 'npm run' : pkgManager} dev`,
    ].join('\n'),
    'Next steps'
  );

  p.outro(pc.green('Happy coding!'));
}

function detectPackageManager(): string {
  const ua = process.env.npm_config_user_agent;
  if (!ua) return 'npm';
  if (ua.startsWith('pnpm')) return 'pnpm';
  if (ua.startsWith('yarn')) return 'yarn';
  if (ua.startsWith('bun')) return 'bun';
  return 'npm';
}
