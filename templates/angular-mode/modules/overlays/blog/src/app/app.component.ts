import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="blog-header">
      <div class="blog-header__container">
        <a routerLink="/" class="blog-header__logo">{{ projectName }}</a>
        <nav class="blog-header__nav">
          <a
            routerLink="/"
            routerLinkActive="blog-header__nav-link--active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="blog-header__nav-link"
          >Home</a>
          <a
            routerLink="/about"
            routerLinkActive="blog-header__nav-link--active"
            class="blog-header__nav-link"
          >About</a>
        </nav>
      </div>
    </header>
    <div class="blog-content">
      <router-outlet />
    </div>
    <footer class="blog-footer">
      <div class="blog-footer__container">
        <p>&copy; 2024 {{ projectName }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .blog-header {
      background: #fff;
      border-bottom: 1px solid #e5e7eb;
      padding: 16px 0;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .blog-header__container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .blog-header__logo {
      font-size: 20px;
      font-weight: 700;
      color: #4f46e5;
      text-decoration: none;
    }

    .blog-header__nav {
      display: flex;
      gap: 24px;
    }

    .blog-header__nav-link {
      text-decoration: none;
      color: #6b7280;
      font-size: 15px;
      font-weight: 500;
      transition: color 0.2s;
    }

    .blog-header__nav-link:hover,
    .blog-header__nav-link--active {
      color: #4f46e5;
    }

    .blog-content {
      min-height: calc(100vh - 140px);
      background: #f9fafb;
    }

    .blog-footer {
      background: #111827;
      color: #9ca3af;
      padding: 24px 0;
      text-align: center;
      font-size: 14px;
    }

    .blog-footer__container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
    }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
}
