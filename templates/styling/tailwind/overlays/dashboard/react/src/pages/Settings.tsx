import { useState } from 'react';

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">Profile</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-md px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
          />
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">Preferences</h3>
        <div className="mb-3">
          <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-700">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-4.5 h-4.5 accent-indigo-600 cursor-pointer"
            />
            <span>Dark Mode</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-700">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-4.5 h-4.5 accent-indigo-600 cursor-pointer"
            />
            <span>Email Notifications</span>
          </label>
        </div>
      </div>
      <button className="bg-indigo-600 text-white px-4 lg:px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors">
        Save Changes
      </button>
    </div>
  );
}
