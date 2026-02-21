'use client';

import { useState } from 'react';

interface Deal {
  id: number;
  title: string;
  company: string;
  value: string;
  stage: 'Qualification' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  probability: number;
  contact: string;
  closeDate: string;
  icon: string;
}

const deals: Deal[] = [
  { id: 1, title: 'Enterprise License', company: 'TechCorp Inc.', value: '$45,000', stage: 'Negotiation', probability: 75, contact: 'Sarah Chen', closeDate: '2025-02-15', icon: '🏢' },
  { id: 2, title: 'Platform Migration', company: 'Innovate.io', value: '$28,000', stage: 'Proposal', probability: 50, contact: 'James Wilson', closeDate: '2025-03-01', icon: '🔄' },
  { id: 3, title: 'Design System', company: 'DesignLab Co.', value: '$15,000', stage: 'Qualification', probability: 25, contact: 'Maria Garcia', closeDate: '2025-03-15', icon: '🎨' },
  { id: 4, title: 'Premium Package', company: 'GlobalNet Ltd.', value: '$62,000', stage: 'Closed Won', probability: 100, contact: 'Robert Kim', closeDate: '2025-01-10', icon: '🎉' },
  { id: 5, title: 'Starter Plan', company: 'StartupXYZ', value: '$18,500', stage: 'Proposal', probability: 40, contact: 'Emily Brown', closeDate: '2025-02-28', icon: '🚀' },
  { id: 6, title: 'Consulting Retainer', company: 'Enterprise Solutions', value: '$8,200', stage: 'Closed Lost', probability: 0, contact: 'Michael Davis', closeDate: '2025-01-05', icon: '📋' },
];

const stages = ['All', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

export default function DealsPage() {
  const [activeStage, setActiveStage] = useState('All');

  const filtered = activeStage === 'All' ? deals : deals.filter((d) => d.stage === activeStage);
  const pipelineTotal = deals
    .filter((d) => d.stage !== 'Closed Won' && d.stage !== 'Closed Lost')
    .reduce((sum, d) => sum + parseInt(d.value.replace(/[$,]/g, '')), 0);

  return (
    <div className="page">
      <div className="page-header">
        <h1>Deals</h1>
        <p>Track your sales pipeline and deal progress.</p>
      </div>

      <div className="deals-summary">
        <div className="deal-stat">
          <p className="deal-stat-value">{deals.length}</p>
          <p className="deal-stat-label">Total Deals</p>
        </div>
        <div className="deal-stat">
          <p className="deal-stat-value">${pipelineTotal.toLocaleString()}</p>
          <p className="deal-stat-label">Pipeline Value</p>
        </div>
        <div className="deal-stat">
          <p className="deal-stat-value">{deals.filter((d) => d.stage === 'Closed Won').length}</p>
          <p className="deal-stat-label">Won This Month</p>
        </div>
        <div className="deal-stat">
          <p className="deal-stat-value">{Math.round(deals.reduce((sum, d) => sum + d.probability, 0) / deals.length)}%</p>
          <p className="deal-stat-label">Avg. Probability</p>
        </div>
      </div>

      <div className="filter-group" style={{ marginBottom: '1.5rem' }}>
        {stages.map((stage) => (
          <button
            key={stage}
            className={`filter-btn ${activeStage === stage ? 'active' : ''}`}
            onClick={() => setActiveStage(stage)}
          >
            {stage}
          </button>
        ))}
      </div>

      <div className="deals-grid">
        {filtered.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="deal-card-header">
              <span className="deal-icon">{deal.icon}</span>
              <span className={`stage-badge ${deal.stage.toLowerCase().replace(' ', '-')}`}>{deal.stage}</span>
            </div>
            <h3 className="deal-title">{deal.title}</h3>
            <p className="deal-company">{deal.company}</p>
            <div className="deal-details">
              <div className="deal-detail">
                <span className="deal-label">Value</span>
                <span className="deal-value-text">{deal.value}</span>
              </div>
              <div className="deal-detail">
                <span className="deal-label">Contact</span>
                <span>{deal.contact}</span>
              </div>
              <div className="deal-detail">
                <span className="deal-label">Close Date</span>
                <span>{deal.closeDate}</span>
              </div>
            </div>
            <div className="deal-probability">
              <div className="probability-header">
                <span>Probability</span>
                <span>{deal.probability}%</span>
              </div>
              <div className="probability-bar">
                <div className="probability-fill" style={{ width: `${deal.probability}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
