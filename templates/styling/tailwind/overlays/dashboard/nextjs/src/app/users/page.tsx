'use client';

import { useState } from 'react';

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

const statusStyles: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-red-100 text-red-600',
};

const roleStyles: Record<string, string> = {
  admin: 'bg-purple-100 text-purple-700',
  editor: 'bg-blue-100 text-blue-700',
  viewer: 'bg-gray-100 text-gray-500',
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
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <p className="text-gray-500 mt-1">Manage your team members and their permissions.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between px-6 py-5 gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-xs">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-none outline-none bg-transparent text-sm w-full"
            />
          </div>
          <div className="flex gap-1">
            {['All', 'Admin', 'Editor', 'Viewer'].map((role) => (
              <button
                key={role}
                className={`px-3.5 py-1.5 border rounded-md text-xs font-medium transition-all cursor-pointer ${roleFilter === role ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}`}
                onClick={() => setRoleFilter(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">User</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Email</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Role</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Joined</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{user.avatar}</span>
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">{user.email}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${roleStyles[user.role.toLowerCase()]}`}>{user.role}</span></td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[user.status.toLowerCase()]}`}>{user.status}</span></td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200 text-gray-500">{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
