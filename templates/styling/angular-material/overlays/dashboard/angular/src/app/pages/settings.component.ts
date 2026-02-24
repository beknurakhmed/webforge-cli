import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSlideToggleModule, MatSelectModule, MatDividerModule, MatIconModule],
  template: `
    <h1 class="page-title">Settings</h1>
    <mat-card appearance="outlined" class="settings-card">
      <mat-card-header>
        <mat-card-title>Profile</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Display Name</mat-label>
          <input matInput value="Admin User" />
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" value="admin@example.com" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-divider></mat-divider>

        <h3 class="section-title">Preferences</h3>
        <div class="toggle-row">
          <span>Email Notifications</span>
          <mat-slide-toggle checked color="primary"></mat-slide-toggle>
        </div>
        <div class="toggle-row">
          <span>Dark Mode</span>
          <mat-slide-toggle color="primary"></mat-slide-toggle>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Language</mat-label>
          <mat-select value="English">
            <mat-option value="English">English</mat-option>
            <mat-option value="Spanish">Spanish</mat-option>
            <mat-option value="French">French</mat-option>
          </mat-select>
          <mat-icon matPrefix>language</mat-icon>
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary">
          <mat-icon>save</mat-icon> Save Changes
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .page-title { font-size: 1.5rem; color: #212121; margin-bottom: 24px; }
    .settings-card { max-width: 600px; }
    .full-width { width: 100%; }
    .section-title { font-size: 1.1rem; margin: 20px 0 12px; color: #212121; }
    .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; }
    mat-divider { margin: 16px 0; }
    mat-card-actions { padding: 8px 16px 16px; }
  `]
})
export class SettingsComponent {}
