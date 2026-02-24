<script setup lang="ts">
const experiences = [
  { role: 'Senior Frontend Developer', company: 'TechCorp', period: '2022 - Present', description: 'Leading the frontend architecture for a SaaS platform serving 100K+ users.' },
  { role: 'Full Stack Developer', company: 'StartupXYZ', period: '2020 - 2022', description: 'Built and maintained multiple web applications using Vue.js and Node.js.' },
  { role: 'Junior Developer', company: 'WebAgency', period: '2018 - 2020', description: 'Developed responsive websites and e-commerce solutions for clients.' },
];
</script>

<template>
  <div>
    <section :class="$style.aboutHero">
      <div :class="$style.heroInner">
        <div :class="$style.heroContent">
          <span :class="$style.heroAvatar">👨‍💻</span>
          <div>
            <h1>About Me</h1>
            <p :class="$style.heroIntro">
              I'm a passionate full-stack developer with 6+ years of experience building
              web applications. I love turning complex problems into simple, elegant solutions
              and creating user experiences that delight.
            </p>
            <p :class="$style.heroIntro">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or enjoying the outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section :class="$style.skillsSection">
      <div :class="$style.sectionInner">
        <SkillsGrid />
      </div>
    </section>

    <section :class="$style.experienceSection">
      <div :class="$style.sectionInner">
        <h2 :class="$style.sectionTitle">Experience</h2>
        <div :class="$style.timeline">
          <div v-for="exp in experiences" :key="exp.role" :class="$style.timelineItem">
            <div :class="$style.timelineDot"></div>
            <div :class="$style.timelineContent">
              <h3 :class="$style.expRole">{{ exp.role }}</h3>
              <p :class="$style.expCompany">{{ exp.company }} &middot; {{ exp.period }}</p>
              <p :class="$style.expDesc">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style module>
.aboutHero {
  background: linear-gradient(135deg, #111827, #1e293b);
  color: white;
  padding: 4rem 1.5rem;
}

.heroInner {
  max-width: 900px;
  margin: 0 auto;
}

.heroContent {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.heroAvatar {
  font-size: 5rem;
  flex-shrink: 0;
}

.heroContent h1 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.heroIntro {
  color: #d1d5db;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.skillsSection {
  padding: 4rem 1.5rem;
}

.sectionInner {
  max-width: 900px;
  margin: 0 auto;
}

.experienceSection {
  padding: 2rem 1.5rem 4rem;
  background: white;
}

.sectionTitle {
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

.timelineItem {
  position: relative;
  margin-bottom: 2rem;
}

.timelineItem:last-child {
  margin-bottom: 0;
}

.timelineDot {
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

.timelineContent {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
}

.expRole {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

.expCompany {
  font-size: 0.875rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.expDesc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .heroContent {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
