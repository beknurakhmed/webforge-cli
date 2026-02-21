import { withLayout, deals } from '../main';

export function renderDeals(): string {
  const stages = ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'] as const;
  const totalPipeline = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonDeals = deals.filter(d => d.stage === 'Closed Won');
  const lostDeals = deals.filter(d => d.stage === 'Closed Lost');
  const winRate = wonDeals.length + lostDeals.length > 0
    ? Math.round((wonDeals.length / (wonDeals.length + lostDeals.length)) * 100)
    : 0;

  return withLayout('Deals', `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">💼</div>
        <div class="stat-info">
          <p class="stat-label">Total Deals</p>
          <h3 class="stat-value">${deals.length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
          <p class="stat-label">Pipeline Value</p>
          <h3 class="stat-value">$${totalPipeline.toLocaleString()}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🏆</div>
        <div class="stat-info">
          <p class="stat-label">Won Deals</p>
          <h3 class="stat-value">${wonDeals.length}</h3>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-info">
          <p class="stat-label">Win Rate</p>
          <h3 class="stat-value">${winRate}%</h3>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Deal Pipeline Board</h3>
        <button class="btn-action">+ New Deal</button>
      </div>
      <div class="pipeline-board">
        ${stages.filter(s => s !== 'Closed Lost').map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage);
          const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
          return `
            <div class="pipeline-column">
              <div class="pipeline-col-header">
                <span class="pipeline-col-title">${stage}</span>
                <span class="pipeline-col-count">${stageDeals.length}</span>
              </div>
              <div class="pipeline-col-value">$${stageValue.toLocaleString()}</div>
              <div class="pipeline-cards">
                ${stageDeals.map(d => `
                  <div class="deal-card">
                    <h4>${d.title}</h4>
                    <p class="deal-company">${d.company}</p>
                    <p class="deal-value">$${d.value.toLocaleString()}</p>
                    <div class="deal-footer">
                      <span class="deal-contact">👤 ${d.contact}</span>
                      <span class="deal-date">📅 ${d.closeDate}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <h3>All Deals</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Deal</th>
            <th>Company</th>
            <th>Value</th>
            <th>Stage</th>
            <th>Contact</th>
            <th>Close Date</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          ${deals.map(d => `
            <tr>
              <td><strong>${d.title}</strong></td>
              <td>${d.company}</td>
              <td class="deal-value">$${d.value.toLocaleString()}</td>
              <td><span class="stage-badge stage-${d.stage.toLowerCase().replace(' ', '-')}">${d.stage}</span></td>
              <td>${d.contact}</td>
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
