import { useState } from 'react';
import styles from './Settings.module.css';

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={styles.pageSettings}>
      <h1>Settings</h1>
      <div className={styles.settingsCard}>
        <h3>Profile</h3>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.formInput} />
        </div>
      </div>
      <div className={styles.settingsCard}>
        <h3>Preferences</h3>
        <div className={styles.formToggle}>
          <label>
            <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            <span>Dark Mode</span>
          </label>
        </div>
        <div className={styles.formToggle}>
          <label>
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            <span>Email Notifications</span>
          </label>
        </div>
      </div>
      <button className={styles.primaryBtn}>Save Changes</button>
    </div>
  );
}
