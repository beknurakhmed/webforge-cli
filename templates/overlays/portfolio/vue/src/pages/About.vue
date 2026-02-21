<script setup lang="ts">
import SkillsGrid from '../components/SkillsGrid.vue'

const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present' },
  { role: 'Full Stack Developer', company: 'StartupLab', period: '2019 - 2022' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2017 - 2019' },
]
</script>

<template>
  <div class="about-section">
    <div class="about-avatar">👨‍💻</div>
    <h1>About Me</h1>
    <p class="about-role">Full-Stack Developer</p>
    <div class="about-bio">
      <p>I'm a passionate developer with 7+ years of experience building web applications. I specialize in modern JavaScript frameworks, scalable backend architectures, and creating intuitive user experiences.</p>
      <br />
      <p>I enjoy solving complex problems and turning ideas into polished products. When I'm not coding, I contribute to open-source projects and write technical articles.</p>
    </div>
    <h2 class="section-title">Experience</h2>
    <div v-for="exp in experience" :key="exp.role" class="experience-item">
      <h3>{{ exp.role }}</h3>
      <p>{{ exp.company }} &middot; {{ exp.period }}</p>
    </div>
    <br />
    <h2 class="section-title">Skills</h2>
    <SkillsGrid />
  </div>
</template>
