<script setup lang="ts">
interface Deal {
  id: number;
  title: string;
  company: string;
  value: string;
  contact: string;
}

interface Column {
  id: string;
  title: string;
  color: string;
  deals: Deal[];
}

const columns: Column[] = [
  {
    id: 'lead',
    title: 'Lead',
    color: '#6b7280',
    deals: [
      { id: 1, title: 'Website Redesign', company: 'Acme Inc', value: '$12,000', contact: 'John Doe' },
      { id: 2, title: 'Mobile App', company: 'StartupXYZ', value: '$25,000', contact: 'Mike Johnson' },
    ],
  },
  {
    id: 'qualified',
    title: 'Qualified',
    color: '#3b82f6',
    deals: [
      { id: 3, title: 'Cloud Migration', company: 'BigCo', value: '$45,000', contact: 'Emily Davis' },
      { id: 4, title: 'SEO Campaign', company: 'Tech Labs', value: '$8,500', contact: 'Jane Smith' },
    ],
  },
  {
    id: 'proposal',
    title: 'Proposal',
    color: '#f59e0b',
    deals: [
      { id: 5, title: 'ERP Integration', company: 'Skynet Corp', value: '$68,000', contact: 'Sarah Connor' },
    ],
  },
  {
    id: 'closed',
    title: 'Closed Won',
    color: '#10b981',
    deals: [
      { id: 6, title: 'Brand Identity', company: 'DevStudio', value: '$15,000', contact: 'Chris Wilson' },
      { id: 7, title: 'Data Analytics', company: 'Acme Inc', value: '$32,000', contact: 'John Doe' },
    ],
  },
];
</script>

<template>
  <div>
    <div class="flex justify-between items-start mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Deals Pipeline</h1>
        <p class="text-gray-500">Track and manage your sales pipeline.</p>
      </div>
      <button class="bg-indigo-600 text-white border-none px-5 py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">+ New Deal</button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
      <div v-for="col in columns" :key="col.id" class="bg-gray-50 rounded-lg p-4 min-w-[240px]">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-200">
          <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: col.color }"></span>
          <h3 class="text-sm font-semibold text-gray-900 flex-1">{{ col.title }}</h3>
          <span class="bg-gray-200 text-gray-600 text-xs font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center">{{ col.deals.length }}</span>
        </div>

        <div class="flex flex-col gap-3">
          <div v-for="deal in col.deals" :key="deal.id" class="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <h4 class="text-sm font-semibold text-gray-900 mb-1">{{ deal.title }}</h4>
            <p class="text-xs text-gray-500 mb-3">{{ deal.company }}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm font-bold text-indigo-600">{{ deal.value }}</span>
              <span class="text-xs text-gray-400">{{ deal.contact }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
