export interface Contact {
  id: number
  name: string
  email: string
  company: string
  status: 'Lead' | 'Prospect' | 'Customer' | 'Churned'
  phone: string
}

export interface Deal {
  id: number
  name: string
  value: number
  company: string
  stage: 'Prospect' | 'Qualified' | 'Proposal' | 'Won'
}

export const contacts: Contact[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@techco.com', company: 'TechCo', status: 'Customer', phone: '555-0101' },
  { id: 2, name: 'Bob Smith', email: 'bob@startupinc.com', company: 'StartupInc', status: 'Lead', phone: '555-0102' },
  { id: 3, name: 'Carol Davis', email: 'carol@bigcorp.com', company: 'BigCorp', status: 'Prospect', phone: '555-0103' },
  { id: 4, name: 'Dan Wilson', email: 'dan@webflow.io', company: 'WebFlow', status: 'Customer', phone: '555-0104' },
  { id: 5, name: 'Eve Martinez', email: 'eve@designlab.co', company: 'DesignLab', status: 'Lead', phone: '555-0105' },
  { id: 6, name: 'Frank Lee', email: 'frank@cloudnet.com', company: 'CloudNet', status: 'Churned', phone: '555-0106' },
  { id: 7, name: 'Grace Kim', email: 'grace@appworks.dev', company: 'AppWorks', status: 'Customer', phone: '555-0107' },
  { id: 8, name: 'Hank Brown', email: 'hank@datawise.io', company: 'DataWise', status: 'Prospect', phone: '555-0108' },
]

export const deals: Deal[] = [
  { id: 1, name: 'Enterprise License', value: 45000, company: 'TechCo', stage: 'Won' },
  { id: 2, name: 'Starter Plan', value: 5000, company: 'StartupInc', stage: 'Prospect' },
  { id: 3, name: 'Pro Upgrade', value: 18000, company: 'BigCorp', stage: 'Qualified' },
  { id: 4, name: 'Annual Contract', value: 32000, company: 'WebFlow', stage: 'Proposal' },
  { id: 5, name: 'Team License', value: 12000, company: 'DesignLab', stage: 'Prospect' },
  { id: 6, name: 'Custom Solution', value: 60000, company: 'AppWorks', stage: 'Qualified' },
  { id: 7, name: 'Basic Plan', value: 3000, company: 'DataWise', stage: 'Proposal' },
  { id: 8, name: 'Premium Tier', value: 25000, company: 'CloudNet', stage: 'Won' },
]
