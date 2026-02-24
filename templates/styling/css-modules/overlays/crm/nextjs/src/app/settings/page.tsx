'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Settings</h1>
        <p>Manage your CRM preferences and configuration.</p>
      </div>

      <div className={styles.settingsGrid}>
        <div className={styles.settingsCard}>
          <h3>⚙️ General Settings</h3>
          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Currency</label>
            <select defaultValue="USD">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&#8364;)</option>
              <option value="GBP">GBP (&#163;)</option>
            </select>
          </div>
          <button className={styles.btnPrimary}>Save Changes</button>
        </div>

        <div className={styles.settingsCard}>
          <h3>🔔 Notifications</h3>
          <div className={styles.toggleGroup}>
            <div className={styles.toggleRow}>
              <div>
                <p className={styles.toggleLabel}>Email Notifications</p>
                <p className={styles.toggleDesc}>Receive email alerts for new leads</p>
              </div>
              <button className={notifications ? styles.toggleSwitchActive : styles.toggleSwitch} onClick={() => setNotifications(!notifications)}>
                <span className={styles.toggleKnob} />
              </button>
            </div>
            <div className={styles.toggleRow}>
              <div>
                <p className={styles.toggleLabel}>Deal Alerts</p>
                <p className={styles.toggleDesc}>Get notified when deal stages change</p>
              </div>
              <button className={dealAlerts ? styles.toggleSwitchActive : styles.toggleSwitch} onClick={() => setDealAlerts(!dealAlerts)}>
                <span className={styles.toggleKnob} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.settingsCard}>
          <h3>📊 Pipeline Stages</h3>
          <div className={styles.pipelineStagesList}>
            {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
              <div key={stage} className={styles.pipelineStageItem}>
                <span className={styles.stageNumber}>{i + 1}</span>
                <span>{stage}</span>
              </div>
            ))}
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
          <button className={styles.btnPrimary}>Update Password</button>
        </div>
      </div>
    </div>
  );
}
