import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary" class="site-toolbar">
      <a routerLink="/" class="site-logo">{{ projectName }}</a>
      <span class="spacer"></span>
      <a mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a mat-button routerLink="/projects" routerLinkActive="active-link">Projects</a>
      <a mat-button routerLink="/about" routerLinkActive="active-link">About</a>
      <a mat-button routerLink="/contact" routerLinkActive="active-link">Contact</a>
    </mat-toolbar>
    <main><router-outlet /></main>
    <footer class="site-footer">
      <p>&copy; 2024 {{ projectName }}. Built with passion.</p>
    </footer>
  `,
  styles: [`
    .site-toolbar { position: sticky; top: 0; z-index: 10; }
    .site-logo { font-size: 1.25rem; font-weight: 700; color: #fff; text-decoration: none; }
    .spacer { flex: 1 1 auto; }
    .active-link { opacity: 1; }
    main { min-height: calc(100vh - 140px); background: #fafafa; }
    .site-footer { background: #212121; color: #9e9e9e; padding: 24px; text-align: center; font-size: 14px; }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
}
