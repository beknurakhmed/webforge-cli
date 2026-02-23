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
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Skills & Technologies</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div v-for="skill in skills" :key="skill.name" class="bg-white rounded-lg p-5 shadow-sm">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">{{ skill.icon }}</span>
          <span class="font-semibold text-gray-900 flex-1">{{ skill.name }}</span>
          <span class="text-sm font-bold text-indigo-600">{{ skill.level }}%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded transition-all duration-500"
            :style="{ width: skill.level + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
