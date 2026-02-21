import fs from 'node:fs';

export function validateProjectName(name: string): string | undefined {
  if (!name) return 'Project name is required';
  if (!/^[a-zA-Z0-9@][a-zA-Z0-9._\-/]*$/.test(name)) {
    return 'Invalid name. Use letters, numbers, hyphens, dots.';
  }
  if (name.length > 128) return 'Name too long (max 128 chars)';
  return undefined;
}

export function isDirectoryEmpty(dirPath: string): boolean {
  if (!fs.existsSync(dirPath)) return true;
  const files = fs.readdirSync(dirPath);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.scss',
  '.vue', '.md', '.yaml', '.yml', '.toml', '.svg', '.mjs', '.cjs',
  '.env', '.prettierrc', '.eslintrc',
]);

export function isTextFile(filename: string): boolean {
  const ext = filename.slice(filename.lastIndexOf('.'));
  return TEXT_EXTENSIONS.has(ext) || filename.startsWith('.');
}
