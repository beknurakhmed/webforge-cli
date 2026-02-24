import { withLayout, styles } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="${styles.settingsGrid}">
      <div class="${styles.card}">
        <h3>Company Profile</h3>
        <div class="${styles.formGroup}">
          <label>Company Name</label>
          <input type="text" class="${styles.formInput}" value="{{projectName}}" />
        </div>
        <div class="${styles.formGroup}">
          <label>Industry</label>
          <select class="${styles.formInput}">
            <option selected>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Manufacturing</option>
            <option>Retail</option>
          </select>
        </div>
        <div class="${styles.formGroup}">
          <label>Company Size</label>
          <select class="${styles.formInput}">
            <option>1-10 employees</option>
            <option selected>11-50 employees</option>
            <option>51-200 employees</option>
            <option>201-1000 employees</option>
            <option>1000+ employees</option>
          </select>
        </div>
        <div class="${styles.formGroup}">
          <label>Website</label>
          <input type="url" class="${styles.formInput}" placeholder="https://yourcompany.com" />
        </div>
        <button class="${styles.btnAction}">Save Profile</button>
      </div>

      <div class="${styles.card}">
        <h3>Sales Pipeline Settings</h3>
        <div class="${styles.toggleGroup}">
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Auto-assign Leads</p>
              <p class="${styles.toggleDesc}">Automatically assign new leads to sales reps</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" checked />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Deal Reminders</p>
              <p class="${styles.toggleDesc}">Send reminders for deals approaching close date</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" checked />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Activity Tracking</p>
              <p class="${styles.toggleDesc}">Track email opens and link clicks</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" checked />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
          <div class="${styles.toggleItem}">
            <div>
              <p class="${styles.toggleLabel}">Weekly Reports</p>
              <p class="${styles.toggleDesc}">Receive weekly sales performance reports</p>
            </div>
            <label class="${styles.toggle}">
              <input type="checkbox" />
              <span class="${styles.toggleSlider}"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="${styles.card}">
        <h3>Email Integration</h3>
        <div class="${styles.formGroup}">
          <label>SMTP Server</label>
          <input type="text" class="${styles.formInput}" placeholder="smtp.example.com" />
        </div>
        <div class="${styles.formGroup}">
          <label>Port</label>
          <input type="number" class="${styles.formInput}" value="587" />
        </div>
        <div class="${styles.formGroup}">
          <label>Email Address</label>
          <input type="email" class="${styles.formInput}" placeholder="sales@company.com" />
        </div>
        <div class="${styles.formGroup}">
          <label>Password</label>
          <input type="password" class="${styles.formInput}" placeholder="Enter password" />
        </div>
        <button class="${styles.btnAction}">Connect Email</button>
      </div>

      <div class="${styles.card}">
        <h3>Data Management</h3>
        <div class="${styles.dangerZone}">
          <div class="${styles.dangerItem}">
            <div>
              <p class="${styles.toggleLabel}">Export Data</p>
              <p class="${styles.toggleDesc}">Download all contacts and deals as CSV</p>
            </div>
            <button class="${styles.btnAction}">Export</button>
          </div>
        </div>
        <div class="${styles.dangerZone}" style="margin-top: 1rem;">
          <div class="${styles.dangerItem}">
            <div>
              <p class="${styles.toggleLabel}">Delete All Data</p>
              <p class="${styles.toggleDesc}">Permanently remove all contacts and deals</p>
            </div>
            <button class="${styles.btnDangerAction}">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
