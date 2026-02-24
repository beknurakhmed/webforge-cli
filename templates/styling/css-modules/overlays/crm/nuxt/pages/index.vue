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
    <div :class="$style.pageHeader">
      <h1>CRM Dashboard</h1>
      <p :class="$style.subtitle">Welcome back! Here's your sales overview.</p>
    </div>

    <StatsCards />

    <div :class="$style.dashboardGrid">
      <div :class="$style.card">
        <h2 :class="$style.cardTitle">Recent Activity</h2>
        <div :class="$style.activityList">
          <div v-for="item in recentActivity" :key="item.id" :class="$style.activityItem">
            <span :class="$style.activityIcon">{{ item.icon }}</span>
            <div>
              <p :class="$style.activityAction">{{ item.action }}</p>
              <p :class="$style.activityMeta">{{ item.name }} &middot; {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <div :class="$style.card">
        <h2 :class="$style.cardTitle">Pipeline Summary</h2>
        <div :class="$style.pipelineStages">
          <div :class="$style.pipelineStage">
            <div :class="$style.stageHeader"><span>Lead</span><span :class="$style.stageCount">12</span></div>
            <div :class="$style.stageBar"><div :class="$style.stageFill" style="width: 40%"></div></div>
          </div>
          <div :class="$style.pipelineStage">
            <div :class="$style.stageHeader"><span>Qualified</span><span :class="$style.stageCount">8</span></div>
            <div :class="$style.stageBar"><div :class="$style.stageFill" style="width: 27%"></div></div>
          </div>
          <div :class="$style.pipelineStage">
            <div :class="$style.stageHeader"><span>Proposal</span><span :class="$style.stageCount">5</span></div>
            <div :class="$style.stageBar"><div :class="$style.stageFill" style="width: 17%"></div></div>
          </div>
          <div :class="$style.pipelineStage">
            <div :class="$style.stageHeader"><span>Closed Won</span><span :class="$style.stageCount">17</span></div>
            <div :class="$style.stageBar"><div :class="$style.stageFillWon" style="width: 57%"></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.pageHeader { margin-bottom: 2rem; }
.pageHeader h1 { font-size: 1.75rem; color: #111827; margin-bottom: 0.25rem; }
.subtitle { color: #6b7280; }
.dashboardGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.card { background: white; border-radius: 10px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }
.cardTitle { font-size: 1.1rem; color: #111827; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb; }
.activityList { display: flex; flex-direction: column; gap: 1rem; }
.activityItem { display: flex; align-items: center; gap: 0.875rem; }
.activityIcon { font-size: 1.5rem; flex-shrink: 0; }
.activityAction { font-weight: 600; color: #111827; font-size: 0.9rem; }
.activityMeta { font-size: 0.8rem; color: #6b7280; }
.pipelineStages { display: flex; flex-direction: column; gap: 1.25rem; }
.pipelineStage {}
.stageHeader { display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 500; color: #374151; margin-bottom: 0.35rem; }
.stageCount { font-weight: 700; color: #111827; }
.stageBar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }
.stageFill { height: 100%; background: #4f46e5; border-radius: 4px; transition: width 0.3s ease; }
.stageFillWon { height: 100%; background: #10b981; border-radius: 4px; transition: width 0.3s ease; }

@media (max-width: 768px) { .dashboardGrid { grid-template-columns: 1fr; } }
</style>
