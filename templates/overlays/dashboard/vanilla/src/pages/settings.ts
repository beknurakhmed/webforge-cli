import { withLayout } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="settings-grid">
      <div class="card">
        <h3>General Settings</h3>
        <div class="form-group">
          <label>Application Name</label>
          <input type="text" class="form-input" value="{{projectName}}" />
        </div>
        <div class="form-group">
          <label>Timezone</label>
          <select class="form-input">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option selected>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Language</label>
          <select class="form-input">
            <option selected>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div class="form-group">
          <label>Date Format</label>
          <select class="form-input">
            <option selected>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <button class="btn-action">Save Changes</button>
      </div>

      <div class="card">
        <h3>Notifications</h3>
        <div class="toggle-group">
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Email Notifications</p>
              <p class="toggle-desc">Receive email alerts for important updates</p>
            </div>
            <label class="toggle">
              <input type="checkbox" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Push Notifications</p>
              <p class="toggle-desc">Get browser push notifications</p>
            </div>
            <label class="toggle">
              <input type="checkbox" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Weekly Reports</p>
              <p class="toggle-desc">Receive weekly summary reports via email</p>
            </div>
            <label class="toggle">
              <input type="checkbox" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Marketing Emails</p>
              <p class="toggle-desc">Receive updates about new features and offers</p>
            </div>
            <label class="toggle">
              <input type="checkbox" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>Security</h3>
        <div class="form-group">
          <label>Current Password</label>
          <input type="password" class="form-input" placeholder="Enter current password" />
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input type="password" class="form-input" placeholder="Enter new password" />
        </div>
        <div class="form-group">
          <label>Confirm New Password</label>
          <input type="password" class="form-input" placeholder="Confirm new password" />
        </div>
        <button class="btn-action">Update Password</button>
      </div>

      <div class="card">
        <h3>Danger Zone</h3>
        <div class="danger-zone">
          <div class="danger-item">
            <div>
              <p class="toggle-label">Delete Account</p>
              <p class="toggle-desc">Permanently delete your account and all data</p>
            </div>
            <button class="btn-danger-action">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
