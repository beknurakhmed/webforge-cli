'use client';

import { useState } from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`margin-bottom: 2rem; h1 { font-size: 1.75rem; color: #111827; font-weight: 700; } p { color: #6b7280; margin-top: 0.25rem; }`;
const TableCard = styled.div`background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden;`;
const TableControls = styled.div`display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; gap: 1rem; flex-wrap: wrap;`;
const SearchInput = styled.div`display: flex; align-items: center; gap: 0.5rem; background: #f3f4f6; border-radius: 8px; padding: 0.5rem 1rem; flex: 1; max-width: 300px; input { border: none; outline: none; background: transparent; font-size: 0.9rem; width: 100%; }`;
const FilterGroup = styled.div`display: flex; gap: 0.35rem;`;
const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0.4rem 0.85rem; border: 1px solid ${props => props.$active ? '#4f46e5' : '#e5e7eb'}; border-radius: 6px;
  background: ${props => props.$active ? '#4f46e5' : 'white'}; cursor: pointer; font-size: 0.8rem; font-weight: 500;
  color: ${props => props.$active ? 'white' : '#374151'}; transition: all 0.2s;
  &:hover { background: #4f46e5; color: white; border-color: #4f46e5; }
`;

const StyledTable = styled.table`
  width: 100%; border-collapse: collapse;
  th { text-align: left; padding: 0.75rem 1.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e5e7eb; background: #f3f4f6; }
  td { padding: 0.875rem 1.5rem; font-size: 0.9rem; border-bottom: 1px solid #e5e7eb; }
  tbody tr:hover { background: #f9fafb; }
`;

const ContactCell = styled.div`display: flex; align-items: center; gap: 0.5rem;`;
const ContactAvatar = styled.span`font-size: 1.25rem;`;
const ContactNameText = styled.span`font-weight: 600; color: #111827;`;
const ContactEmail = styled.td`color: #6b7280;`;
const ContactValueCell = styled.td`font-weight: 600; color: #4f46e5;`;
const DateCell = styled.td`color: #6b7280;`;
const EmptyState = styled.div`text-align: center; padding: 2rem; color: #6b7280;`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
  background: ${props => { switch(props.$status) { case 'customer': return '#d1fae5'; case 'prospect': return '#dbeafe'; case 'lead': return '#fef3c7'; case 'inactive': return '#fee2e2'; default: return '#f3f4f6'; } }};
  color: ${props => { switch(props.$status) { case 'customer': return '#059669'; case 'prospect': return '#2563eb'; case 'lead': return '#d97706'; case 'inactive': return '#dc2626'; default: return '#6b7280'; } }};
`;

interface Contact { id: number; name: string; email: string; company: string; phone: string; status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive'; value: string; avatar: string; lastContact: string; }

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩', lastContact: '2025-01-15' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨', lastContact: '2025-01-14' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩', lastContact: '2025-01-13' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨', lastContact: '2025-01-12' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩', lastContact: '2025-01-11' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨', lastContact: '2024-12-20' },
];

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = contacts.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <PageHeader><h1>Contacts</h1><p>Manage your contacts and customer relationships.</p></PageHeader>
      <TableCard>
        <TableControls>
          <SearchInput><span>🔍</span><input type="text" placeholder="Search contacts..." value={search} onChange={(e) => setSearch(e.target.value)} /></SearchInput>
          <FilterGroup>
            {['All', 'Lead', 'Prospect', 'Customer', 'Inactive'].map((status) => (
              <FilterBtn key={status} $active={statusFilter === status} onClick={() => setStatusFilter(status)}>{status}</FilterBtn>
            ))}
          </FilterGroup>
        </TableControls>
        <div style={{ overflowX: 'auto' }}>
          <StyledTable>
            <thead><tr><th>Name</th><th>Company</th><th>Email</th><th>Phone</th><th>Status</th><th>Value</th><th>Last Contact</th></tr></thead>
            <tbody>
              {filtered.map((contact) => (
                <tr key={contact.id}>
                  <td><ContactCell><ContactAvatar>{contact.avatar}</ContactAvatar><ContactNameText>{contact.name}</ContactNameText></ContactCell></td>
                  <td>{contact.company}</td>
                  <ContactEmail>{contact.email}</ContactEmail>
                  <td>{contact.phone}</td>
                  <td><StatusBadge $status={contact.status.toLowerCase()}>{contact.status}</StatusBadge></td>
                  <ContactValueCell>{contact.value}</ContactValueCell>
                  <DateCell>{contact.lastContact}</DateCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
        {filtered.length === 0 && <EmptyState><p>No contacts found matching your criteria.</p></EmptyState>}
      </TableCard>
    </div>
  );
}
