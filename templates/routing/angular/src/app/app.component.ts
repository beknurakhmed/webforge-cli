import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e7eb">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <main style="padding: 1rem">
      <router-outlet />
    </main>
  `,
  styles: [`
    .active { font-weight: bold; }
  `]
})
export class AppComponent {
  title = '{{projectName}}';
}
