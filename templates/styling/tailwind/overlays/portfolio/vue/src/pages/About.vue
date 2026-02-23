<script setup lang="ts">
import SkillsGrid from '../components/SkillsGrid.vue'

const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present' },
  { role: 'Full Stack Developer', company: 'StartupLab', period: '2019 - 2022' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2017 - 2019' },
]
</script>

<template>
  <div class="max-w-3xl mx-auto py-12 px-6">
    <div class="text-7xl text-center mb-4">&#x1F468;&#x200D;&#x1F4BB;</div>
    <h1 class="text-2xl font-bold text-gray-900 text-center mb-1">About Me</h1>
    <p class="text-center text-gray-500 mb-6">Full-Stack Developer</p>
    <div class="text-base leading-relaxed text-gray-700 mb-8">
      <p>I'm a passionate developer with 7+ years of experience building web applications. I specialize in modern JavaScript frameworks, scalable backend architectures, and creating intuitive user experiences.</p>
      <br />
      <p>I enjoy solving complex problems and turning ideas into polished products. When I'm not coding, I contribute to open-source projects and write technical articles.</p>
    </div>
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Experience</h2>
    <div v-for="exp in experience" :key="exp.role" class="bg-white p-4 rounded-lg shadow-sm mb-3">
      <h3 class="text-base font-semibold text-gray-900">{{ exp.role }}</h3>
      <p class="text-sm text-gray-500">{{ exp.company }} &middot; {{ exp.period }}</p>
    </div>
    <br />
    <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Skills</h2>
    <SkillsGrid />
  </div>
</template>
