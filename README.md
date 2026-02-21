# webforge-cli

Interactive CLI to generate production-ready website project templates. Pick your template, framework, styling, state management, and coding paradigm — get a fully configured project in seconds.

## Quick Start

```bash
npx webforge-cli
```

Or install globally:

```bash
npm install -g webforge-cli
webforge-cli
```

You can also pass the project name directly:

```bash
npx webforge-cli my-app
```

## How It Works

The CLI walks you through an interactive wizard:

```
1. Project name         →  my-awesome-app
2. Template type        →  Landing Page / E-commerce / CRM / Dashboard / Blog / Portfolio
3. Framework            →  React / Vue / Angular / Vanilla / Next.js / Nuxt
4. Coding paradigm      →  Functional / SOLID OOP
5. Styling solution     →  Tailwind CSS / SCSS / CSS Modules / Material UI / ...
6. State management     →  Redux / Zustand / MobX / Pinia / NgRx / RxJS / None
7. Extra tools          →  TypeScript / ESLint / Prettier
```

After you answer, webforge generates a ready-to-run project:

```bash
cd my-awesome-app
npm install
npm run dev
```

## Template Types

| Template | Description |
|----------|-------------|
| **Landing Page** | Marketing page with hero, features, CTA, footer |
| **E-commerce** | Product grid, shopping cart, product cards |
| **CRM** | Contacts table, stats cards, filters, sidebar |
| **Dashboard** | KPI cards, charts, data tables, sidebar navigation |
| **Blog** | Post list, categories sidebar, newsletter signup |
| **Portfolio** | Hero intro, project grid, skills, contact form |

## Frameworks

| Framework | Build Tool | Version |
|-----------|-----------|---------|
| **React** | Vite | React 19 |
| **Vue** | Vite | Vue 3.5 |
| **Angular** | Angular CLI | Angular 19 |
| **Vanilla** | Vite | Plain TS/JS |
| **Next.js** | Next.js | v15 |
| **Nuxt** | Nuxt | v3 |

## Styling Options

| Styling | Works with |
|---------|-----------|
| **Tailwind CSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **SCSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **CSS Modules** | React, Vue, Vanilla, Next.js, Nuxt |
| **Styled Components** | React, Next.js |
| **Material UI** | React, Next.js |
| **Chakra UI** | React, Next.js |
| **Ant Design** | React, Vue, Next.js |
| **Angular Material** | Angular |

## State Management

| Library | Works with |
|---------|-----------|
| **Redux Toolkit** | React, Next.js |
| **Zustand** | React, Next.js |
| **MobX** | React, Next.js |
| **Pinia** | Vue, Nuxt |
| **RxJS** | Angular |
| **NgRx** | Angular |

## Coding Paradigm

Choose between two coding styles for your generated project:

- **Functional** — React hooks, Vue composables, Angular signals, pure functions
- **SOLID OOP** — Class components, services, dependency injection, OOP patterns

## Examples

### React + Landing Page + Tailwind

```bash
npx webforge-cli
# → my-landing
# → Landing Page
# → React
# → Functional
# → Tailwind CSS
# → None
# → TypeScript, ESLint, Prettier
```

### Vue + E-commerce + SCSS + Pinia

```bash
npx webforge-cli
# → my-store
# → E-commerce
# → Vue
# → Functional
# → SCSS
# → Pinia
# → TypeScript
```

### Angular + Dashboard + Angular Material + NgRx

```bash
npx webforge-cli
# → admin-panel
# → Dashboard
# → Angular
# → SOLID OOP
# → Angular Material
# → NgRx
# → TypeScript, ESLint
```

## Project Structure (Generated)

Example for React + Landing Page:

```
my-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js      (if Tailwind selected)
├── eslint.config.js        (if ESLint selected)
├── .prettierrc             (if Prettier selected)
├── .gitignore
└── README.md
```

## Architecture

webforge-cli uses a **layered overlay system** to generate projects:

```
Layer 1: Framework base       (React/Vue/Angular/Vanilla/Next.js/Nuxt)
Layer 2: Template overlay     (Landing/E-commerce/CRM/Dashboard/Blog/Portfolio)
Layer 3: Paradigm variant     (Functional/OOP)
Layer 4: Styling config       (Tailwind/SCSS/Material UI/...)
Layer 5: State management     (Redux/Zustand/Pinia/...)
Layer 6: Extras               (ESLint/Prettier)
```

Each layer copies files on top of the previous one. Dependencies are merged into `package.json` automatically.

## Requirements

- Node.js >= 18.0.0

## Development

```bash
git clone https://github.com/beknurakhmed/webforge-cli.git
cd webforge-cli
npm install
npm run build
node dist/index.js
```

### Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build CLI with tsup |
| `npm run dev` | Watch mode build |
| `npm run start` | Run the CLI |
| `npm run typecheck` | TypeScript type checking |

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests at [github.com/beknurakhmed/webforge-cli](https://github.com/beknurakhmed/webforge-cli).

## License

MIT - [Beknur](https://github.com/beknurakhmed)
