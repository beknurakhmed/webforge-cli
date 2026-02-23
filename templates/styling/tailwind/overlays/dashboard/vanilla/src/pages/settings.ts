import { withLayout } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">General Settings</h3>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Application Name</label>
          <input type="text" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" value="{{projectName}}" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Timezone</label>
          <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
            <option>UTC-8 (Pacific Time)</option>
            <option>UTC-5 (Eastern Time)</option>
            <option selected>UTC+0 (GMT)</option>
            <option>UTC+1 (Central European)</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Language</label>
          <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
            <option selected>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Date Format</label>
          <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
            <option selected>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">Save Changes</button>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Notifications</h3>
        <div class="flex flex-col">
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Email Notifications</p>
              <p class="text-xs text-gray-500">Receive email alerts for important updates</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" checked class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Push Notifications</p>
              <p class="text-xs text-gray-500">Get browser push notifications</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" checked class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Weekly Reports</p>
              <p class="text-xs text-gray-500">Receive weekly summary reports via email</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4">
            <div>
              <p class="font-semibold text-sm text-gray-900">Marketing Emails</p>
              <p class="text-xs text-gray-500">Receive updates about new features and offers</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Security</h3>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Current Password</label>
          <input type="password" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="Enter current password" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">New Password</label>
          <input type="password" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="Enter new password" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Confirm New Password</label>
          <input type="password" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="Confirm new password" />
        </div>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">Update Password</button>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Danger Zone</h3>
        <div class="border border-red-200 rounded-lg p-4 bg-red-50">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold text-sm text-gray-900">Delete Account</p>
              <p class="text-xs text-gray-500">Permanently delete your account and all data</p>
            </div>
            <button class="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-xs border-none cursor-pointer hover:bg-red-600 transition-colors">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
