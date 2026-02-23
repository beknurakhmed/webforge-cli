<script setup lang="ts">
import { ref } from 'vue';

const siteName = ref('{{projectName}}');
const email = ref('admin@example.com');
const timezone = ref('UTC');
const notifications = ref(true);
const darkMode = ref(false);
const twoFactor = ref(true);
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="text-gray-500 mt-1">Manage your application preferences.</p>
    </div>
    <div class="bg-white border border-gray-200 rounded-xl p-8 max-w-xl">
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Site Name</label>
        <input v-model="siteName" type="text" class="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Admin Email</label>
        <input v-model="email" type="email" class="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10" />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
        <select v-model="timezone" class="w-full py-2.5 px-4 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10">
          <option value="UTC">UTC</option>
          <option value="EST">Eastern (EST)</option>
          <option value="CST">Central (CST)</option>
          <option value="PST">Pacific (PST)</option>
        </select>
      </div>
      <div class="mb-6">
        <div class="flex items-center justify-between py-3 border-b border-gray-100">
          <div>
            <p class="font-medium text-gray-700">Email Notifications</p>
            <p class="text-sm text-gray-500">Receive email alerts for important events</p>
          </div>
          <input v-model="notifications" type="checkbox" class="w-5 h-5 accent-indigo-600" />
        </div>
        <div class="flex items-center justify-between py-3 border-b border-gray-100">
          <div>
            <p class="font-medium text-gray-700">Dark Mode</p>
            <p class="text-sm text-gray-500">Use dark theme across the dashboard</p>
          </div>
          <input v-model="darkMode" type="checkbox" class="w-5 h-5 accent-indigo-600" />
        </div>
        <div class="flex items-center justify-between py-3 border-b border-gray-100">
          <div>
            <p class="font-medium text-gray-700">Two-Factor Auth</p>
            <p class="text-sm text-gray-500">Add an extra layer of security</p>
          </div>
          <input v-model="twoFactor" type="checkbox" class="w-5 h-5 accent-indigo-600" />
        </div>
      </div>
      <div class="flex gap-4 mt-8">
        <button class="bg-indigo-600 text-white border-none py-2.5 px-6 rounded-lg font-semibold transition-colors hover:bg-indigo-700 cursor-pointer">Save Changes</button>
        <button class="bg-white text-gray-700 border border-gray-300 py-2.5 px-6 rounded-lg font-medium transition-colors hover:bg-gray-50 cursor-pointer">Cancel</button>
      </div>
    </div>
  </div>
</template>
