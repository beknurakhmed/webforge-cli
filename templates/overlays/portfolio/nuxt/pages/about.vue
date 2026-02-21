<script setup lang="ts">
const experiences = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present', description: 'Leading the frontend architecture for a SaaS platform serving 100K+ users.' },
  { role: 'Full Stack Developer', company: 'StartupXYZ', period: '2020 - 2022', description: 'Built and maintained multiple web applications using Vue.js and Node.js.' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2018 - 2020', description: 'Developed responsive websites and e-commerce solutions for clients.' },
];
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="hero-inner">
        <div class="hero-content">
          <span class="hero-avatar">👨‍💻</span>
          <div>
            <h1>About Me</h1>
            <p class="hero-intro">
              I'm a passionate full-stack developer with 6+ years of experience building
              web applications. I love turning complex problems into simple, elegant solutions
              and creating user experiences that delight.
            </p>
            <p class="hero-intro">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or enjoying the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="section-inner">
        <SkillsGrid />
      </div>
    </section>

    <section class="experience-section">
      <div class="section-inner">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          <div v-for="exp in experiences" :key="exp.role" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="exp-role">{{ exp.role }}</h3>
              <p class="exp-company">{{ exp.company }} &middot; {{ exp.period }}</p>
              <p class="exp-desc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #111827, #1e293b);
  color: white;
  padding: 4rem 1.5rem;
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.hero-avatar {
  font-size: 5rem;
  flex-shrink: 0;
}

.hero-content h1 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.hero-intro {
  color: #d1d5db;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.skills-section {
  padding: 4rem 1.5rem;
}

.section-inner {
  max-width: 900px;
  margin: 0 auto;
}

.experience-section {
  padding: 2rem 1.5rem 4rem;
  background: white;
}

.section-title {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e5e7eb;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 4px;
  width: 16px;
  height: 16px;
  background: #4f46e5;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #4f46e5;
}

.timeline-content {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
}

.exp-role {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.exp-company {
  font-size: 0.875rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.exp-desc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .hero-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
