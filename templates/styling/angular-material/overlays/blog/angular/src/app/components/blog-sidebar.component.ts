import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule, MatCardModule, MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card appearance="outlined" class="sidebar-widget">
      <mat-card-header>
        <mat-card-title>Categories</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-nav-list>
          @for (cat of categories; track cat) {
            <a mat-list-item [routerLink]="'/category/' + cat.toLowerCase()">
              <mat-icon matListItemIcon>label</mat-icon>
              <span matListItemTitle>{{ cat }}</span>
            </a>
          }
        </mat-nav-list>
      </mat-card-content>
    </mat-card>

    <mat-card appearance="outlined" class="sidebar-widget">
      <mat-card-header>
        <mat-card-title>Newsletter</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p class="newsletter-desc">Get the latest posts delivered to your inbox.</p>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Your email</mat-label>
          <input matInput [(ngModel)]="email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
        <button mat-raised-button color="primary" class="full-width" (click)="subscribed = true">
          <mat-icon>send</mat-icon> Subscribe
        </button>
        @if (subscribed) {
          <p class="success-msg">
            <mat-icon class="success-icon">check_circle</mat-icon>
            Thanks for subscribing!
          </p>
        }
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .sidebar-widget { margin-bottom: 16px; }
    .newsletter-desc { font-size: 13px; color: #666; margin-bottom: 12px; }
    .full-width { width: 100%; }
    .success-msg { margin-top: 12px; color: #4caf50; font-size: 13px; display: flex; align-items: center; gap: 6px; }
    .success-icon { font-size: 18px; width: 18px; height: 18px; }
  `]
})
export class BlogSidebarComponent {
  categories: string[] = ['Angular', 'TypeScript', 'CSS', 'Node.js', 'DevOps'];
  email = '';
  subscribed = false;
}
