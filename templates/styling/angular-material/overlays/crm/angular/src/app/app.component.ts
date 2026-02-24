import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatListModule, MatIconModule],
  template: `
    <mat-sidenav-container class="crm-container">
      <mat-sidenav mode="side" opened class="crm-sidenav">
        <div class="sidenav-header">{{projectName}}</div>
        <mat-nav-list>
          <a mat-list-item routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/contacts" routerLinkActive="active-link">
            <mat-icon matListItemIcon>person</mat-icon>
            <span matListItemTitle>Contacts</span>
          </a>
          <a mat-list-item routerLink="/deals" routerLinkActive="active-link">
            <mat-icon matListItemIcon>work</mat-icon>
            <span matListItemTitle>Deals</span>
          </a>
          <a mat-list-item routerLink="/settings" routerLinkActive="active-link">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="crm-content">
        <router-outlet />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    :host { display: block; height: 100vh; }
    .crm-container { height: 100%; }
    .crm-sidenav { width: 240px; background: #fafafa; }
    .sidenav-header {
      font-size: 1.25rem;
      font-weight: 700;
      padding: 20px 16px;
      border-bottom: 1px solid #e0e0e0;
      color: #3f51b5;
    }
    .crm-content { padding: 32px; background: #fafafa; }
    .active-link { background: rgba(63, 81, 181, 0.08) !important; color: #3f51b5 !important; }
  `]
})
export class AppComponent {
  projectName = '{{projectName}}';
}
