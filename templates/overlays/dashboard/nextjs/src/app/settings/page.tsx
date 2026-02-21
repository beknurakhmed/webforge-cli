'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <div className="page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your application preferences and configuration.</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h3>⚙️ General</h3>
          <div className="form-group">
            <label>Site Name</label>
            <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div className="form-group">
            <label>Timezone</label>
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
              <option value="CET">Central European</option>
            </select>
          </div>
        </div>

        <div className="settings-card">
          <h3>🔔 Notifications</h3>
          <div className="toggle-group">
            <div className="toggle-row">
              <div>
                <p className="toggle-label">Email Notifications</p>
                <p className="toggle-desc">Receive email updates about activity</p>
              </div>
              <button
                className={`toggle-switch ${notifications ? 'active' : ''}`}
                onClick={() => setNotifications(!notifications)}
              >
                <span className="toggle-knob" />
              </button>
            </div>
            <div className="toggle-row">
              <div>
                <p className="toggle-label">Dark Mode</p>
                <p className="toggle-desc">Use dark theme for the dashboard</p>
              </div>
              <button
                className={`toggle-switch ${darkMode ? 'active' : ''}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <span className="toggle-knob" />
              </button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h3>🔒 Security</h3>
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm new password" />
          </div>
          <button className="btn btn-primary">Update Password</button>
        </div>

        <div className="settings-card">
          <h3>🎨 Appearance</h3>
          <div className="theme-options">
            <div className="theme-option active">
              <div className="theme-preview light" />
              <span>Light</span>
            </div>
            <div className="theme-option">
              <div className="theme-preview dark" />
              <span>Dark</span>
            </div>
            <div className="theme-option">
              <div className="theme-preview system" />
              <span>System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
