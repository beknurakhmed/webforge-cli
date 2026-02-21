import { withLayout, stats, activities } from '../main';

export function renderOverview(): string {
  return withLayout('Overview', `
    <div class="stats-grid">
      ${stats.map(s => `
        <div class="stat-card">
          <div class="stat-icon">${s.icon}</div>
          <div class="stat-info">
            <p class="stat-label">${s.label}</p>
            <h3 class="stat-value">${s.value}</h3>
            <span class="stat-change ${s.trend}">${s.change}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="dashboard-grid">
      <div class="card chart-card">
        <h3>Revenue Overview</h3>
        <div class="chart-placeholder">
          <div class="bar-chart">
            <div class="bar" style="height: 60%"><span>Jan</span></div>
            <div class="bar" style="height: 45%"><span>Feb</span></div>
            <div class="bar" style="height: 75%"><span>Mar</span></div>
            <div class="bar" style="height: 55%"><span>Apr</span></div>
            <div class="bar" style="height: 85%"><span>May</span></div>
            <div class="bar" style="height: 70%"><span>Jun</span></div>
            <div class="bar" style="height: 90%"><span>Jul</span></div>
            <div class="bar" style="height: 65%"><span>Aug</span></div>
          </div>
        </div>
      </div>

      <div class="card activity-card">
        <h3>Recent Activity</h3>
        <div class="activity-list">
          ${activities.map(a => `
            <div class="activity-item">
              <span class="activity-avatar">${a.avatar}</span>
              <div class="activity-info">
                <p><strong>${a.user}</strong> ${a.action}</p>
                <span class="activity-time">${a.time}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <h3>Quick Actions</h3>
      <div class="quick-actions">
        <a href="#/analytics" class="quick-action-btn">📈 View Analytics</a>
        <a href="#/users" class="quick-action-btn">👥 Manage Users</a>
        <a href="#/settings" class="quick-action-btn">⚙️ Settings</a>
      </div>
    </div>
  `);
}
