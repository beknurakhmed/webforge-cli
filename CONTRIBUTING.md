# Contributing to webforge-cli

## Git Branch Strategy (Git Flow)

```
main          ← production releases, always stable
develop       ← integration branch, latest development
feature/*     ← new features (branch from develop)
fix/*         ← bug fixes (branch from develop)
hotfix/*      ← urgent production fixes (branch from main)
release/*     ← release preparation (branch from develop)
refactor/*    ← code refactoring (branch from develop)
docs/*        ← documentation updates (branch from develop)
chore/*       ← maintenance tasks (branch from develop)
```

## Workflow

### Adding a Feature

```bash
git checkout develop
git pull origin develop
git checkout -b feature/add-svelte-support
# ... make changes ...
git add .
git commit -m "feat: add Svelte framework support"
git push origin feature/add-svelte-support
# → Create Pull Request to develop
```

### Bug Fix

```bash
git checkout develop
git pull origin develop
git checkout -b fix/template-path-windows
# ... fix the bug ...
git commit -m "fix: resolve template path issue on Windows"
git push origin fix/template-path-windows
# → Create Pull Request to develop
```

### Hotfix (urgent production fix)

```bash
git checkout main
git pull origin main
git checkout -b hotfix/critical-crash
# ... fix ...
git commit -m "hotfix: fix crash on project generation"
git push origin hotfix/critical-crash
# → Create Pull Request to main AND develop
```

### Release

```bash
git checkout develop
git checkout -b release/0.2.0
# bump version in package.json
# test everything
git commit -m "chore: bump version to 0.2.0"
# → Create Pull Request to main
# → After merge: tag main with v0.2.0
# → Merge main back into develop
```

## Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new template type (SaaS)
fix: resolve CSS not loading in Angular template
docs: update README with new examples
refactor: simplify generator overlay logic
chore: update dependencies
style: format code with prettier
test: add unit tests for generator
```

## Development Setup

```bash
git clone https://github.com/beknurakhmed/webforge-cli.git
cd webforge-cli
npm install
npm run build
node dist/index.js
```

## Rules

1. **Never push directly to `main` or `develop`** — always use Pull Requests
2. **Branch from `develop`** for all features and fixes
3. **Branch from `main`** only for hotfixes
4. **Keep PRs small and focused** — one feature/fix per PR
5. **Write meaningful commit messages** following conventional commits
6. **Run `npm run build && npm run typecheck`** before pushing
