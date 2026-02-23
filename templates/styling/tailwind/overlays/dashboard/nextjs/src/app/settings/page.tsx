'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [siteName, setSiteName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your application preferences and configuration.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">⚙️ General</h3>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Site Name</label>
            <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Admin Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Timezone</label>
            <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10">
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
              <option value="CET">Central European</option>
            </select>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">🔔 Notifications</h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive email updates about activity</p>
              </div>
              <button
                className={`w-12 h-6 rounded-full border-none cursor-pointer relative transition-colors ${notifications ? 'bg-indigo-600' : 'bg-gray-300'}`}
                onClick={() => setNotifications(!notifications)}
              >
                <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform shadow-sm ${notifications ? 'translate-x-[22px]' : ''}`} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900 text-sm">Dark Mode</p>
                <p className="text-xs text-gray-500">Use dark theme for the dashboard</p>
              </div>
              <button
                className={`w-12 h-6 rounded-full border-none cursor-pointer relative transition-colors ${darkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform shadow-sm ${darkMode ? 'translate-x-[22px]' : ''}`} />
              </button>
            </div>
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
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input type="password" placeholder="Confirm new password" className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
          </div>
          <button className="inline-block px-6 py-2.5 rounded-lg font-semibold cursor-pointer border-none bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-sm">Update Password</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-5">🎨 Appearance</h3>
          <div className="flex gap-4">
            <div className="text-center cursor-pointer">
              <div className="w-20 h-14 rounded-lg border-2 border-indigo-600 mb-1 bg-white shadow-[0_0_0_3px_rgba(79,70,229,0.2)]" />
              <span className="text-xs font-medium text-gray-700">Light</span>
            </div>
            <div className="text-center cursor-pointer">
              <div className="w-20 h-14 rounded-lg border-2 border-gray-200 mb-1 bg-gray-800" />
              <span className="text-xs font-medium text-gray-700">Dark</span>
            </div>
            <div className="text-center cursor-pointer">
              <div className="w-20 h-14 rounded-lg border-2 border-gray-200 mb-1 bg-gradient-to-br from-white from-50% to-gray-800 to-50%" />
              <span className="text-xs font-medium text-gray-700">System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
