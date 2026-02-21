<script setup lang="ts">
const recentActivity = [
  { id: 1, action: 'New contact added', name: 'Sarah Connor', time: '2 hours ago', icon: '👤' },
  { id: 2, action: 'Deal closed', name: 'Acme Inc', time: '4 hours ago', icon: '🎉' },
  { id: 3, action: 'Follow-up scheduled', name: 'Tech Labs', time: '6 hours ago', icon: '📅' },
  { id: 4, action: 'Email sent', name: 'Mike Johnson', time: '8 hours ago', icon: '✉️' },
];
</script>

<template>
  <div class="crm-dashboard">
    <div class="page-header">
      <h1>CRM Dashboard</h1>
      <p class="subtitle">Welcome back! Here's your sales overview.</p>
    </div>

    <StatsCards />

    <div class="dashboard-grid">
      <div class="activity-card">
        <h2 class="card-title">Recent Activity</h2>
        <div class="activity-list">
          <div v-for="item in recentActivity" :key="item.id" class="activity-item">
            <span class="activity-icon">{{ item.icon }}</span>
            <div class="activity-info">
              <p class="activity-action">{{ item.action }}</p>
              <p class="activity-meta">{{ item.name }} &middot; {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pipeline-card">
        <h2 class="card-title">Pipeline Summary</h2>
        <div class="pipeline-stages">
          <div class="pipeline-stage">
            <div class="stage-header">
              <span>Lead</span>
              <span class="stage-count">12</span>
            </div>
            <div class="stage-bar">
              <div class="stage-fill" style="width: 40%"></div>
            </div>
          </div>
          <div class="pipeline-stage">
            <div class="stage-header">
              <span>Qualified</span>
              <span class="stage-count">8</span>
            </div>
            <div class="stage-bar">
              <div class="stage-fill" style="width: 27%"></div>
            </div>
          </div>
          <div class="pipeline-stage">
            <div class="stage-header">
              <span>Proposal</span>
              <span class="stage-count">5</span>
            </div>
            <div class="stage-bar">
              <div class="stage-fill" style="width: 17%"></div>
            </div>
          </div>
          <div class="pipeline-stage">
            <div class="stage-header">
              <span>Closed Won</span>
              <span class="stage-count">17</span>
            </div>
            <div class="stage-bar">
              <div class="stage-fill won" style="width: 57%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-header {
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

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.activity-card,
.pipeline-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.card-title {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.activity-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.activity-action {
  font-weight: 600;
  color: #111827;
  font-size: 0.9rem;
}

.activity-meta {
  font-size: 0.8rem;
  color: #6b7280;
}

.pipeline-stages {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stage-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.35rem;
}

.stage-count {
  font-weight: 700;
  color: #111827;
}

.stage-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.stage-fill {
  height: 100%;
  background: #4f46e5;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.stage-fill.won {
  background: #10b981;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
