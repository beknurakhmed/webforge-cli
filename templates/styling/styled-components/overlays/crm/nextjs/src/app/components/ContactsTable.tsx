'use client';

import styled from 'styled-components';

const TableCard = styled.div`background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden;`;
const TableHeader = styled.div`display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem;`;
const TableTitle = styled.h3`font-size: 1rem; font-weight: 600; color: #111827;`;
const ContactCount = styled.span`font-size: 0.85rem; color: #6b7280;`;

const StyledTable = styled.table`
  width: 100%; border-collapse: collapse;
  th { text-align: left; padding: 0.75rem 1.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e5e7eb; background: #f3f4f6; }
  td { padding: 0.875rem 1.5rem; font-size: 0.9rem; border-bottom: 1px solid #e5e7eb; }
  tbody tr:hover { background: #f9fafb; }
`;

const ContactCell = styled.div`display: flex; align-items: center; gap: 0.5rem;`;
const ContactAvatar = styled.span`font-size: 1.25rem;`;
const ContactName = styled.p`font-weight: 600; color: #111827;`;
const ContactPhone = styled.p`font-size: 0.75rem; color: #6b7280;`;
const ContactEmail = styled.td`color: #6b7280;`;
const ContactValue = styled.td`font-weight: 600; color: #4f46e5;`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
  background: ${props => { switch(props.$status) { case 'customer': return '#d1fae5'; case 'prospect': return '#dbeafe'; case 'lead': return '#fef3c7'; case 'inactive': return '#fee2e2'; default: return '#f3f4f6'; } }};
  color: ${props => { switch(props.$status) { case 'customer': return '#059669'; case 'prospect': return '#2563eb'; case 'lead': return '#d97706'; case 'inactive': return '#dc2626'; default: return '#6b7280'; } }};
`;

interface Contact { id: number; name: string; email: string; company: string; phone: string; status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive'; value: string; avatar: string; }

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨' },
];

interface ContactsTableProps { limit?: number; showSearch?: boolean; }

export function ContactsTable({ limit, showSearch = false }: ContactsTableProps) {
  const displayContacts = limit ? contacts.slice(0, limit) : contacts;
  return (
    <TableCard>
      <TableHeader>
        <TableTitle>{showSearch ? 'All Contacts' : 'Recent Contacts'}</TableTitle>
        {showSearch && <ContactCount>{contacts.length} contacts</ContactCount>}
      </TableHeader>
      <div style={{ overflowX: 'auto' }}>
        <StyledTable>
          <thead><tr><th>Name</th><th>Company</th><th>Email</th><th>Status</th><th>Value</th></tr></thead>
          <tbody>
            {displayContacts.map((contact) => (
              <tr key={contact.id}>
                <td><ContactCell><ContactAvatar>{contact.avatar}</ContactAvatar><div><ContactName>{contact.name}</ContactName><ContactPhone>{contact.phone}</ContactPhone></div></ContactCell></td>
                <td>{contact.company}</td>
                <ContactEmail>{contact.email}</ContactEmail>
                <td><StatusBadge $status={contact.status.toLowerCase()}>{contact.status}</StatusBadge></td>
                <ContactValue>{contact.value}</ContactValue>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </TableCard>
  );
}
