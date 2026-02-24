import styled from 'styled-components';

const PageHeader = styled.div`
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
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background: #4338ca;
  }
`;

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
    padding: 0.75rem 1.5rem;
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }

  td {
    padding: 0.75rem 1.5rem;
    border-top: 1px solid #f3f4f6;
    font-size: 0.9rem;
    color: #374151;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th, td {
      padding: 0.5rem 0.75rem;
    }
  }
`;

const UserCell = styled.td`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const TableAvatar = styled.span`
  font-size: 1.5rem;
`;

const RoleBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #ede9fe;
  color: #4f46e5;
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$status === 'active' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.$status === 'active' ? '#065f46' : '#991b1b'};
`;

interface User {
  avatar: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const users: User[] = [
  { avatar: '👩', name: 'Sarah Chen', email: 'sarah@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'James Miller', email: 'james@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Emily Davis', email: 'emily@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👨', name: 'Robert Wilson', email: 'robert@email.com', role: 'Editor', status: 'Active' },
  { avatar: '👩', name: 'Maria Garcia', email: 'maria@email.com', role: 'Admin', status: 'Active' },
  { avatar: '👨', name: 'David Lee', email: 'david@email.com', role: 'Viewer', status: 'Inactive' },
  { avatar: '👩', name: 'Anna Taylor', email: 'anna@email.com', role: 'Editor', status: 'Active' },
];

export function Users() {
  return (
    <div>
      <PageHeader>
        <h1>Users</h1>
        <PrimaryButton>Add User</PrimaryButton>
      </PageHeader>
      <TableCard>
        <StyledTable>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <UserCell>
                  <TableAvatar>{user.avatar}</TableAvatar>
                  {user.name}
                </UserCell>
                <td>{user.email}</td>
                <td><RoleBadge>{user.role}</RoleBadge></td>
                <td>
                  <StatusBadge $status={user.status.toLowerCase()}>
                    {user.status}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableCard>
    </div>
  );
}
