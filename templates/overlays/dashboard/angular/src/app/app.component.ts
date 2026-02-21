import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="dashboard-layout">
      <aside class="dashboard-sidebar">
        <div class="dashboard-sidebar-logo">{{ projectName }}</div>
        <nav class="dashboard-sidebar-nav">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            📊 Overview
          </a>
          <a routerLink="/analytics" routerLinkActive="active">
            📈 Analytics
          </a>
          <a routerLink="/users" routerLinkActive="active">
            👥 Users
          </a>
          <a routerLink="/settings" routerLinkActive="active">
            ⚙️ Settings
          </a>
        </nav>
      </aside>
      <main class="dashboard-main">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      font-family: system-ui, sans-serif;
      color: #374151;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .dashboard-layout {
      display: flex;
      height: 100%;
    }

    .dashboard-sidebar {
      width: 240px;
      background: #111827;
      color: #fff;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }

    .dashboard-sidebar-logo {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #374151;
    }

    .dashboard-sidebar-nav {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .dashboard-sidebar-nav a {
      color: #9ca3af;
      text-decoration: none;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.2s;
    }

    .dashboard-sidebar-nav a:hover {
      color: #fff;
      background: #1f2937;
    }

    .dashboard-sidebar-nav a.active {
      color: #fff;
      background: #4f46e5;
    }

    .dashboard-main {
      flex: 1;
      padding: 2rem;
      background: #f9fafb;
      overflow-y: auto;
    }

    @media (max-width: 768px) {
      .dashboard-layout {
        flex-direction: column;
      }

      .dashboard-sidebar {
        width: 100%;
        padding: 1rem;
      }

      .dashboard-sidebar-nav {
        flex-direction: row;
        overflow-x: auto;
        gap: 0.5rem;
      }

      .dashboard-sidebar-nav a {
        white-space: nowrap;
        padding: 0.5rem 0.75rem;
        font-size: 0.85rem;
      }

      .dashboard-main {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
}
