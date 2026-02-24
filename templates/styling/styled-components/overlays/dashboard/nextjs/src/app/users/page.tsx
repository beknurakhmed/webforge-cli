'use client';

import { useState } from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`
  margin-bottom: 2rem;
  h1 { font-size: 1.75rem; color: #111827; font-weight: 700; }
  p { color: #6b7280; margin-top: 0.25rem; }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const TableControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  flex: 1;
  max-width: 300px;

  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 0.35rem;
`;

const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0.4rem 0.85rem;
  border: 1px solid ${props => props.$active ? '#4f46e5' : '#e5e7eb'};
  border-radius: 6px;
  background: ${props => props.$active ? '#4f46e5' : 'white'};
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.$active ? 'white' : '#374151'};
  transition: all 0.2s;

  &:hover {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th { text-align: left; padding: 0.75rem 1.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e5e7eb; background: #f3f4f6; }
  td { padding: 0.875rem 1.5rem; font-size: 0.9rem; border-bottom: 1px solid #e5e7eb; }
  tbody tr:hover { background: #f9fafb; }
`;

const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserCellAvatar = styled.span`
  font-size: 1.25rem;
`;

const RoleBadge = styled.span<{ $role: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch (props.$role) {
      case 'admin': return '#ede9fe';
      case 'editor': return '#dbeafe';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.$role) {
      case 'admin': return '#7c3aed';
      case 'editor': return '#2563eb';
      default: return '#6b7280';
    }
  }};
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.$status === 'active' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.$status === 'active' ? '#059669' : '#dc2626'};
`;

const DateCell = styled.td`
  color: #6b7280;
`;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joined: string;
  avatar: string;
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2024-06-15', avatar: '👩' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', joined: '2024-07-22', avatar: '👨' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Active', joined: '2024-08-10', avatar: '👩' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Inactive', joined: '2024-09-05', avatar: '👨' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active', joined: '2024-10-18', avatar: '👩' },
  { id: 6, name: 'Frank Brown', email: 'frank@example.com', role: 'Viewer', status: 'Active', joined: '2024-11-02', avatar: '👨' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Inactive', joined: '2024-11-20', avatar: '👩' },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', role: 'Viewer', status: 'Active', joined: '2025-01-08', avatar: '👨' },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      <PageHeader>
        <h1>Users</h1>
        <p>Manage your team members and their permissions.</p>
      </PageHeader>

      <TableCard>
        <TableControls>
          <SearchInput>
            <span>🔍</span>
            <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </SearchInput>
          <FilterGroup>
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <FilterBtn key={role} $active={roleFilter === role} onClick={() => setRoleFilter(role)}>{role}</FilterBtn>
            ))}
          </FilterGroup>
        </TableControls>
        <div style={{ overflowX: 'auto' }}>
          <StyledTable>
            <thead>
              <tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th></tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id}>
                  <td><UserCell><UserCellAvatar>{user.avatar}</UserCellAvatar><span>{user.name}</span></UserCell></td>
                  <td>{user.email}</td>
                  <td><RoleBadge $role={user.role.toLowerCase()}>{user.role}</RoleBadge></td>
                  <td><StatusBadge $status={user.status.toLowerCase()}>{user.status}</StatusBadge></td>
                  <DateCell>{user.joined}</DateCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      </TableCard>
    </div>
  );
}
