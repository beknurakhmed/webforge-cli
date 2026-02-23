<script setup lang="ts">
const recentActivity = [
  { id: 1, action: 'New contact added', name: 'Sarah Connor', time: '2 hours ago', icon: '👤' },
  { id: 2, action: 'Deal closed', name: 'Acme Inc', time: '4 hours ago', icon: '🎉' },
  { id: 3, action: 'Follow-up scheduled', name: 'Tech Labs', time: '6 hours ago', icon: '📅' },
  { id: 4, action: 'Email sent', name: 'Mike Johnson', time: '8 hours ago', icon: '✉️' },
];
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">CRM Dashboard</h1>
      <p class="text-gray-500">Welcome back! Here's your sales overview.</p>
    </div>

    <StatsCards />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">Recent Activity</h2>
        <div class="flex flex-col gap-4">
          <div v-for="item in recentActivity" :key="item.id" class="flex items-center gap-3.5">
            <span class="text-2xl shrink-0">{{ item.icon }}</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">{{ item.action }}</p>
              <p class="text-xs text-gray-500">{{ item.name }} &middot; {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">Pipeline Summary</h2>
        <div class="flex flex-col gap-5">
          <div>
            <div class="flex justify-between text-sm font-medium text-gray-700 mb-1.5">
              <span>Lead</span>
              <span class="font-bold text-gray-900">12</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div class="h-full bg-indigo-600 rounded" style="width: 40%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm font-medium text-gray-700 mb-1.5">
              <span>Qualified</span>
              <span class="font-bold text-gray-900">8</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div class="h-full bg-indigo-600 rounded" style="width: 27%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm font-medium text-gray-700 mb-1.5">
              <span>Proposal</span>
              <span class="font-bold text-gray-900">5</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div class="h-full bg-indigo-600 rounded" style="width: 17%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-sm font-medium text-gray-700 mb-1.5">
              <span>Closed Won</span>
              <span class="font-bold text-gray-900">17</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div class="h-full bg-emerald-500 rounded" style="width: 57%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
