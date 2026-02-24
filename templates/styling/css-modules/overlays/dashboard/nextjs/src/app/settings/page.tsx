'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Settings</h1>
        <p>Manage your application preferences and configuration.</p>
      </div>

      <div className={styles.settingsGrid}>
        <div className={styles.settingsCard}>
          <h3>⚙️ General</h3>
          <div className={styles.formGroup}>
            <label>Site Name</label>
            <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Timezone</label>
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)}>
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
              <option value="CET">Central European</option>
            </select>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h3>🔔 Notifications</h3>
          <div className={styles.toggleGroup}>
            <div className={styles.toggleRow}>
              <div>
                <p className={styles.toggleLabel}>Email Notifications</p>
                <p className={styles.toggleDesc}>Receive email updates about activity</p>
              </div>
              <button
                className={notifications ? styles.toggleSwitchActive : styles.toggleSwitch}
                onClick={() => setNotifications(!notifications)}
              >
                <span className={styles.toggleKnob} />
              </button>
            </div>
            <div className={styles.toggleRow}>
              <div>
                <p className={styles.toggleLabel}>Dark Mode</p>
                <p className={styles.toggleDesc}>Use dark theme for the dashboard</p>
              </div>
              <button
                className={darkMode ? styles.toggleSwitchActive : styles.toggleSwitch}
                onClick={() => setDarkMode(!darkMode)}
              >
                <span className={styles.toggleKnob} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h3>🔒 Security</h3>
          <div className={styles.formGroup}>
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" />
          </div>
          <div className={styles.formGroup}>
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm new password" />
          </div>
          <button className={styles.btnPrimary}>Update Password</button>
        </div>

        <div className={styles.settingsCard}>
          <h3>🎨 Appearance</h3>
          <div className={styles.themeOptions}>
            <div className={styles.themeOptionActive}>
              <div className={styles.themePreviewLight} />
              <span>Light</span>
            </div>
            <div className={styles.themeOption}>
              <div className={styles.themePreviewDark} />
              <span>Dark</span>
            </div>
            <div className={styles.themeOption}>
              <div className={styles.themePreviewSystem} />
              <span>System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
