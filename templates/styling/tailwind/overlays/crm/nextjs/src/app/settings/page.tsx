'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your CRM preferences and configuration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">⚙️ General Settings</h3>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Currency</label>
            <select defaultValue="USD" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&#8364;)</option>
              <option value="GBP">GBP (&#163;)</option>
            </select>
          </div>
          <button className="inline-block px-6 py-2.5 rounded-lg font-semibold cursor-pointer border-none bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm">Save Changes</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">🔔 Notifications</h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive email alerts for new leads</p>
              </div>
              <button className={`w-12 h-6 rounded-full border-none cursor-pointer relative transition-colors ${notifications ? 'bg-indigo-600' : 'bg-gray-300'}`} onClick={() => setNotifications(!notifications)}>
                <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform shadow-sm ${notifications ? 'translate-x-[22px]' : ''}`} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Deal Alerts</p>
                <p className="text-xs text-gray-500">Get notified when deal stages change</p>
              </div>
              <button className={`w-12 h-6 rounded-full border-none cursor-pointer relative transition-colors ${dealAlerts ? 'bg-indigo-600' : 'bg-gray-300'}`} onClick={() => setDealAlerts(!dealAlerts)}>
                <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform shadow-sm ${dealAlerts ? 'translate-x-[22px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">📊 Pipeline Stages</h3>
          <div className="flex flex-col gap-2">
            {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
              <div key={stage} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <span className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">🔒 Security</h3>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
            <input type="password" placeholder="Enter current password" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <input type="password" placeholder="Enter new password" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <button className="inline-block px-6 py-2.5 rounded-lg font-semibold cursor-pointer border-none bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm">Update Password</button>
        </div>
      </div>
    </div>
  );
}
