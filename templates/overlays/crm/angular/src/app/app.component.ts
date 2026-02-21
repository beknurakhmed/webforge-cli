import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="layout">
      <aside class="sidebar">
        <div class="logo">{{projectName}}</div>
        <nav>
          <a routerLink="/" routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: true }">
            <span class="nav-icon">📊</span> Dashboard
          </a>
          <a routerLink="/contacts" routerLinkActive="active">
            <span class="nav-icon">👤</span> Contacts
          </a>
          <a routerLink="/deals" routerLinkActive="active">
            <span class="nav-icon">💼</span> Deals
          </a>
          <a routerLink="/settings" routerLinkActive="active">
            <span class="nav-icon">⚙️</span> Settings
          </a>
        </nav>
      </aside>
      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      min-height: 100vh;
      background: #f9fafb;
    }

    .sidebar {
      width: 240px;
      background: #111827;
      color: #fff;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .logo {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      padding: 0 8px;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    nav a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: 8px;
      color: #9ca3af;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
    }

    nav a:hover {
      background: #1f2937;
      color: #fff;
    }

    nav a.active {
      background: #4f46e5;
      color: #fff;
    }

    .nav-icon { font-size: 18px; }

    .content {
      flex: 1;
      padding: 32px;
      overflow-y: auto;
    }

    @media (max-width: 768px) {
      .layout { flex-direction: column; }

      .sidebar {
        width: 100%;
        padding: 16px;
        gap: 16px;
      }

      nav {
        flex-direction: row;
        overflow-x: auto;
      }
    }
  `]
})
export class AppComponent {}
