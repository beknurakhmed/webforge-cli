import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <h1 class="page-title">Settings</h1>
    <mat-card appearance="outlined" class="settings-card">
      <mat-card-header>
        <mat-card-title>Company Information</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Company Name</mat-label>
          <input matInput [(ngModel)]="companyName" placeholder="Enter company name" />
          <mat-icon matPrefix>business</mat-icon>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email Address</mat-label>
          <input matInput [(ngModel)]="email" type="email" placeholder="Enter email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="saved = true">
          <mat-icon>save</mat-icon> Save Changes
        </button>
      </mat-card-actions>
      @if (saved) {
        <mat-card-content>
          <p class="success-msg">
            <mat-icon class="success-icon">check_circle</mat-icon>
            Settings saved successfully!
          </p>
        </mat-card-content>
      }
    </mat-card>
  `,
  styles: [`
    .page-title { font-size: 1.5rem; font-weight: 700; color: #212121; margin-bottom: 24px; }
    .settings-card { max-width: 480px; }
    .full-width { width: 100%; }
    mat-card-actions { padding: 0 16px 16px; }
    .success-msg { color: #4caf50; font-size: 14px; font-weight: 500; display: flex; align-items: center; gap: 8px; }
    .success-icon { font-size: 20px; width: 20px; height: 20px; }
  `]
})
export class SettingsComponent {
  companyName = '';
  email = '';
  saved = false;
}
