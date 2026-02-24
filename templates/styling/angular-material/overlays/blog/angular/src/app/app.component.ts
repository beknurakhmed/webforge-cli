import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <mat-toolbar color="primary" class="blog-toolbar">
      <a routerLink="/" class="blog-logo">{{ projectName }}</a>
      <span class="spacer"></span>
      <a mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a mat-button routerLink="/about" routerLinkActive="active-link">About</a>
    </mat-toolbar>
    <div class="blog-content">
      <router-outlet />
    </div>
    <footer class="blog-footer">
      <mat-divider></mat-divider>
      <div class="footer-inner">
        <p>&copy; 2024 {{ projectName }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .blog-toolbar { position: sticky; top: 0; z-index: 10; }
    .blog-logo { font-size: 1.25rem; font-weight: 700; color: #fff; text-decoration: none; }
    .spacer { flex: 1 1 auto; }
    .active-link { opacity: 1; font-weight: 600; }
    .blog-content { min-height: calc(100vh - 140px); background: #fafafa; }
    .blog-footer { background: #212121; color: #9e9e9e; }
    .footer-inner { padding: 24px; text-align: center; font-size: 14px; }
    mat-divider { border-top-color: #424242; }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
}
