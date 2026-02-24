'use client';

import styled from 'styled-components';

const PageHeader = styled.div`margin-bottom: 2rem; h1 { font-size: 1.75rem; color: #111827; font-weight: 700; } p { color: #6b7280; margin-top: 0.25rem; }`;

const DealsBoard = styled.div`display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const DealsColumn = styled.div`background: white; border-radius: 12px; padding: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08);`;
const ColumnHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;`;
const ColumnTitle = styled.h3`font-size: 0.95rem; font-weight: 600; color: #111827;`;
const ColumnCount = styled.span`background: #f3f4f6; padding: 0.15rem 0.5rem; border-radius: 10px; font-size: 0.75rem; color: #6b7280; font-weight: 600;`;
const ColumnTotal = styled.p`font-size: 0.85rem; color: #6b7280; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 2px solid #4f46e5;`;
const ColumnCards = styled.div`display: flex; flex-direction: column; gap: 0.75rem;`;
const DealCard = styled.div`background: #f9fafb; border-radius: 8px; padding: 1rem; border: 1px solid #e5e7eb;`;
const DealCompany = styled.h4`font-size: 0.95rem; font-weight: 600; color: #111827; margin: 0 0 0.25rem;`;
const DealValue = styled.p`font-size: 1.1rem; font-weight: 700; color: #4f46e5; margin: 0.25rem 0;`;
const DealContact = styled.span`font-size: 0.8rem; color: #6b7280;`;

interface Deal { id: number; company: string; value: number; contact: string; stage: string; }

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
  const pipelineTotal = deals.filter((d) => d.stage !== 'Won').reduce((sum, d) => sum + d.value, 0);

  return (
    <div>
      <PageHeader><h1>Deals Pipeline</h1><p>Pipeline value: ${pipelineTotal.toLocaleString()}</p></PageHeader>
      <DealsBoard>
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);
          return (
            <DealsColumn key={stage}>
              <ColumnHeader><ColumnTitle>{stage}</ColumnTitle><ColumnCount>{stageDeals.length}</ColumnCount></ColumnHeader>
              <ColumnTotal>${stageTotal.toLocaleString()}</ColumnTotal>
              <ColumnCards>
                {stageDeals.map((deal) => (
                  <DealCard key={deal.id}>
                    <DealCompany>{deal.company}</DealCompany>
                    <DealValue>${deal.value.toLocaleString()}</DealValue>
                    <DealContact>👤 {deal.contact}</DealContact>
                  </DealCard>
                ))}
              </ColumnCards>
            </DealsColumn>
          );
        })}
      </DealsBoard>
    </div>
  );
}
