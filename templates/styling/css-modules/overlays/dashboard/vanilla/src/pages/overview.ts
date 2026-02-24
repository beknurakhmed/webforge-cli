import { withLayout, stats, activities, styles } from '../main';

export function renderOverview(): string {
  return withLayout('Overview', `
    <div class="${styles.statsGrid}">
      ${stats.map(s => `
        <div class="${styles.statCard}">
          <div class="${styles.statIcon}">${s.icon}</div>
          <div class="${styles.statInfo}">
            <p class="${styles.statLabel}">${s.label}</p>
            <h3 class="${styles.statValue}">${s.value}</h3>
            <span class="${styles.statChange} ${s.trend === 'up' ? styles.up : styles.down}">${s.change}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="${styles.dashboardGrid}">
      <div class="${styles.card}">
        <h3>Revenue Overview</h3>
        <div class="${styles.chartPlaceholder}">
          <div class="${styles.barChart}">
            <div class="${styles.bar}" style="height: 60%"><span>Jan</span></div>
            <div class="${styles.bar}" style="height: 45%"><span>Feb</span></div>
            <div class="${styles.bar}" style="height: 75%"><span>Mar</span></div>
            <div class="${styles.bar}" style="height: 55%"><span>Apr</span></div>
            <div class="${styles.bar}" style="height: 85%"><span>May</span></div>
            <div class="${styles.bar}" style="height: 70%"><span>Jun</span></div>
            <div class="${styles.bar}" style="height: 90%"><span>Jul</span></div>
            <div class="${styles.bar}" style="height: 65%"><span>Aug</span></div>
          </div>
        </div>
      </div>

      <div class="${styles.card}">
        <h3>Recent Activity</h3>
        <div class="${styles.activityList}">
          ${activities.map(a => `
            <div class="${styles.activityItem}">
              <span class="${styles.activityAvatar}">${a.avatar}</span>
              <div class="${styles.activityInfo}">
                <p><strong>${a.user}</strong> ${a.action}</p>
                <span class="${styles.activityTime}">${a.time}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="${styles.card}">
      <h3>Quick Actions</h3>
      <div class="${styles.quickActions}">
        <a href="#/analytics" class="${styles.quickActionBtn}">📈 View Analytics</a>
        <a href="#/users" class="${styles.quickActionBtn}">👥 Manage Users</a>
        <a href="#/settings" class="${styles.quickActionBtn}">⚙️ Settings</a>
      </div>
    </div>
  `);
}
