function Settings() {
  return (
    <div>
      <header className="crm-header">
        <h1>Settings</h1>
      </header>
      <div className="settings-card">
        <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" defaultValue="My Company" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" defaultValue="admin@company.com" />
          </div>
          <div className="form-group">
            <label htmlFor="timezone">Timezone</label>
            <select id="timezone" defaultValue="UTC-5">
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-7">Mountain Time (UTC-7)</option>
              <option value="UTC-6">Central Time (UTC-6)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European (UTC+1)</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
