import { withLayout, styles } from '../main';

export function renderAnalytics(): string {
  const metrics = [
    { label: 'Page Views', value: '124,892', change: '+14.2%', icon: '👁️' },
    { label: 'Bounce Rate', value: '32.1%', change: '-2.4%', icon: '↩️' },
    { label: 'Session Duration', value: '4m 32s', change: '+18.7%', icon: '⏱️' },
    { label: 'New Visitors', value: '8,432', change: '+5.6%', icon: '🆕' },
  ];

  const topPages = [
    { page: '/home', views: '34,521', unique: '28,103', rate: '2.1%' },
    { page: '/products', views: '22,847', unique: '18,234', rate: '3.4%' },
    { page: '/about', views: '15,632', unique: '12,891', rate: '1.8%' },
    { page: '/blog', views: '12,456', unique: '10,234', rate: '4.2%' },
    { page: '/contact', views: '8,912', unique: '7,543', rate: '5.1%' },
  ];

  const sources = [
    { source: 'Organic Search', visitors: '45,231', percentage: 42 },
    { source: 'Direct', visitors: '28,432', percentage: 26 },
    { source: 'Social Media', visitors: '18,234', percentage: 17 },
    { source: 'Referral', visitors: '10,123', percentage: 9 },
    { source: 'Email', visitors: '6,432', percentage: 6 },
  ];

  return withLayout('Analytics', `
    <div class="${styles.statsGrid}">
      ${metrics.map(m => `
        <div class="${styles.statCard}">
          <div class="${styles.statIcon}">${m.icon}</div>
          <div class="${styles.statInfo}">
            <p class="${styles.statLabel}">${m.label}</p>
            <h3 class="${styles.statValue}">${m.value}</h3>
            <span class="${styles.statChange} ${styles.up}">${m.change}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="${styles.dashboardGrid}">
      <div class="${styles.card}">
        <h3>Traffic Overview</h3>
        <div class="${styles.chartPlaceholder}">
          <div class="${styles.barChart}">
            <div class="${styles.bar}" style="height: 50%"><span>Mon</span></div>
            <div class="${styles.bar}" style="height: 70%"><span>Tue</span></div>
            <div class="${styles.bar}" style="height: 65%"><span>Wed</span></div>
            <div class="${styles.bar}" style="height: 80%"><span>Thu</span></div>
            <div class="${styles.bar}" style="height: 90%"><span>Fri</span></div>
            <div class="${styles.bar}" style="height: 55%"><span>Sat</span></div>
            <div class="${styles.bar}" style="height: 40%"><span>Sun</span></div>
          </div>
        </div>
      </div>

      <div class="${styles.card}">
        <h3>Traffic Sources</h3>
        <div class="${styles.sourceList}">
          ${sources.map(s => `
            <div class="${styles.sourceItem}">
              <div class="${styles.sourceInfo}">
                <span class="${styles.sourceName}">${s.source}</span>
                <span class="${styles.sourceVisitors}">${s.visitors}</span>
              </div>
              <div class="${styles.progressBar}">
                <div class="${styles.progressFill}" style="width: ${s.percentage}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="${styles.card}">
      <h3>Top Pages</h3>
      <table class="${styles.dataTable}">
        <thead>
          <tr>
            <th>Page</th>
            <th>Views</th>
            <th>Unique Visitors</th>
            <th>Conversion Rate</th>
          </tr>
        </thead>
        <tbody>
          ${topPages.map(p => `
            <tr>
              <td><code>${p.page}</code></td>
              <td>${p.views}</td>
              <td>${p.unique}</td>
              <td>${p.rate}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `);
}
