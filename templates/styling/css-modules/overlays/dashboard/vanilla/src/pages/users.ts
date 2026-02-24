import { withLayout, users, styles } from '../main';

export function renderUsers(): string {
  const roleCount = {
    Admin: users.filter(u => u.role === 'Admin').length,
    Editor: users.filter(u => u.role === 'Editor').length,
    Viewer: users.filter(u => u.role === 'Viewer').length,
  };

  return withLayout('Users', `
    <div class="${styles.statsGrid}">
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">👥</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Total Users</p>
          <h3 class="${styles.statValue}">${users.length}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">✅</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Active</p>
          <h3 class="${styles.statValue}">${users.filter(u => u.status === 'Active').length}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">🛡️</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Admins</p>
          <h3 class="${styles.statValue}">${roleCount.Admin}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">✏️</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Editors</p>
          <h3 class="${styles.statValue}">${roleCount.Editor}</h3>
        </div>
      </div>
    </div>

    <div class="${styles.card}">
      <div class="${styles.cardHeader}">
        <h3>All Users</h3>
        <button class="${styles.btnAction}">+ Add User</button>
      </div>
      <table class="${styles.dataTable}">
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
                <div class="${styles.userCell}">
                  <span class="${styles.userAvatar}">${u.avatar}</span>
                  <span>${u.name}</span>
                </div>
              </td>
              <td>${u.email}</td>
              <td><span class="${styles.badge} ${u.role === 'Admin' ? styles.badgeAdmin : u.role === 'Editor' ? styles.badgeEditor : styles.badgeViewer}">${u.role}</span></td>
              <td><span class="${styles.statusDot} ${u.status === 'Active' ? styles.statusDotActive : styles.statusDotInactive}"></span> ${u.status}</td>
              <td>${u.joined}</td>
              <td>
                <button class="${styles.btnAction} ${styles.btnSmall}">Edit</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
