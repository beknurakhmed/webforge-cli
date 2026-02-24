import styled from 'styled-components';

const CRMHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const DealsBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DealsColumn = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

const ColumnTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #4f46e5;
`;

const DealCard = styled.div`
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid #e5e7eb;
`;

const DealCompany = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.25rem;
`;

const DealValue = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #4f46e5;
  margin: 0.25rem 0;
`;

const DealContact = styled.span`
  font-size: 0.8rem;
  color: #6b7280;
`;

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
      <CRMHeader>
        <h1>Deals Pipeline</h1>
      </CRMHeader>
      <DealsBoard>
        {stages.map((stage) => (
          <DealsColumn key={stage}>
            <ColumnTitle>{stage}</ColumnTitle>
            {deals
              .filter((d) => d.stage === stage)
              .map((deal) => (
                <DealCard key={deal.id}>
                  <DealCompany>{deal.company}</DealCompany>
                  <DealValue>${deal.value.toLocaleString()}</DealValue>
                  <DealContact>{deal.contact}</DealContact>
                </DealCard>
              ))}
          </DealsColumn>
        ))}
      </DealsBoard>
    </div>
  );
}

export default Deals;
