import { withLayout } from '../main';

export function renderSettings(): string {
  return withLayout('Settings', `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Company Profile</h3>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Company Name</label>
          <input type="text" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" value="{{projectName}}" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Industry</label>
          <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
            <option selected>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Manufacturing</option>
            <option>Retail</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Company Size</label>
          <select class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
            <option>1-10 employees</option>
            <option selected>11-50 employees</option>
            <option>51-200 employees</option>
            <option>201-1000 employees</option>
            <option>1000+ employees</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Website</label>
          <input type="url" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="https://yourcompany.com" />
        </div>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">Save Profile</button>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Sales Pipeline Settings</h3>
        <div class="flex flex-col">
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Auto-assign Leads</p>
              <p class="text-xs text-gray-500">Automatically assign new leads to sales reps</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" checked class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Deal Reminders</p>
              <p class="text-xs text-gray-500">Send reminders for deals approaching close date</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" checked class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
              <p class="font-semibold text-sm text-gray-900">Activity Tracking</p>
              <p class="text-xs text-gray-500">Track email opens and link clicks</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" checked class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
          <div class="flex justify-between items-center py-4">
            <div>
              <p class="font-semibold text-sm text-gray-900">Weekly Reports</p>
              <p class="text-xs text-gray-500">Receive weekly sales performance reports</p>
            </div>
            <label class="relative inline-block w-11 h-6">
              <input type="checkbox" class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer inset-0 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600 before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-5"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Email Integration</h3>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">SMTP Server</label>
          <input type="text" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="smtp.example.com" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Port</label>
          <input type="number" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" value="587" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Email Address</label>
          <input type="email" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="sales@company.com" />
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-900 mb-1">Password</label>
          <input type="password" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" placeholder="Enter password" />
        </div>
        <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">Connect Email</button>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-5">Data Management</h3>
        <div class="border border-gray-200 rounded-lg p-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold text-sm text-gray-900">Export Data</p>
              <p class="text-xs text-gray-500">Download all contacts and deals as CSV</p>
            </div>
            <button class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm border-none cursor-pointer hover:bg-indigo-700 transition-colors">Export</button>
          </div>
        </div>
        <div class="border border-red-200 rounded-lg p-4 bg-red-50 mt-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-semibold text-sm text-gray-900">Delete All Data</p>
              <p class="text-xs text-gray-500">Permanently remove all contacts and deals</p>
            </div>
            <button class="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-xs border-none cursor-pointer hover:bg-red-600 transition-colors">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  `);
}
