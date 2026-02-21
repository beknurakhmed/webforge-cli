'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your CRM preferences and configuration.</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h3>⚙️ General Settings</h3>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Currency</label>
            <select defaultValue="USD">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&#8364;)</option>
              <option value="GBP">GBP (&#163;)</option>
            </select>
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>

        <div className="settings-card">
          <h3>🔔 Notifications</h3>
          <div className="toggle-group">
            <div className="toggle-row">
              <div>
                <p className="toggle-label">Email Notifications</p>
                <p className="toggle-desc">Receive email alerts for new leads</p>
              </div>
              <button className={`toggle-switch ${notifications ? 'active' : ''}`} onClick={() => setNotifications(!notifications)}>
                <span className="toggle-knob" />
              </button>
            </div>
            <div className="toggle-row">
              <div>
                <p className="toggle-label">Deal Alerts</p>
                <p className="toggle-desc">Get notified when deal stages change</p>
              </div>
              <button className={`toggle-switch ${dealAlerts ? 'active' : ''}`} onClick={() => setDealAlerts(!dealAlerts)}>
                <span className="toggle-knob" />
              </button>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h3>📊 Pipeline Stages</h3>
          <div className="pipeline-stages-list">
            {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
              <div key={stage} className="pipeline-stage-item">
                <span className="stage-number">{i + 1}</span>
                <span>{stage}</span>
              </div>
            ))}
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
          <button className="btn btn-primary">Update Password</button>
        </div>
      </div>
    </div>
  );
}
