'use client';

import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'Lead' | 'Prospect' | 'Customer' | 'Inactive';
  value: string;
  avatar: string;
  lastContact: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@techcorp.com', company: 'TechCorp Inc.', phone: '+1 (555) 123-4567', status: 'Customer', value: '$45,000', avatar: '👩', lastContact: '2025-01-15' },
  { id: 2, name: 'James Wilson', email: 'james@innovate.io', company: 'Innovate.io', phone: '+1 (555) 234-5678', status: 'Prospect', value: '$28,000', avatar: '👨', lastContact: '2025-01-14' },
  { id: 3, name: 'Maria Garcia', email: 'maria@designlab.co', company: 'DesignLab Co.', phone: '+1 (555) 345-6789', status: 'Lead', value: '$15,000', avatar: '👩', lastContact: '2025-01-13' },
  { id: 4, name: 'Robert Kim', email: 'robert@globalnet.com', company: 'GlobalNet Ltd.', phone: '+1 (555) 456-7890', status: 'Customer', value: '$62,000', avatar: '👨', lastContact: '2025-01-12' },
  { id: 5, name: 'Emily Brown', email: 'emily@startupxyz.com', company: 'StartupXYZ', phone: '+1 (555) 567-8901', status: 'Prospect', value: '$18,500', avatar: '👩', lastContact: '2025-01-11' },
  { id: 6, name: 'Michael Davis', email: 'michael@enterprise.com', company: 'Enterprise Solutions', phone: '+1 (555) 678-9012', status: 'Inactive', value: '$8,200', avatar: '👨', lastContact: '2024-12-20' },
];

const statusStyles: Record<string, string> = {
  customer: 'bg-green-100 text-green-700',
  prospect: 'bg-blue-100 text-blue-700',
  lead: 'bg-yellow-100 text-yellow-700',
  inactive: 'bg-gray-100 text-gray-500',
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = contacts.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
        <p className="text-gray-500 mt-1">Manage your contacts and customer relationships.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex flex-wrap items-center justify-between px-6 py-5 gap-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-xs">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-none outline-none bg-transparent text-sm w-full"
            />
          </div>
          <div className="flex gap-1 flex-wrap">
            {['All', 'Lead', 'Prospect', 'Customer', 'Inactive'].map((status) => (
              <button
                key={status}
                className={`px-3.5 py-1.5 border rounded-md text-xs font-medium transition-all cursor-pointer ${statusFilter === status ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}`}
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Company</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Email</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Phone</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Value</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200 bg-gray-100">Last Contact</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{contact.avatar}</span>
                      <span className="font-semibold text-gray-900">{contact.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">{contact.company}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200 text-indigo-600">{contact.email}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200">{contact.phone}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[contact.status.toLowerCase()]}`}>{contact.status}</span></td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200 font-bold text-gray-900">{contact.value}</td>
                  <td className="px-6 py-3.5 text-sm border-b border-gray-200 text-gray-500">{contact.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No contacts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
