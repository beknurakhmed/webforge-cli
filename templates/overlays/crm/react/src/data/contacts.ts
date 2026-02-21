export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Churned';
  phone: string;
}

export const contacts: Contact[] = [
  { id: 1, name: 'John Smith', email: 'john@acme.com', company: 'Acme Corp', status: 'Customer', phone: '(555) 100-2000' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@globex.com', company: 'Globex Inc', status: 'Lead', phone: '(555) 200-3000' },
  { id: 3, name: 'Mike Davis', email: 'mike@initech.com', company: 'Initech', status: 'Prospect', phone: '(555) 300-4000' },
  { id: 4, name: 'Emily Chen', email: 'emily@wayne.com', company: 'Wayne Enterprises', status: 'Customer', phone: '(555) 400-5000' },
  { id: 5, name: 'Alex Turner', email: 'alex@stark.com', company: 'Stark Industries', status: 'Lead', phone: '(555) 500-6000' },
  { id: 6, name: 'Lisa Wang', email: 'lisa@umbrella.com', company: 'Umbrella Corp', status: 'Churned', phone: '(555) 600-7000' },
  { id: 7, name: 'David Brown', email: 'david@oscorp.com', company: 'Oscorp', status: 'Prospect', phone: '(555) 700-8000' },
  { id: 8, name: 'Rachel Green', email: 'rachel@lexcorp.com', company: 'LexCorp', status: 'Customer', phone: '(555) 800-9000' },
];
