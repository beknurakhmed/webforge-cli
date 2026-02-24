import { withLayout, contacts, deals, styles, getStageClass, getStatusClass } from '../main';

export function renderDashboardHome(): string {
  const totalValue = deals.filter(d => d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonValue = deals.filter(d => d.stage === 'Closed Won').reduce((s, d) => s + d.value, 0);
  const activeDeals = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost');
  const pipelineValue = activeDeals.reduce((s, d) => s + d.value, 0);

  return withLayout('Dashboard', `
    <div class="${styles.statsGrid}">
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">👥</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Total Contacts</p>
          <h3 class="${styles.statValue}">${contacts.length}</h3>
          <span class="${styles.statChange} ${styles.up}">+3 this month</span>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">💼</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Active Deals</p>
          <h3 class="${styles.statValue}">${activeDeals.length}</h3>
          <span class="${styles.statChange} ${styles.up}">+2 this week</span>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">📊</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Pipeline Value</p>
          <h3 class="${styles.statValue}">$${pipelineValue.toLocaleString()}</h3>
          <span class="${styles.statChange} ${styles.up}">+18.5%</span>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">🏆</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Won Revenue</p>
          <h3 class="${styles.statValue}">$${wonValue.toLocaleString()}</h3>
          <span class="${styles.statChange} ${styles.up}">+24.3%</span>
        </div>
      </div>
    </div>

    <div class="${styles.crmGrid}">
      <div class="${styles.card}">
        <h3>Deal Pipeline</h3>
        <div class="${styles.pipeline}">
          ${['Discovery', 'Proposal', 'Negotiation', 'Closed Won'].map(stage => {
            const stageDeals = deals.filter(d => d.stage === stage);
            const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
            return `
              <div class="${styles.pipelineStage}">
                <div class="${styles.pipelineHeader}">
                  <span class="${styles.pipelineName}">${stage}</span>
                  <span class="${styles.pipelineCount}">${stageDeals.length} deals</span>
                </div>
                <div class="${styles.pipelineValue}">$${stageValue.toLocaleString()}</div>
                <div class="${styles.pipelineBar}">
                  <div class="${styles.pipelineFill}" style="width: ${(stageValue / totalValue) * 100}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="${styles.card}">
        <h3>Recent Contacts</h3>
        <div class="${styles.contactList}">
          ${contacts.slice(0, 5).map(c => `
            <div class="${styles.contactItem}">
              <span class="${styles.contactAvatar}">${c.avatar}</span>
              <div class="${styles.contactInfo}">
                <p class="${styles.contactName}">${c.name}</p>
                <p class="${styles.contactCompany}">${c.company}</p>
              </div>
              <span class="${styles.statusBadge} ${getStatusClass(c.status)}">${c.status}</span>
            </div>
          `).join('')}
        </div>
        <a href="#/contacts" class="${styles.viewAllLink}">View all contacts &rarr;</a>
      </div>
    </div>

    <div class="${styles.card}">
      <h3>Upcoming Closes</h3>
      <table class="${styles.dataTable}">
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
              <td class="${styles.dealValue}">$${d.value.toLocaleString()}</td>
              <td><span class="${styles.stageBadge} ${getStageClass(d.stage)}">${d.stage}</span></td>
              <td>${d.closeDate}</td>
              <td>
                <div class="${styles.probability}">
                  <div class="${styles.probabilityBar}">
                    <div class="${styles.probabilityFill}" style="width: ${d.probability}%"></div>
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
