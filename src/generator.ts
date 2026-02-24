import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { isTextFile } from './utils.js';
import type { ProjectConfig } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATES_DIR = path.resolve(__dirname, '..', 'templates');

export async function generateProject(config: ProjectConfig): Promise<void> {
  const { targetDir, framework, templateType, paradigm, styling, stateManagement, routing, i18n, theme, angularMode, extras, projectName } = config;

  await fs.ensureDir(targetDir);

  // Layer 1: Framework base
  const frameworkDir = path.join(TEMPLATES_DIR, framework);
  if (await fs.pathExists(frameworkDir)) {
    await copyTemplateDir(frameworkDir, targetDir, { projectName });
  }

  // Layer 2: Template type overlay
  const overlayDir = path.join(TEMPLATES_DIR, 'overlays', templateType, framework);
  if (await fs.pathExists(overlayDir)) {
    await copyTemplateDir(overlayDir, targetDir, { projectName });
  }

  // Layer 3: Paradigm overlay
  const paradigmDir = path.join(TEMPLATES_DIR, 'paradigms', paradigm, framework);
  if (await fs.pathExists(paradigmDir)) {
    await copyTemplateDir(paradigmDir, targetDir, { projectName });
  }

  // Layer 4: Styling overlay
  if (styling) {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'styling', styling),
      targetDir,
      config
    );
  }

  // Layer 4.5: Template-specific styling overlay (e.g. Tailwind versions of components)
  if (styling) {
    const stylingTemplateDir = path.join(TEMPLATES_DIR, 'styling', styling, 'overlays', templateType, framework);
    if (await fs.pathExists(stylingTemplateDir)) {
      await copyTemplateDir(stylingTemplateDir, targetDir, { projectName });
    }
  }

  // Layer 5: State management overlay
  if (stateManagement && stateManagement !== 'none') {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'state', stateManagement),
      targetDir,
      config
    );
  }

  // Layer 5.5: Routing overlay (only for landing — other templates have built-in routing)
  if (routing && templateType === 'landing') {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'routing'),
      targetDir,
      config
    );
  }

  // Layer 5.6: Angular NgModules conversion
  if (framework === 'angular' && angularMode === 'modules') {
    // Shared: main.ts with platformBrowserDynamic
    const sharedDir = path.join(TEMPLATES_DIR, 'angular-mode', 'modules', 'angular');
    if (await fs.pathExists(sharedDir)) {
      await copyTemplateDir(sharedDir, targetDir, { projectName });
    }

    // Template-specific NgModules files (app.module.ts + non-standalone app.component.ts)
    let overlayName: string = templateType;
    if (templateType === 'landing' && routing) {
      overlayName = 'landing-routing';
    }
    const ngModulesDir = path.join(TEMPLATES_DIR, 'angular-mode', 'modules', 'overlays', overlayName);
    if (await fs.pathExists(ngModulesDir)) {
      await copyTemplateDir(ngModulesDir, targetDir, { projectName });
    }
  }

  // Layer 6: i18n overlay
  if (i18n) {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'i18n'),
      targetDir,
      config
    );
  }

  // Layer 6.5: Theme overlay
  if (theme) {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'theme', theme),
      targetDir,
      config
    );
  }

  // Layer 7: Extras
  for (const extra of extras) {
    await applyOverlayWithDeps(
      path.join(TEMPLATES_DIR, 'extras', extra),
      targetDir,
      config
    );
  }

  // Layer 7: Base shared files (.gitignore, README)
  const baseDir = path.join(TEMPLATES_DIR, 'base');
  if (await fs.pathExists(baseDir)) {
    await copyTemplateDir(baseDir, targetDir, { projectName });
  }

  // Finalize package.json
  await finalizePackageJson(targetDir, config);
}

async function applyOverlayWithDeps(
  overlayDir: string,
  targetDir: string,
  config: ProjectConfig
): Promise<void> {
  if (!(await fs.pathExists(overlayDir))) return;

  // Merge deps.json into package.json
  const depsFile = path.join(overlayDir, 'deps.json');
  if (await fs.pathExists(depsFile)) {
    const deps = await fs.readJson(depsFile);
    await mergeDependencies(targetDir, deps);
  }

  // Merge framework-specific deps (e.g. deps-vue.json for ant-design-vue)
  const fwDepsFile = path.join(overlayDir, `deps-${config.framework}.json`);
  if (await fs.pathExists(fwDepsFile)) {
    const fwDeps = await fs.readJson(fwDepsFile);
    await mergeDependencies(targetDir, fwDeps);
  }

  // Copy config files (skip deps.json)
  const configDir = path.join(overlayDir, 'config');
  if (await fs.pathExists(configDir)) {
    await copyTemplateDir(configDir, targetDir, { projectName: config.projectName });
  }

  // Copy framework-specific files if they exist
  const fwDir = path.join(overlayDir, config.framework);
  if (await fs.pathExists(fwDir)) {
    await copyTemplateDir(fwDir, targetDir, { projectName: config.projectName });
  }
}

async function copyTemplateDir(
  srcDir: string,
  destDir: string,
  vars: Record<string, string>
): Promise<void> {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);

    // Transform filenames: _gitignore -> .gitignore, _package.json -> package.json
    let destName = entry.name;
    if (destName.startsWith('_')) {
      destName = '.' + destName.slice(1);
    }

    const destPath = path.join(destDir, destName);

    if (entry.isDirectory()) {
      await fs.ensureDir(destPath);
      await copyTemplateDir(srcPath, destPath, vars);
    } else {
      await fs.ensureDir(path.dirname(destPath));

      if (isTextFile(entry.name)) {
        let content = await fs.readFile(srcPath, 'utf-8');
        for (const [key, value] of Object.entries(vars)) {
          content = content.replaceAll(`{{${key}}}`, value);
        }
        await fs.writeFile(destPath, content, 'utf-8');
      } else {
        await fs.copy(srcPath, destPath);
      }
    }
  }
}

async function mergeDependencies(
  targetDir: string,
  newDeps: { dependencies?: Record<string, string>; devDependencies?: Record<string, string> }
): Promise<void> {
  const pkgPath = path.join(targetDir, 'package.json');
  if (!(await fs.pathExists(pkgPath))) return;

  const pkg = await fs.readJson(pkgPath);

  if (newDeps.dependencies) {
    pkg.dependencies = { ...(pkg.dependencies || {}), ...newDeps.dependencies };
  }
  if (newDeps.devDependencies) {
    pkg.devDependencies = { ...(pkg.devDependencies || {}), ...newDeps.devDependencies };
  }

  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}

async function finalizePackageJson(
  targetDir: string,
  config: ProjectConfig
): Promise<void> {
  const pkgPath = path.join(targetDir, 'package.json');
  if (!(await fs.pathExists(pkgPath))) return;

  const pkg = await fs.readJson(pkgPath);

  pkg.name = config.projectName;

  if (pkg.dependencies) {
    pkg.dependencies = sortObject(pkg.dependencies);
  }
  if (pkg.devDependencies) {
    pkg.devDependencies = sortObject(pkg.devDependencies);
  }

  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}

function sortObject(obj: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );
}
