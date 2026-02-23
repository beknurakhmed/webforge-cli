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
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Deals Pipeline</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <div key={stage} className="bg-white rounded-xl p-4 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 pb-3 border-b-2 border-indigo-600">
              {stage}
            </h3>
            {deals
              .filter((d) => d.stage === stage)
              .map((deal) => (
                <div key={deal.id} className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{deal.company}</h4>
                  <p className="text-base font-bold text-indigo-600 my-1">${deal.value.toLocaleString()}</p>
                  <span className="text-xs text-gray-500">{deal.contact}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
