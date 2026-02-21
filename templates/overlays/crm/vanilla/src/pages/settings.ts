import { withLayout } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="settings-grid">
      <div class="card">
        <h3>Company Profile</h3>
        <div class="form-group">
          <label>Company Name</label>
          <input type="text" class="form-input" value="{{projectName}}" />
        </div>
        <div class="form-group">
          <label>Industry</label>
          <select class="form-input">
            <option selected>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Manufacturing</option>
            <option>Retail</option>
          </select>
        </div>
        <div class="form-group">
          <label>Company Size</label>
          <select class="form-input">
            <option>1-10 employees</option>
            <option selected>11-50 employees</option>
            <option>51-200 employees</option>
            <option>201-1000 employees</option>
            <option>1000+ employees</option>
          </select>
        </div>
        <div class="form-group">
          <label>Website</label>
          <input type="url" class="form-input" placeholder="https://yourcompany.com" />
        </div>
        <button class="btn-action">Save Profile</button>
      </div>

      <div class="card">
        <h3>Sales Pipeline Settings</h3>
        <div class="toggle-group">
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Auto-assign Leads</p>
              <p class="toggle-desc">Automatically assign new leads to sales reps</p>
            </div>
            <label class="toggle">
              <input type="checkbox" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Deal Reminders</p>
              <p class="toggle-desc">Send reminders for deals approaching close date</p>
            </div>
            <label class="toggle">
              <input type="checkbox" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Activity Tracking</p>
              <p class="toggle-desc">Track email opens and link clicks</p>
            </div>
            <label class="toggle">
              <input type="checkbox" checked />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="toggle-item">
            <div>
              <p class="toggle-label">Weekly Reports</p>
              <p class="toggle-desc">Receive weekly sales performance reports</p>
            </div>
            <label class="toggle">
              <input type="checkbox" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="card">
        <h3>Email Integration</h3>
        <div class="form-group">
          <label>SMTP Server</label>
          <input type="text" class="form-input" placeholder="smtp.example.com" />
        </div>
        <div class="form-group">
          <label>Port</label>
          <input type="number" class="form-input" value="587" />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-input" placeholder="sales@company.com" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-input" placeholder="Enter password" />
        </div>
        <button class="btn-action">Connect Email</button>
      </div>

      <div class="card">
        <h3>Data Management</h3>
        <div class="danger-zone">
          <div class="danger-item">
            <div>
              <p class="toggle-label">Export Data</p>
              <p class="toggle-desc">Download all contacts and deals as CSV</p>
            </div>
            <button class="btn-action">Export</button>
          </div>
        </div>
        <div class="danger-zone" style="margin-top: 1rem;">
          <div class="danger-item">
            <div>
              <p class="toggle-label">Delete All Data</p>
              <p class="toggle-desc">Permanently remove all contacts and deals</p>
            </div>
            <button class="btn-danger-action">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
