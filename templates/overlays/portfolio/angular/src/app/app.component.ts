import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="site-navbar">
      <div class="site-container">
        <a routerLink="/" class="site-logo">{{ projectName }}</a>
        <div class="nav-links">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >Home</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>
      </div>
    </nav>
    <main><router-outlet /></main>
    <footer class="site-footer">
      <div class="site-container">
        <p>&copy; 2024 {{ projectName }}. Built with passion.</p>
      </div>
    </footer>
  `,
  styles: [`
    .site-navbar {
      background: #fff;
      border-bottom: 1px solid #e5e7eb;
      padding: 16px 0;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .site-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .site-navbar .site-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .site-logo {
      font-size: 20px;
      font-weight: 700;
      color: #4f46e5;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 28px;
    }

    .nav-links a {
      text-decoration: none;
      color: #6b7280;
      font-size: 15px;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #4f46e5;
    }

    main {
      min-height: calc(100vh - 140px);
      background: #f9fafb;
    }

    .site-footer {
      background: #111827;
      color: #9ca3af;
      padding: 24px 0;
      text-align: center;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .nav-links {
        gap: 16px;
      }

      .nav-links a {
        font-size: 14px;
      }
    }
  `]
})
export class AppComponent {}
