<script setup lang="ts">
interface Deal { id: number; title: string; company: string; value: string; contact: string; }
interface Column { id: string; title: string; color: string; deals: Deal[]; }

const columns: Column[] = [
  { id: 'lead', title: 'Lead', color: '#6b7280', deals: [
    { id: 1, title: 'Website Redesign', company: 'Acme Inc', value: '$12,000', contact: 'John Doe' },
    { id: 2, title: 'Mobile App', company: 'StartupXYZ', value: '$25,000', contact: 'Mike Johnson' },
  ]},
  { id: 'qualified', title: 'Qualified', color: '#3b82f6', deals: [
    { id: 3, title: 'Cloud Migration', company: 'BigCo', value: '$45,000', contact: 'Emily Davis' },
    { id: 4, title: 'SEO Campaign', company: 'Tech Labs', value: '$8,500', contact: 'Jane Smith' },
  ]},
  { id: 'proposal', title: 'Proposal', color: '#f59e0b', deals: [
    { id: 5, title: 'ERP Integration', company: 'Skynet Corp', value: '$68,000', contact: 'Sarah Connor' },
  ]},
  { id: 'closed', title: 'Closed Won', color: '#10b981', deals: [
    { id: 6, title: 'Brand Identity', company: 'DevStudio', value: '$15,000', contact: 'Chris Wilson' },
    { id: 7, title: 'Data Analytics', company: 'Acme Inc', value: '$32,000', contact: 'John Doe' },
  ]},
];
</script>

<template>
  <div>
    <div :class="$style.pageHeader">
      <div>
        <h1>Deals Pipeline</h1>
        <p :class="$style.subtitle">Track and manage your sales pipeline.</p>
      </div>
      <button :class="$style.addBtn">+ New Deal</button>
    </div>

    <div :class="$style.kanbanBoard">
      <div v-for="col in columns" :key="col.id" :class="$style.kanbanColumn">
        <div :class="$style.columnHeader">
          <span :class="$style.columnDot" :style="{ backgroundColor: col.color }"></span>
          <h3 :class="$style.columnTitle">{{ col.title }}</h3>
          <span :class="$style.columnCount">{{ col.deals.length }}</span>
        </div>
        <div :class="$style.columnCards">
          <div v-for="deal in col.deals" :key="deal.id" :class="$style.dealCard">
            <h4 :class="$style.dealTitle">{{ deal.title }}</h4>
            <p :class="$style.dealCompany">{{ deal.company }}</p>
            <div :class="$style.dealFooter">
              <span :class="$style.dealValue">{{ deal.value }}</span>
              <span :class="$style.dealContact">{{ deal.contact }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.pageHeader { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
.pageHeader h1 { font-size: 1.75rem; color: #111827; margin-bottom: 0.25rem; }
.subtitle { color: #6b7280; }
.addBtn { background: #4f46e5; color: white; border: none; padding: 0.65rem 1.25rem; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.addBtn:hover { background: #4338ca; }
.kanbanBoard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; overflow-x: auto; }
.kanbanColumn { background: #f9fafb; border-radius: 10px; padding: 1rem; min-width: 240px; }
.columnHeader { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 2px solid #e5e7eb; }
.columnDot { width: 10px; height: 10px; border-radius: 50%; }
.columnTitle { font-size: 0.95rem; color: #111827; flex: 1; }
.columnCount { background: #e5e7eb; color: #374151; font-size: 0.75rem; font-weight: 700; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.columnCards { display: flex; flex-direction: column; gap: 0.75rem; }
.dealCard { background: white; border-radius: 8px; padding: 1rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); cursor: pointer; transition: box-shadow 0.2s; }
.dealCard:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); }
.dealTitle { font-size: 0.95rem; color: #111827; margin-bottom: 0.25rem; }
.dealCompany { font-size: 0.8rem; color: #6b7280; margin-bottom: 0.75rem; }
.dealFooter { display: flex; justify-content: space-between; align-items: center; }
.dealValue { font-size: 0.85rem; font-weight: 700; color: #4f46e5; }
.dealContact { font-size: 0.75rem; color: #9ca3af; }

@media (max-width: 1024px) { .kanbanBoard { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .kanbanBoard { grid-template-columns: 1fr; } }
</style>
