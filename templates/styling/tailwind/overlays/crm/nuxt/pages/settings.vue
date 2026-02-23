<script setup lang="ts">
const form = reactive({
  companyName: '{{projectName}}',
  email: 'admin@example.com',
  currency: 'USD',
  dealRotting: '30',
  notifications: true,
  autoAssign: false,
});

function handleSave() {
  alert('Settings saved successfully!');
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
      <p class="text-gray-500">Configure your CRM preferences.</p>
    </div>

    <form class="max-w-2xl" @submit.prevent="handleSave">
      <div class="bg-white rounded-lg p-6 shadow-sm mb-5">
        <h2 class="text-lg font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">General</h2>

        <div class="mb-5">
          <label for="companyName" class="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
          <input id="companyName" v-model="form.companyName" type="text" class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" />
        </div>

        <div class="mb-5">
          <label for="email" class="block text-sm font-semibold text-gray-700 mb-1.5">Admin Email</label>
          <input id="email" v-model="form.email" type="email" class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="mb-5">
            <label for="currency" class="block text-sm font-semibold text-gray-700 mb-1.5">Currency</label>
            <select id="currency" v-model="form.currency" class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&euro;)</option>
              <option value="GBP">GBP (&pound;)</option>
            </select>
          </div>

          <div class="mb-5">
            <label for="dealRotting" class="block text-sm font-semibold text-gray-700 mb-1.5">Deal Rotting (days)</label>
            <input id="dealRotting" v-model="form.dealRotting" type="number" class="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-sm mb-5">
        <h2 class="text-lg font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">Automation</h2>

        <div class="flex justify-between items-center py-3 border-b border-gray-50">
          <div>
            <span class="block font-semibold text-gray-900 text-sm">Email Notifications</span>
            <span class="text-xs text-gray-500">Get notified about deal updates and new contacts.</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="form.notifications" type="checkbox" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div class="flex justify-between items-center py-3">
          <div>
            <span class="block font-semibold text-gray-900 text-sm">Auto-Assign Leads</span>
            <span class="text-xs text-gray-500">Automatically assign new leads to sales reps.</span>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="form.autoAssign" type="checkbox" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>

      <button type="submit" class="bg-indigo-600 text-white border-none px-8 py-3 rounded-lg text-base font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">Save Changes</button>
    </form>
  </div>
</template>
