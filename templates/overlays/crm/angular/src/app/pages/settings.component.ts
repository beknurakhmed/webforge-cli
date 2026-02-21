import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1 class="page-title">Settings</h1>
    <div class="settings-card">
      <h2 class="section-title">Company Information</h2>
      <div class="form-field">
        <label>Company Name</label>
        <input [(ngModel)]="companyName" placeholder="Enter company name" />
      </div>
      <div class="form-field">
        <label>Email Address</label>
        <input [(ngModel)]="email" type="email" placeholder="Enter email" />
      </div>
      <button class="btn-save" (click)="saved = true">Save Changes</button>
      @if (saved) {
        <p class="success-msg">Settings saved successfully!</p>
      }
    </div>
  `,
  styles: [`
    .page-title {
      font-size: 24px;
      font-weight: 700;
      color: #111827;
      margin-bottom: 24px;
    }

    .settings-card {
      background: #fff;
      border-radius: 12px;
      padding: 28px;
      max-width: 480px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 20px;
    }

    .form-field {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    label {
      font-size: 13px;
      font-weight: 500;
      color: #374151;
    }

    input {
      padding: 10px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
    }

    input:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .btn-save {
      margin-top: 8px;
      padding: 10px 24px;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-save:hover {
      background: #4338ca;
    }

    .success-msg {
      margin-top: 12px;
      color: #059669;
      font-size: 14px;
      font-weight: 500;
    }
  `]
})
export class SettingsComponent {
  companyName = '';
  email = '';
  saved = false;
}
