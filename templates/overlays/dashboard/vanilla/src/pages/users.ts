import { withLayout, users } from '../main';

export function renderUsers(): string {
  const roleCount = {
    Admin: users.filter(u => u.role === 'Admin').length,
    Editor: users.filter(u => u.role === 'Editor').length,
    Viewer: users.filter(u => u.role === 'Viewer').length,
  };

  return withLayout('Users', `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <p class="stat-label">Total Users</p>
          <h3 class="stat-value">${users.length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <p class="stat-label">Active</p>
          <h3 class="stat-value">${users.filter(u => u.status === 'Active').length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🛡️</div>
        <div class="stat-info">
          <p class="stat-label">Admins</p>
          <h3 class="stat-value">${roleCount.Admin}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✏️</div>
        <div class="stat-info">
          <p class="stat-label">Editors</p>
          <h3 class="stat-value">${roleCount.Editor}</h3>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>All Users</h3>
        <button class="btn-action">+ Add User</button>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(u => `
            <tr>
              <td>
                <div class="user-cell">
                  <span class="user-avatar">${u.avatar}</span>
                  <span>${u.name}</span>
                </div>
              </td>
              <td>${u.email}</td>
              <td><span class="badge badge-${u.role.toLowerCase()}">${u.role}</span></td>
              <td><span class="status-dot ${u.status.toLowerCase()}"></span> ${u.status}</td>
              <td>${u.joined}</td>
              <td>
                <button class="btn-action btn-small">Edit</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
