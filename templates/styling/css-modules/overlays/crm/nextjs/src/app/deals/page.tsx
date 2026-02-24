'use client';

import styles from './page.module.css';

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
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Deals Pipeline</h1>
        <p>Pipeline value: ${pipelineTotal.toLocaleString()}</p>
      </div>

      <div className={styles.dealsBoard}>
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div key={stage} className={styles.dealsColumn}>
              <div className={styles.columnHeader}>
                <h3 className={styles.columnTitle}>{stage}</h3>
                <span className={styles.columnCount}>{stageDeals.length}</span>
              </div>
              <p className={styles.columnTotal}>${stageTotal.toLocaleString()}</p>
              <div className={styles.columnCards}>
                {stageDeals.map((deal) => (
                  <div key={deal.id} className={styles.dealCard}>
                    <h4 className={styles.dealCompany}>{deal.company}</h4>
                    <p className={styles.dealValue}>${deal.value.toLocaleString()}</p>
                    <span className={styles.dealContact}>👤 {deal.contact}</span>
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
