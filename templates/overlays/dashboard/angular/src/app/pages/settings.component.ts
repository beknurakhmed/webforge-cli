import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <h1 class="settings-heading">Settings</h1>
    <div class="settings-card">
      <h2 class="settings-section-title">Profile</h2>
      <div class="settings-form-group">
        <label class="settings-label">Display Name</label>
        <input type="text" value="Admin User" />
      </div>
      <div class="settings-form-group">
        <label class="settings-label">Email</label>
        <input type="email" value="admin@example.com" />
      </div>
      <h2 class="settings-section-title">Preferences</h2>
      <div class="settings-form-group settings-toggle-row">
        <label class="settings-label">Email Notifications</label>
        <input type="checkbox" checked />
      </div>
      <div class="settings-form-group settings-toggle-row">
        <label class="settings-label">Dark Mode</label>
        <input type="checkbox" />
      </div>
      <div class="settings-form-group">
        <label class="settings-label">Language</label>
        <select>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
      <button class="settings-save-btn">Save Changes</button>
    </div>
  `,
  styles: [`
    .settings-heading {
      font-size: 1.5rem;
      color: #111827;
      margin-bottom: 1.5rem;
    }

    .settings-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid #e5e7eb;
      max-width: 600px;
    }

    .settings-section-title {
      font-size: 1.1rem;
      color: #111827;
      margin: 1.25rem 0 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid #f3f4f6;
    }

    .settings-section-title:first-of-type {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }

    .settings-form-group {
      margin-bottom: 1rem;
    }

    .settings-label {
      display: block;
      font-size: 0.85rem;
      color: #374151;
      font-weight: 500;
      margin-bottom: 0.35rem;
    }

    .settings-card input[type="text"],
    .settings-card input[type="email"],
    .settings-card select {
      width: 100%;
      padding: 0.6rem 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    .settings-card input:focus,
    .settings-card select:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    }

    .settings-toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .settings-toggle-row .settings-label {
      margin-bottom: 0;
    }

    .settings-toggle-row input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #4f46e5;
    }

    .settings-save-btn {
      margin-top: 1rem;
      padding: 0.7rem 1.5rem;
      background: #4f46e5;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }

    .settings-save-btn:hover {
      background: #4338ca;
    }
  `]
})
export class SettingsComponent {}
