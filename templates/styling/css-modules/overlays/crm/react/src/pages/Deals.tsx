import styles from './Deals.module.css';

interface Deal {
  id: number;
  company: string;
  value: number;
  contact: string;
  stage: string;
}

const deals: Deal[] = [
  { id: 1, company: 'Acme Corp', value: 25000, contact: 'John Smith', stage: 'Qualified' },
  { id: 2, company: 'Globex Inc', value: 18000, contact: 'Sarah Johnson', stage: 'Prospect' },
  { id: 3, company: 'Wayne Enterprises', value: 45000, contact: 'Emily Chen', stage: 'Proposal' },
  { id: 4, company: 'Stark Industries', value: 32000, contact: 'Alex Turner', stage: 'Won' },
  { id: 5, company: 'Initech', value: 12000, contact: 'Mike Davis', stage: 'Qualified' },
  { id: 6, company: 'Oscorp', value: 28000, contact: 'David Brown', stage: 'Prospect' },
  { id: 7, company: 'LexCorp', value: 55000, contact: 'Rachel Green', stage: 'Proposal' },
  { id: 8, company: 'Umbrella Corp', value: 15000, contact: 'Lisa Wang', stage: 'Won' },
];

const stages = ['Prospect', 'Qualified', 'Proposal', 'Won'];

function Deals() {
  return (
    <div>
      <header className={styles.crmHeader}>
        <h1>Deals Pipeline</h1>
      </header>
      <div className={styles.dealsBoard}>
        {stages.map((stage) => (
          <div key={stage} className={styles.dealsColumn}>
            <h3 className={styles.columnTitle}>{stage}</h3>
            {deals
              .filter((d) => d.stage === stage)
              .map((deal) => (
                <div key={deal.id} className={styles.dealCard}>
                  <h4 className={styles.dealCompany}>{deal.company}</h4>
                  <p className={styles.dealValue}>${deal.value.toLocaleString()}</p>
                  <span className={styles.dealContact}>{deal.contact}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
