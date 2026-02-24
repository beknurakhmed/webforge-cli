import { withLayout, deals, styles, getStageClass } from '../main';

export function renderDeals(): string {
  const stages = ['Discovery', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'] as const;
  const totalPipeline = deals.filter(d => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost').reduce((s, d) => s + d.value, 0);
  const wonDeals = deals.filter(d => d.stage === 'Closed Won');
  const lostDeals = deals.filter(d => d.stage === 'Closed Lost');
  const winRate = wonDeals.length + lostDeals.length > 0
    ? Math.round((wonDeals.length / (wonDeals.length + lostDeals.length)) * 100)
    : 0;

  return withLayout('Deals', `
    <div class="${styles.statsGrid}">
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">💼</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Total Deals</p>
          <h3 class="${styles.statValue}">${deals.length}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">📊</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Pipeline Value</p>
          <h3 class="${styles.statValue}">$${totalPipeline.toLocaleString()}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">🏆</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Won Deals</p>
          <h3 class="${styles.statValue}">${wonDeals.length}</h3>
        </div>
      </div>
      <div class="${styles.statCard}">
        <div class="${styles.statIcon}">📈</div>
        <div class="${styles.statInfo}">
          <p class="${styles.statLabel}">Win Rate</p>
          <h3 class="${styles.statValue}">${winRate}%</h3>
        </div>
      </div>
    </div>

    <div class="${styles.card}">
      <div class="${styles.cardHeader}">
        <h3>Deal Pipeline Board</h3>
        <button class="${styles.btnAction}">+ New Deal</button>
      </div>
      <div class="${styles.pipelineBoard}">
        ${stages.filter(s => s !== 'Closed Lost').map(stage => {
          const stageDeals = deals.filter(d => d.stage === stage);
          const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
          return `
            <div class="${styles.pipelineColumn}">
              <div class="${styles.pipelineColHeader}">
                <span class="${styles.pipelineColTitle}">${stage}</span>
                <span class="${styles.pipelineColCount}">${stageDeals.length}</span>
              </div>
              <div class="${styles.pipelineColValue}">$${stageValue.toLocaleString()}</div>
              <div class="${styles.pipelineCards}">
                ${stageDeals.map(d => `
                  <div class="${styles.dealCard}">
                    <h4>${d.title}</h4>
                    <p class="${styles.dealCompany}">${d.company}</p>
                    <p class="${styles.dealValue}">$${d.value.toLocaleString()}</p>
                    <div class="${styles.dealFooter}">
                      <span class="${styles.dealContact}">👤 ${d.contact}</span>
                      <span class="${styles.dealDate}">📅 ${d.closeDate}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="${styles.card}">
      <h3>All Deals</h3>
      <table class="${styles.dataTable}">
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
              <td class="${styles.dealValue}">$${d.value.toLocaleString()}</td>
              <td><span class="${styles.stageBadge} ${getStageClass(d.stage)}">${d.stage}</span></td>
              <td>${d.contact}</td>
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
