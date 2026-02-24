import { withLayout, contacts, styles, getStatusClass } from '../main';

export function renderContacts(): string {
  const statusCounts = {
    Lead: contacts.filter(c => c.status === 'Lead').length,
    Prospect: contacts.filter(c => c.status === 'Prospect').length,
    Customer: contacts.filter(c => c.status === 'Customer').length,
    Churned: contacts.filter(c => c.status === 'Churned').length,
  };

  return withLayout('Contacts', `
    <div class="${styles.statsGrid}">
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">👥</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">All Contacts</p>
          <h3 class="${styles.statValue}">${contacts.length}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">🟢</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Leads</p>
          <h3 class="${styles.statValue}">${statusCounts.Lead}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">🔵</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Prospects</p>
          <h3 class="${styles.statValue}">${statusCounts.Prospect}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">⭐</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Customers</p>
          <h3 class="${styles.statValue}">${statusCounts.Customer}</h3>
        </div>
      </div>
    </div>

    <div class="${styles.card}">
      <div class="${styles.cardHeader}">
        <h3>All Contacts</h3>
        <button class="${styles.btnAction}">+ Add Contact</button>
      </div>
      <table class="${styles.dataTable}">
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
                <div class="${styles.userCell}">
                  <span class="${styles.userAvatar}">${c.avatar}</span>
                  <span>${c.name}</span>
                </div>
              </td>
              <td>${c.email}</td>
              <td>${c.company}</td>
              <td>${c.phone}</td>
              <td><span class="${styles.statusBadge} ${getStatusClass(c.status)}">${c.status}</span></td>
              <td>${c.lastContact}</td>
              <td>
                <div class="${styles.actionBtns}">
                  <button class="${styles.btnIcon}" title="Email">📧</button>
                  <button class="${styles.btnIcon}" title="Call">📞</button>
                  <button class="${styles.btnIcon}" title="Edit">✏️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
