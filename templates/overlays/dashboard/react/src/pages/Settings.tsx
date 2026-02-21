import { useState } from 'react';

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="page-settings">
      <h1>Settings</h1>
      <div className="settings-card">
        <h3>Profile</h3>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
        </div>
      </div>
      <div className="settings-card">
        <h3>Preferences</h3>
        <div className="form-toggle">
          <label>
            <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            <span>Dark Mode</span>
          </label>
        </div>
        <div className="form-toggle">
          <label>
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            <span>Email Notifications</span>
          </label>
        </div>
      </div>
      <button className="primary-btn">Save Changes</button>
    </div>
  );
}
