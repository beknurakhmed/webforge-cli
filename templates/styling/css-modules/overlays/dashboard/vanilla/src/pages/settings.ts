import { withLayout, styles } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="${styles.settingsGrid}">
      <div class="${styles.card}">
        <h3>General Settings</h3>
        <div class="${styles.formGroup}">
          <label>Application Name</label>
          <input type="text" class="${styles.formInput}" value="{{projectName}}" />
        </div>
        <div class="${styles.formGroup}">
          <label>Timezone</label>
          <select class="${styles.formInput}">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option selected>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European)</option>
          </select>
        </div>
        <div class="${styles.formGroup}">
          <label>Language</label>
          <select class="${styles.formInput}">
            <option selected>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div class="${styles.formGroup}">
          <label>Date Format</label>
          <select class="${styles.formInput}">
            <option selected>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <button class="${styles.btnAction}">Save Changes</button>
      </div>

      <div class="${styles.card}">
        <h3>Notifications</h3>
        <div class="${styles.toggleGroup}">
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Email Notifications</p>
              <p class="${styles.toggleDesc}">Receive email alerts for important updates</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" checked />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Push Notifications</p>
              <p class="${styles.toggleDesc}">Get browser push notifications</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" checked />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Weekly Reports</p>
              <p class="${styles.toggleDesc}">Receive weekly summary reports via email</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Marketing Emails</p>
              <p class="${styles.toggleDesc}">Receive updates about new features and offers</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="${styles.card}">
        <h3>Security</h3>
        <div class="${styles.formGroup}">
          <label>Current Password</label>
          <input type="password" class="${styles.formInput}" placeholder="Enter current password" />
        </div>
        <div class="${styles.formGroup}">
          <label>New Password</label>
          <input type="password" class="${styles.formInput}" placeholder="Enter new password" />
        </div>
        <div class="${styles.formGroup}">
          <label>Confirm New Password</label>
          <input type="password" class="${styles.formInput}" placeholder="Confirm new password" />
        </div>
        <button class="${styles.btnAction}">Update Password</button>
      </div>

      <div class="${styles.card}">
        <h3>Danger Zone</h3>
        <div class="${styles.dangerZone}">
          <div class="${styles.dangerItem}">
            <div>
              <p class="${styles.toggleLabel}">Delete Account</p>
              <p class="${styles.toggleDesc}">Permanently delete your account and all data</p>
            </div>
            <button class="${styles.btnDangerAction}">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
