import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
    <div class="bg-white rounded-xl p-6 border border-gray-200 max-w-xl">
      <h2 class="text-lg font-semibold text-gray-900 mb-3">Profile</h2>
      <div class="mb-4">
        <label class="block text-sm text-gray-700 font-medium mb-1">Display Name</label>
        <input type="text" value="Admin User" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
      </div>
      <div class="mb-4">
        <label class="block text-sm text-gray-700 font-medium mb-1">Email</label>
        <input type="email" value="admin@example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15" />
      </div>
      <h2 class="text-lg font-semibold text-gray-900 mt-5 mb-3 pt-3 border-t border-gray-100">Preferences</h2>
      <div class="flex items-center justify-between mb-4">
        <label class="text-sm text-gray-700 font-medium">Email Notifications</label>
        <input type="checkbox" checked class="w-5 h-5 accent-indigo-600" />
      </div>
      <div class="flex items-center justify-between mb-4">
        <label class="text-sm text-gray-700 font-medium">Dark Mode</label>
        <input type="checkbox" class="w-5 h-5 accent-indigo-600" />
      </div>
      <div class="mb-4">
        <label class="block text-sm text-gray-700 font-medium mb-1">Language</label>
        <select class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/15">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
      <button class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg border-none cursor-pointer transition-colors">Save Changes</button>
    </div>
  `,
  styles: []
})
export class SettingsComponent {}
