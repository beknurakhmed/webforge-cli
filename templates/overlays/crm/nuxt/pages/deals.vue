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
  <div class="deals-page">
    <div class="page-header">
      <div>
        <h1>Deals Pipeline</h1>
        <p class="subtitle">Track and manage your sales pipeline.</p>
      </div>
      <button class="add-btn">+ New Deal</button>
    </div>

    <div class="kanban-board">
      <div v-for="col in columns" :key="col.id" class="kanban-column">
        <div class="column-header">
          <span class="column-dot" :style="{ backgroundColor: col.color }"></span>
          <h3 class="column-title">{{ col.title }}</h3>
          <span class="column-count">{{ col.deals.length }}</span>
        </div>

        <div class="column-cards">
          <div v-for="deal in col.deals" :key="deal.id" class="deal-card">
            <h4 class="deal-title">{{ deal.title }}</h4>
            <p class="deal-company">{{ deal.company }}</p>
            <div class="deal-footer">
              <span class="deal-value">{{ deal.value }}</span>
              <span class="deal-contact">{{ deal.contact }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #6b7280;
}

.add-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #4338ca;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-x: auto;
}

.kanban-column {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1rem;
  min-width: 240px;
}

.column-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
}

.column-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.column-title {
  font-size: 0.95rem;
  color: #111827;
  flex: 1;
}

.column-count {
  background: #e5e7eb;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 700;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.deal-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.deal-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.deal-title {
  font-size: 0.95rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.deal-company {
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.deal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.deal-value {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4f46e5;
}

.deal-contact {
  font-size: 0.75rem;
  color: #9ca3af;
}

@media (max-width: 1024px) {
  .kanban-board {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .kanban-board {
    grid-template-columns: 1fr;
  }
}
</style>
