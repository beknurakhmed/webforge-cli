<div align="center">

# webforge-cli

**Interactive CLI to scaffold production-ready web projects in seconds**

[![npm version](https://img.shields.io/npm/v/@beknurakhmed/webforge-cli.svg?style=flat-square&color=4f46e5)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)
[![license](https://img.shields.io/npm/l/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://github.com/beknurakhmed/webforge-cli/blob/main/LICENSE)
[![node](https://img.shields.io/node/v/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://nodejs.org)
[![downloads](https://img.shields.io/npm/dm/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)

**English** | [Русский](README.ru.md) | [O'zbek](README.uz.md)

<br />

Pick a template, framework, styling, state management, and paradigm — get a fully configured multi-page SPA with routing, layouts, and realistic demo content.

</div>

---

## Quick Start

```bash
npx @beknurakhmed/webforge-cli
```

Or install globally:

```bash
npm i -g @beknurakhmed/webforge-cli
webforge-cli my-app
```

## What You Get

```
┌  webforge-cli  — project template generator
│
◆  Project name         →  my-app
◆  Template type        →  E-commerce
◆  Framework            →  React
◆  Coding paradigm      →  Functional
◆  Styling solution     →  Tailwind CSS
◆  State management     →  Zustand
◆  Extra tools          →  TypeScript, ESLint, Prettier
│
◇  Project generated successfully!
│
│  Next steps:
│    cd my-app
│    npm install
│    npm run dev
│
└  Happy coding!
```

## Templates

| Template | Description | Pages |
|----------|-------------|-------|
| **Landing Page** | Marketing page with hero, features, CTA | Single page |
| **E-commerce** | Product grid, cart, product detail | Home, Product, Cart |
| **CRM** | Contacts, deals, pipeline | Dashboard, Contacts, Deals, Settings |
| **Dashboard** | KPI cards, charts, data tables | Overview, Analytics, Users, Settings |
| **Blog** | Posts, categories, author pages | Home, Post, Category, About |
| **Portfolio** | Projects, skills, contact form | Home, Projects, About, Contact |

## Frameworks

| Framework | Build Tool | Version | Routing |
|-----------|-----------|---------|---------|
| **React** | Vite | React 19 | react-router-dom v7 |
| **Vue** | Vite | Vue 3.5 | vue-router v4 |
| **Angular** | Angular CLI | Angular 19 | @angular/router |
| **Vanilla** | Vite | TypeScript | Custom hash router |
| **Next.js** | Next.js | v15 | App Router (file-based) |
| **Nuxt** | Nuxt | v3 | File-based routing |

## Styling — 8 Options

| Styling | Compatible Frameworks |
|---------|----------------------|
| **Tailwind CSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **SCSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **CSS Modules** | React, Vue, Vanilla, Next.js, Nuxt |
| **Styled Components** | React, Next.js |
| **Material UI (MUI)** | React, Next.js |
| **Chakra UI** | React, Next.js |
| **Ant Design** | React, Vue, Next.js |
| **Angular Material** | Angular |

Every styling option generates **real styled components** — not just dependency installs. Tailwind uses utility classes, SCSS uses variables & nesting, MUI uses `sx` props, etc.

## State Management

| Library | Compatible Frameworks |
|---------|----------------------|
| **Redux Toolkit** | React, Next.js |
| **Zustand** | React, Next.js |
| **MobX** | React, Next.js |
| **Pinia** | Vue, Nuxt |
| **RxJS** | Angular |
| **NgRx** | Angular |

## Coding Paradigm

- **Functional** — hooks, composables, pure functions, signals
- **SOLID OOP** — classes, services, dependency injection, OOP patterns

## Architecture

webforge-cli uses a **layered overlay system**:

```
Layer 1  Framework base        (React / Vue / Angular / ...)
Layer 2  Template overlay      (Landing / E-commerce / CRM / ...)
Layer 3  Paradigm variant      (Functional / OOP)
Layer 4  Styling config + deps (Tailwind / SCSS / MUI / ...)
Layer 5  Styling components    (Template-specific styled components)
Layer 6  State management      (Redux / Zustand / Pinia / ...)
Layer 7  Extras                (TypeScript / ESLint / Prettier)
```

Each layer copies files on top of previous ones. Dependencies merge into `package.json` automatically.

**Total combinations:** 6 templates x 6 frameworks x 8 styling x 7 state x 2 paradigms = **4,032 unique projects**

## Examples

```bash
# React + E-commerce + Tailwind + Zustand
npx @beknurakhmed/webforge-cli
# → my-store → E-commerce → React → Functional → Tailwind CSS → Zustand

# Vue + Dashboard + SCSS + Pinia
npx @beknurakhmed/webforge-cli
# → admin → Dashboard → Vue → Functional → SCSS → Pinia

# Next.js + Blog + Ant Design
npx @beknurakhmed/webforge-cli
# → my-blog → Blog → Next.js → Functional → Ant Design → None

# Angular + CRM + Angular Material + NgRx
npx @beknurakhmed/webforge-cli
# → crm-app → CRM → Angular → SOLID OOP → Angular Material → NgRx
```

## Requirements

- **Node.js** >= 18.0.0

## Development

```bash
git clone https://github.com/beknurakhmed/webforge-cli.git
cd webforge-cli
npm install
npm run build
node dist/index.js
```

| Script | Description |
|--------|-------------|
| `npm run build` | Build with tsup |
| `npm run dev` | Watch mode |
| `npm start` | Run CLI |
| `npm run typecheck` | TypeScript check |

## Author

**Beknur** — Frontend Developer & Software Engineer

- GitHub: [@beknurakhmed](https://github.com/beknurakhmed)
- npm: [@beknurakhmed](https://www.npmjs.com/~beknurakhmed)

## License

[MIT](LICENSE) &copy; 2026 Beknur
