<script setup lang="ts">
import SkillsGrid from '../components/SkillsGrid.vue'

const experience = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present' },
  { role: 'Full Stack Developer', company: 'StartupLab', period: '2019 - 2022' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2017 - 2019' },
]
</script>

<template>
  <div :class="$style.aboutSection">
    <div :class="$style.aboutAvatar">👨‍💻</div>
    <h1>About Me</h1>
    <p :class="$style.aboutRole">Full-Stack Developer</p>
    <div :class="$style.aboutBio">
      <p>I'm a passionate developer with 7+ years of experience building web applications. I specialize in modern JavaScript frameworks, scalable backend architectures, and creating intuitive user experiences.</p>
      <br />
      <p>I enjoy solving complex problems and turning ideas into polished products. When I'm not coding, I contribute to open-source projects and write technical articles.</p>
    </div>
    <h2 :class="$style.sectionTitle">Experience</h2>
    <div v-for="exp in experience" :key="exp.role" :class="$style.experienceItem">
      <h3>{{ exp.role }}</h3>
      <p>{{ exp.company }} &middot; {{ exp.period }}</p>
    </div>
    <br />
    <h2 :class="$style.sectionTitle">Skills</h2>
    <SkillsGrid />
  </div>
</template>

<style module>
.aboutSection {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.aboutAvatar {
  font-size: 5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.aboutSection h1 {
  text-align: center;
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.aboutRole {
  text-align: center;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.aboutBio {
  font-size: 1rem;
  line-height: 1.8;
  color: #374151;
  margin-bottom: 2rem;
}

.sectionTitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.experienceItem {
  background: #fff;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 0.75rem;
}

.experienceItem h3 {
  font-size: 1rem;
  color: #111827;
}

.experienceItem p {
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
