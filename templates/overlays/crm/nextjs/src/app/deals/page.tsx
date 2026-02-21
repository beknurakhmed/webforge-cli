'use client';

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'TechCorp Inc.', value: 45000, contact: 'Sarah Chen', stage: 'Prospect' },
  { id: 2, company: 'Innovate.io', value: 28000, contact: 'James Wilson', stage: 'Proposal' },
  { id: 3, company: 'DesignLab Co.', value: 15000, contact: 'Maria Garcia', stage: 'Qualified' },
  { id: 4, company: 'GlobalNet Ltd.', value: 62000, contact: 'Robert Kim', stage: 'Won' },
  { id: 5, company: 'StartupXYZ', value: 18500, contact: 'Emily Brown', stage: 'Proposal' },
  { id: 6, company: 'Oscorp Labs', value: 34000, contact: 'Michael Davis', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Qualified' },
  { id: 8, company: 'Umbrella Co.', value: 21000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

export default function DealsPage() {
  const pipelineTotal = deals
    .filter((d) => d.stage !== 'Won')
    .reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Deals Pipeline</h1>
        <p>Pipeline value: ${pipelineTotal.toLocaleString()}</p>
      </div>

      <div className="deals-board">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div key={stage} className="deals-column">
              <div className="column-header">
                <h3 className="column-title">{stage}</h3>
                <span className="column-count">{stageDeals.length}</span>
              </div>
              <p className="column-total">${stageTotal.toLocaleString()}</p>
              <div className="column-cards">
                {stageDeals.map((deal) => (
                  <div key={deal.id} className="deal-card">
                    <h4 className="deal-company">{deal.company}</h4>
                    <p className="deal-value">${deal.value.toLocaleString()}</p>
                    <span className="deal-contact">👤 {deal.contact}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
