import type { Framework, Styling, StateManagement } from './types.js';

export const TEMPLATE_OPTIONS = [
  { value: 'landing' as const, label: 'Landing Page', hint: 'Marketing / product landing page' },
  { value: 'ecommerce' as const, label: 'E-commerce', hint: 'Online store with product listings' },
  { value: 'crm' as const, label: 'CRM', hint: 'Customer relationship management' },
  { value: 'dashboard' as const, label: 'Dashboard', hint: 'Admin dashboard with charts & tables' },
  { value: 'blog' as const, label: 'Blog', hint: 'Content-focused blog layout' },
  { value: 'portfolio' as const, label: 'Portfolio', hint: 'Personal / professional portfolio' },
];

export const FRAMEWORK_OPTIONS = [
  { value: 'react' as const, label: 'React', hint: 'Vite + React 19' },
  { value: 'vue' as const, label: 'Vue', hint: 'Vite + Vue 3' },
  { value: 'angular' as const, label: 'Angular', hint: 'Angular 19' },
  { value: 'vanilla' as const, label: 'Vanilla', hint: 'Vite + plain TS/JS' },
  { value: 'nextjs' as const, label: 'Next.js', hint: 'Next.js 15 (React)' },
  { value: 'nuxt' as const, label: 'Nuxt', hint: 'Nuxt 3 (Vue)' },
];

export const PARADIGM_OPTIONS = [
  { value: 'functional' as const, label: 'Functional', hint: 'Hooks, composables, pure functions' },
  { value: 'oop' as const, label: 'SOLID OOP', hint: 'Classes, services, dependency injection' },
];

export const STYLING_OPTIONS = [
  { value: 'tailwind' as const, label: 'Tailwind CSS', hint: 'Utility-first CSS framework' },
  { value: 'scss' as const, label: 'SCSS', hint: 'Sass preprocessor' },
  { value: 'css-modules' as const, label: 'CSS Modules', hint: 'Scoped CSS files' },
  { value: 'styled-components' as const, label: 'Styled Components', hint: 'CSS-in-JS' },
  { value: 'material-ui' as const, label: 'Material UI', hint: 'MUI component library' },
  { value: 'chakra-ui' as const, label: 'Chakra UI', hint: 'Accessible component library' },
  { value: 'ant-design' as const, label: 'Ant Design', hint: 'Enterprise UI components' },
  { value: 'angular-material' as const, label: 'Angular Material', hint: 'Material Design for Angular' },
];

export const STATE_OPTIONS = [
  { value: 'none' as const, label: 'None', hint: 'No state management library' },
  { value: 'redux' as const, label: 'Redux Toolkit', hint: 'Predictable state container' },
  { value: 'zustand' as const, label: 'Zustand', hint: 'Lightweight state management' },
  { value: 'mobx' as const, label: 'MobX', hint: 'Reactive state management' },
  { value: 'pinia' as const, label: 'Pinia', hint: 'Vue store library' },
  { value: 'rxjs' as const, label: 'RxJS', hint: 'Reactive extensions' },
  { value: 'ngrx' as const, label: 'NgRx', hint: 'Redux-inspired Angular state' },
];

export const ANGULAR_MODE_OPTIONS = [
  { value: 'standalone' as const, label: 'Standalone', hint: 'Modern standalone components (recommended)' },
  { value: 'modules' as const, label: 'NgModules', hint: 'Traditional module-based architecture' },
];

export const THEME_OPTIONS = [
  { value: 'light' as const, label: 'Light', hint: 'Light theme by default' },
  { value: 'dark' as const, label: 'Dark', hint: 'Dark theme by default' },
];

// Frameworks that have built-in file-based routing (no need for routing prompt)
export const BUILTIN_ROUTING_FRAMEWORKS: Framework[] = ['nextjs', 'nuxt'];

export const EXTRAS_OPTIONS = [
  { value: 'typescript' as const, label: 'TypeScript', hint: 'Type-safe JavaScript' },
  { value: 'eslint' as const, label: 'ESLint', hint: 'Code linting' },
  { value: 'prettier' as const, label: 'Prettier', hint: 'Code formatting' },
];

// Which styling solutions work with which frameworks
export const STYLING_COMPATIBILITY: Record<Styling, Framework[]> = {
  'tailwind': ['react', 'vue', 'angular', 'vanilla', 'nextjs', 'nuxt'],
  'scss': ['react', 'vue', 'angular', 'vanilla', 'nextjs', 'nuxt'],
  'css-modules': ['react', 'vue', 'vanilla', 'nextjs', 'nuxt'],
  'styled-components': ['react', 'nextjs'],
  'material-ui': ['react', 'nextjs'],
  'chakra-ui': ['react', 'nextjs'],
  'ant-design': ['react', 'vue', 'nextjs'],
  'angular-material': ['angular'],
};

// Which state management solutions work with which frameworks
export const STATE_COMPATIBILITY: Record<StateManagement, Framework[]> = {
  'none': ['react', 'vue', 'angular', 'vanilla', 'nextjs', 'nuxt'],
  'redux': ['react', 'nextjs'],
  'zustand': ['react', 'nextjs'],
  'mobx': ['react', 'nextjs'],
  'pinia': ['vue', 'nuxt'],
  'rxjs': ['angular'],
  'ngrx': ['angular'],
};
