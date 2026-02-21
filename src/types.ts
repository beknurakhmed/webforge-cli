export type TemplateType = 'landing' | 'ecommerce' | 'crm' | 'dashboard' | 'blog' | 'portfolio';

export type Framework = 'react' | 'vue' | 'angular' | 'vanilla' | 'nextjs' | 'nuxt';

export type Styling =
  | 'tailwind'
  | 'scss'
  | 'css-modules'
  | 'styled-components'
  | 'material-ui'
  | 'chakra-ui'
  | 'ant-design'
  | 'angular-material';

export type StateManagement = 'none' | 'redux' | 'zustand' | 'mobx' | 'pinia' | 'rxjs' | 'ngrx';

export type Paradigm = 'functional' | 'oop';

export type Extra = 'typescript' | 'eslint' | 'prettier';

export interface ProjectConfig {
  projectName: string;
  templateType: TemplateType;
  framework: Framework;
  paradigm: Paradigm;
  styling: Styling;
  stateManagement: StateManagement;
  extras: Extra[];
  targetDir: string;
}
