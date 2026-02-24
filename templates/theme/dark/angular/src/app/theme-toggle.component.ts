import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      (click)="toggle()"
      [style.padding]="'0.25rem 0.5rem'"
      [style.fontSize]="'0.875rem'"
      [style.border]="'1px solid var(--border)'"
      [style.borderRadius]="'0.25rem'"
      [style.background]="'var(--bg-secondary)'"
      [style.color]="'var(--text)'"
      [style.cursor]="'pointer'"
      aria-label="Toggle theme"
    >
      {{ dark ? '\u2600\uFE0F' : '\uD83C\uDF19' }}
    </button>
  `,
})
export class ThemeToggleComponent {
  dark = typeof window !== 'undefined'
    ? localStorage.getItem('theme') !== 'light'
    : true;

  constructor() {
    this.applyTheme();
  }

  toggle(): void {
    this.dark = !this.dark;
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
