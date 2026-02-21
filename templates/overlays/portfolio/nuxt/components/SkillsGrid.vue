<script setup lang="ts">
const skills = [
  { name: 'JavaScript', level: 95, icon: '📜' },
  { name: 'TypeScript', level: 90, icon: '📘' },
  { name: 'Vue.js', level: 92, icon: '💚' },
  { name: 'React', level: 85, icon: '⚛️' },
  { name: 'Node.js', level: 88, icon: '🟢' },
  { name: 'CSS/Sass', level: 90, icon: '🎨' },
  { name: 'Python', level: 78, icon: '🐍' },
  { name: 'Docker', level: 75, icon: '🐳' },
];
</script>

<template>
  <div class="skills-section">
    <h2 class="section-title">Skills & Technologies</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="skill-header">
          <span class="skill-icon">{{ skill.icon }}</span>
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.skill-card {
  background: white;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.skill-icon {
  font-size: 1.25rem;
}

.skill-name {
  font-weight: 600;
  color: #111827;
  flex: 1;
}

.skill-level {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4f46e5;
}

.skill-bar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #818cf8);
  border-radius: 4px;
  transition: width 0.5s ease;
}
</style>
