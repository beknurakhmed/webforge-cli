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
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Deals Pipeline</h1>
        <p className="text-gray-500 mt-1">Pipeline value: ${pipelineTotal.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[400px]">
        {stages.map((stage) => {
          const stageDeals = deals.filter((d) => d.stage === stage);
          const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div key={stage} className="bg-gray-100 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-bold text-gray-900">{stage}</h3>
                <span className="bg-white text-gray-500 text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">{stageDeals.length}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">${stageTotal.toLocaleString()}</p>
              <div className="flex flex-col gap-3">
                {stageDeals.map((deal) => (
                  <div key={deal.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{deal.company}</h4>
                    <p className="text-lg font-bold text-indigo-600 mb-2">${deal.value.toLocaleString()}</p>
                    <span className="text-xs text-gray-500">👤 {deal.contact}</span>
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
