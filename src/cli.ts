import * as p from '@clack/prompts';
import pc from 'picocolors';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  TEMPLATE_OPTIONS,
  FRAMEWORK_OPTIONS,
  PARADIGM_OPTIONS,
  STYLING_OPTIONS,
  STATE_OPTIONS,
  EXTRAS_OPTIONS,
  ANGULAR_MODE_OPTIONS,
  THEME_OPTIONS,
  STYLING_COMPATIBILITY,
  STATE_COMPATIBILITY,
  BUILTIN_ROUTING_FRAMEWORKS,
} from './constants.js';
import { generateProject } from './generator.js';
import { validateProjectName, isDirectoryEmpty } from './utils.js';
import type { ProjectConfig, Framework, Styling, StateManagement, AngularMode, Theme } from './types.js';

function getVersion(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pkgPath = path.resolve(__dirname, '..', 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    return pkg.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

function printBanner(version: string): void {
  const banner = `
${pc.bold(pc.cyan('  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╦═╗╔═╗╔═╗'))}
${pc.bold(pc.cyan('  ║║║║╣ ╠╩╗╠╣ ║ ║╠╦╝║ ╦║╣ '))}
${pc.bold(pc.cyan('  ╚╩╝╚═╝╚═╝╚  ╚═╝╩╚═╚═╝╚═╝'))}  ${pc.dim(`v${version}`)}
`;
  console.log(banner);
}

function getLabelForValue(options: { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label || value;
}

export async function runCli(): Promise<void> {
  const version = getVersion();

  // Handle --version / -v flag
  if (process.argv.includes('--version') || process.argv.includes('-v')) {
    console.log(version);
    process.exit(0);
  }

  // Handle --help / -h flag
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    printBanner(version);
    console.log(`  ${pc.bold('Usage:')}  npx @beknurakhmed/webforge-cli ${pc.dim('[project-name]')}

  ${pc.bold('Options:')}
    ${pc.cyan('-v, --version')}   Show version number
    ${pc.cyan('-h, --help')}      Show this help message

  ${pc.bold('Templates:')}  Landing Page, E-commerce, CRM, Dashboard, Blog, Portfolio
  ${pc.bold('Frameworks:')} React, Vue, Angular, Vanilla, Next.js, Nuxt
  ${pc.bold('Styling:')}    Tailwind, SCSS, CSS Modules, Styled Components, MUI, Chakra, Ant Design, Angular Material

  ${pc.dim('Docs:')} ${pc.underline('https://github.com/beknurakhmed/webforge-cli')}
`);
    process.exit(0);
  }

  printBanner(version);
  p.intro(pc.bgCyan(pc.black(' webforge-cli ')) + pc.dim(' — scaffold your next project'));

  const argProjectName = process.argv[2];

  const config = await p.group(
    {
      projectName: () =>
        p.text({
          message: `${pc.bold('Project name')}`,
          placeholder: 'my-awesome-project',
          initialValue: argProjectName,
          validate: (value) => validateProjectName(value ?? ''),
        }),

      templateType: () =>
        p.select({
          message: `${pc.bold('Template type')}`,
          options: TEMPLATE_OPTIONS.map((t) => ({
            value: t.value,
            label: t.label,
            hint: t.hint,
          })),
        }),

      framework: () =>
        p.select({
          message: `${pc.bold('Framework')}`,
          options: FRAMEWORK_OPTIONS.map((f) => ({
            value: f.value,
            label: f.label,
            hint: f.hint,
          })),
        }),

      angularMode: ({ results }) => {
        if (results.framework !== 'angular') return Promise.resolve(undefined);
        return p.select({
          message: `${pc.bold('Angular mode')}`,
          options: ANGULAR_MODE_OPTIONS.map((m) => ({
            value: m.value,
            label: m.label,
            hint: m.hint,
          })),
        });
      },

      paradigm: () =>
        p.select({
          message: `${pc.bold('Coding paradigm')}`,
          options: PARADIGM_OPTIONS.map((pp) => ({
            value: pp.value,
            label: pp.label,
            hint: pp.hint,
          })),
        }),

      styling: ({ results }) => {
        const fw = results.framework as Framework;
        const compatible = STYLING_OPTIONS.filter((s) =>
          STYLING_COMPATIBILITY[s.value as Styling]?.includes(fw)
        );
        return p.select({
          message: `${pc.bold('Styling solution')}`,
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
          message: `${pc.bold('State management')}`,
          options: compatible.map((s) => ({
            value: s.value,
            label: s.label,
            hint: s.hint,
          })),
        });
      },

      routing: ({ results }) => {
        // Non-landing templates have built-in multi-page routing
        if (results.templateType !== 'landing') return Promise.resolve(true);
        const fw = results.framework as Framework;
        const hint = BUILTIN_ROUTING_FRAMEWORKS.includes(fw) ? ' (built-in file routing)' : '';
        return p.confirm({
          message: `${pc.bold('Include routing?')}${pc.dim(hint)}`,
          initialValue: true,
        });
      },

      i18n: () =>
        p.confirm({
          message: `${pc.bold('Include i18n?')}${pc.dim(' (language switcher + translations)')}`,
          initialValue: false,
        }),

      theme: () =>
        p.select({
          message: `${pc.bold('Default theme')}`,
          options: THEME_OPTIONS.map((t) => ({
            value: t.value,
            label: t.label,
            hint: t.hint,
          })),
        }),

      extras: () =>
        p.multiselect({
          message: `${pc.bold('Additional tools')}`,
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
      message: `Directory "${config.projectName}" already exists. Overwrite?`,
      initialValue: false,
    });

    if (p.isCancel(shouldOverwrite) || !shouldOverwrite) {
      p.cancel('Operation cancelled.');
      process.exit(0);
    }

    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  const projectConfig: ProjectConfig = {
    projectName: config.projectName,
    templateType: config.templateType,
    framework: config.framework,
    paradigm: config.paradigm,
    styling: config.styling as ProjectConfig['styling'],
    stateManagement: config.stateManagement as ProjectConfig['stateManagement'],
    routing: config.routing as boolean,
    i18n: config.i18n as boolean,
    theme: config.theme as Theme,
    angularMode: config.angularMode as AngularMode | undefined,
    extras: config.extras as ProjectConfig['extras'],
    targetDir,
  };

  // Show summary box
  const templateLabel = getLabelForValue(TEMPLATE_OPTIONS, config.templateType);
  const frameworkLabel = getLabelForValue(FRAMEWORK_OPTIONS, config.framework);
  const paradigmLabel = getLabelForValue(PARADIGM_OPTIONS, config.paradigm);
  const stylingLabel = getLabelForValue(STYLING_OPTIONS, String(config.styling));
  const stateLabel = getLabelForValue(STATE_OPTIONS, String(config.stateManagement));
  const routingLabel = config.templateType !== 'landing'
    ? pc.green('Built-in')
    : config.routing ? pc.green('Yes') : pc.dim('No');
  const i18nLabel = config.i18n ? pc.green('Yes') : pc.dim('No');
  const themeLabel = getLabelForValue(THEME_OPTIONS, String(config.theme));
  const angularModeLabel = config.angularMode ? getLabelForValue(ANGULAR_MODE_OPTIONS, String(config.angularMode)) : '';
  const extrasStr = (config.extras as string[]).map((e) => getLabelForValue(EXTRAS_OPTIONS, e)).join(', ') || pc.dim('none');

  let summary =
    `\n` +
    `  ${pc.dim('Project')}     ${pc.bold(pc.white(config.projectName))}\n` +
    `  ${pc.dim('Template')}    ${pc.cyan(templateLabel)}\n` +
    `  ${pc.dim('Framework')}   ${pc.cyan(frameworkLabel)}\n`;
  if (config.angularMode) {
    summary += `  ${pc.dim('Mode')}        ${pc.cyan(angularModeLabel)}\n`;
  }
  summary +=
    `  ${pc.dim('Paradigm')}    ${pc.cyan(paradigmLabel)}\n` +
    `  ${pc.dim('Styling')}     ${pc.cyan(stylingLabel)}\n` +
    `  ${pc.dim('State')}       ${pc.cyan(stateLabel)}\n` +
    `  ${pc.dim('Routing')}     ${routingLabel}\n` +
    `  ${pc.dim('i18n')}        ${i18nLabel}\n` +
    `  ${pc.dim('Theme')}       ${pc.cyan(themeLabel)}\n` +
    `  ${pc.dim('Extras')}      ${pc.cyan(extrasStr)}`;

  p.log.message(summary);

  const spinner = p.spinner();
  spinner.start('Scaffolding project...');

  try {
    await generateProject(projectConfig);
    spinner.stop(pc.green('Project scaffolded successfully!'));
  } catch (err) {
    spinner.stop(pc.red('Scaffolding failed.'));
    p.log.error(String(err));
    process.exit(1);
  }

  const pkgManager = detectPackageManager();
  const runCmd = pkgManager === 'npm' ? 'npm run' : pkgManager;

  p.note(
    [
      `${pc.cyan('cd')} ${config.projectName}`,
      `${pc.cyan(pkgManager)} install`,
      `${pc.cyan(runCmd)} dev`,
    ].join('\n'),
    'Next steps'
  );

  p.outro(
    pc.green('Happy coding! ') +
    pc.dim(' github.com/beknurakhmed/webforge-cli')
  );
}

function detectPackageManager(): string {
  const ua = process.env.npm_config_user_agent;
  if (!ua) return 'npm';
  if (ua.startsWith('pnpm')) return 'pnpm';
  if (ua.startsWith('yarn')) return 'yarn';
  if (ua.startsWith('bun')) return 'bun';
  return 'npm';
}
