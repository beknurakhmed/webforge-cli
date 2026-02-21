import { withLayout, contacts, deals } from '../main';

export function renderDashboardHome(): string {
  const totalValue = deals.filter(d => d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonValue = deals.filter(d => d.stage === 'Closed Won').reduce((s, d) => s + d.value, 0);
  const activeDeals = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost');
  const pipelineValue = activeDeals.reduce((s, d) => s + d.value, 0);

  return withLayout('Dashboard', `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <p class="stat-label">Total Contacts</p>
          <h3 class="stat-value">${contacts.length}</h3>
          <span class="stat-change up">+3 this month</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💼</div>
        <div class="stat-info">
          <p class="stat-label">Active Deals</p>
          <h3 class="stat-value">${activeDeals.length}</h3>
          <span class="stat-change up">+2 this week</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
          <p class="stat-label">Pipeline Value</p>
          <h3 class="stat-value">$${pipelineValue.toLocaleString()}</h3>
          <span class="stat-change up">+18.5%</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🏆</div>
        <div class="stat-info">
          <p class="stat-label">Won Revenue</p>
          <h3 class="stat-value">$${wonValue.toLocaleString()}</h3>
          <span class="stat-change up">+24.3%</span>
        </div>
      </div>
    </div>

    <div class="crm-grid">
      <div class="card">
        <h3>Deal Pipeline</h3>
        <div class="pipeline">
          ${['Discovery', 'Proposal', 'Negotiation', 'Closed Won'].map(stage => {
            const stageDeals = deals.filter(d => d.stage === stage);
            const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
            return `
              <div class="pipeline-stage">
                <div class="pipeline-header">
                  <span class="pipeline-name">${stage}</span>
                  <span class="pipeline-count">${stageDeals.length} deals</span>
                </div>
                <div class="pipeline-value">$${stageValue.toLocaleString()}</div>
                <div class="pipeline-bar">
                  <div class="pipeline-fill" style="width: ${(stageValue / totalValue) * 100}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Recent Contacts</h3>
        <div class="contact-list">
          ${contacts.slice(0, 5).map(c => `
            <div class="contact-item">
              <span class="contact-avatar">${c.avatar}</span>
              <div class="contact-info">
                <p class="contact-name">${c.name}</p>
                <p class="contact-company">${c.company}</p>
              </div>
              <span class="status-badge status-${c.status.toLowerCase()}">${c.status}</span>
            </div>
          `).join('')}
        </div>
        <a href="#/contacts" class="view-all-link">View all contacts &rarr;</a>
      </div>
    </div>

    <div class="card">
      <h3>Upcoming Closes</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Deal</th>
            <th>Company</th>
            <th>Value</th>
            <th>Stage</th>
            <th>Close Date</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          ${activeDeals.map(d => `
            <tr>
              <td><strong>${d.title}</strong></td>
              <td>${d.company}</td>
              <td class="deal-value">$${d.value.toLocaleString()}</td>
              <td><span class="stage-badge stage-${d.stage.toLowerCase().replace(' ', '-')}">${d.stage}</span></td>
              <td>${d.closeDate}</td>
              <td>
                <div class="probability">
                  <div class="probability-bar">
                    <div class="probability-fill" style="width: ${d.probability}%"></div>
                  </div>
                  <span>${d.probability}%</span>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
