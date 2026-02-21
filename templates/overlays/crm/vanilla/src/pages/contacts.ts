import { withLayout, contacts } from '../main';

export function renderContacts(): string {
  const statusCounts = {
    Lead: contacts.filter(c => c.status === 'Lead').length,
    Prospect: contacts.filter(c => c.status === 'Prospect').length,
    Customer: contacts.filter(c => c.status === 'Customer').length,
    Churned: contacts.filter(c => c.status === 'Churned').length,
  };

  return withLayout('Contacts', `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <p class="stat-label">All Contacts</p>
          <h3 class="stat-value">${contacts.length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🟢</div>
        <div class="stat-info">
          <p class="stat-label">Leads</p>
          <h3 class="stat-value">${statusCounts.Lead}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔵</div>
        <div class="stat-info">
          <p class="stat-label">Prospects</p>
          <h3 class="stat-value">${statusCounts.Prospect}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-info">
          <p class="stat-label">Customers</p>
          <h3 class="stat-value">${statusCounts.Customer}</h3>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>All Contacts</h3>
        <button class="btn-action">+ Add Contact</button>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Last Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${contacts.map(c => `
            <tr>
              <td>
                <div class="user-cell">
                  <span class="user-avatar">${c.avatar}</span>
                  <span>${c.name}</span>
                </div>
              </td>
              <td>${c.email}</td>
              <td>${c.company}</td>
              <td>${c.phone}</td>
              <td><span class="status-badge status-${c.status.toLowerCase()}">${c.status}</span></td>
              <td>${c.lastContact}</td>
              <td>
                <div class="action-btns">
                  <button class="btn-icon" title="Email">📧</button>
                  <button class="btn-icon" title="Call">📞</button>
                  <button class="btn-icon" title="Edit">✏️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
