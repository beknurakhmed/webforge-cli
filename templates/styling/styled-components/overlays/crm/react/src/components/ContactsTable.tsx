import styled from 'styled-components';
import type { Contact } from '../data/contacts';

const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }

  td {
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid #f3f4f6;
    font-size: 0.9rem;
  }
`;

const ContactName = styled.td`
  font-weight: 600;
  color: #111827;
`;

const ContactEmail = styled.td`
  color: #6b7280;
`;

const ContactPhone = styled.td`
  color: #374151;
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch (props.$status) {
      case 'lead': return '#fef3c7';
      case 'prospect': return '#dbeafe';
      case 'customer': return '#d1fae5';
      case 'churned': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'lead': return '#92400e';
      case 'prospect': return '#1e40af';
      case 'customer': return '#065f46';
      case 'churned': return '#991b1b';
      default: return '#374151';
    }
  }};
`;

interface ContactsTableProps {
  contacts: Contact[];
}

function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <TableCard>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <ContactName>{c.name}</ContactName>
              <ContactEmail>{c.email}</ContactEmail>
              <td>{c.company}</td>
              <td>
                <StatusBadge $status={c.status.toLowerCase()}>
                  {c.status}
                </StatusBadge>
              </td>
              <ContactPhone>{c.phone}</ContactPhone>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableCard>
  );
}

export default ContactsTable;
