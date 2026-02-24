'use client';

import { useState } from 'react';
import styles from './page.module.css';

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

const roleStyles: Record<string, string> = {
  Admin: styles.roleAdmin,
  Editor: styles.roleEditor,
  Viewer: styles.roleViewer,
};

const statusStyleMap: Record<string, string> = {
  Active: styles.statusActive,
  Inactive: styles.statusInactive,
};

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1>Users</h1>
        <p>Manage your team members and their permissions.</p>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableControls}>
          <div className={styles.searchInput}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.filterGroup}>
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <button
                key={role}
                className={roleFilter === role ? styles.filterBtnActive : styles.filterBtn}
                onClick={() => setRoleFilter(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.userCell}>
                      <span className={styles.userCellAvatar}>{user.avatar}</span>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td><span className={roleStyles[user.role]}>{user.role}</span></td>
                  <td><span className={statusStyleMap[user.status]}>{user.status}</span></td>
                  <td className={styles.date}>{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
