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
  <div :class="$style.skillsSection">
    <h2 :class="$style.sectionTitle">Skills & Technologies</h2>
    <div :class="$style.skillsGrid">
      <div v-for="skill in skills" :key="skill.name" :class="$style.skillCard">
        <div :class="$style.skillHeader">
          <span :class="$style.skillIcon">{{ skill.icon }}</span>
          <span :class="$style.skillName">{{ skill.name }}</span>
          <span :class="$style.skillLevel">{{ skill.level }}%</span>
        </div>
        <div :class="$style.skillBar">
          <div :class="$style.skillFill" :style="{ width: skill.level + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.sectionTitle {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.skillsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.skillCard {
  background: white;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.skillHeader {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.skillIcon {
  font-size: 1.25rem;
}

.skillName {
  font-weight: 600;
  color: #111827;
  flex: 1;
}

.skillLevel {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4f46e5;
}

.skillBar {
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.skillFill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #818cf8);
  border-radius: 4px;
  transition: width 0.5s ease;
}
</style>
