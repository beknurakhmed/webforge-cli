<script setup lang="ts">
const authors = [
  { name: 'Alex Rivera', role: 'Tech Lead & Writer', bio: 'Full-stack developer passionate about modern web technologies and teaching.', avatar: '👨‍💻' },
  { name: 'Sarah Chen', role: 'Design Editor', bio: 'UI/UX designer exploring the intersection of aesthetics and usability.', avatar: '👩‍🎨' },
  { name: 'Jordan Lee', role: 'Business & Lifestyle', bio: 'Entrepreneur and writer covering business strategy and digital wellness.', avatar: '🧑‍💼' },
];
</script>

<template>
  <div class="about-page">
    <div class="about-hero">
      <h1>About {{projectName}}</h1>
      <p class="hero-desc">
        We are a team of passionate writers and developers sharing insights about
        technology, design, business, and modern living. Our mission is to provide
        thoughtful, practical content that helps you grow professionally and personally.
      </p>
    </div>

    <section class="authors-section">
      <h2>Our Writers</h2>
      <div class="authors-grid">
        <div v-for="author in authors" :key="author.name" class="author-card">
          <span class="author-avatar">{{ author.avatar }}</span>
          <h3 class="author-name">{{ author.name }}</h3>
          <p class="author-role">{{ author.role }}</p>
          <p class="author-bio">{{ author.bio }}</p>
        </div>
      </div>
    </section>

    <section class="mission-section">
      <h2>Our Mission</h2>
      <div class="mission-grid">
        <div class="mission-card">
          <span class="mission-icon">📚</span>
          <h3>Quality Content</h3>
          <p>Well-researched, in-depth articles that provide real value to our readers.</p>
        </div>
        <div class="mission-card">
          <span class="mission-icon">🌍</span>
          <h3>Community</h3>
          <p>Building a community of learners who share knowledge and support each other.</p>
        </div>
        <div class="mission-card">
          <span class="mission-icon">💡</span>
          <h3>Innovation</h3>
          <p>Staying at the forefront of technology and sharing insights from the cutting edge.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  text-align: center;
  padding: 2rem 0 3rem;
  max-width: 700px;
  margin: 0 auto;
}

.about-hero h1 {
  font-size: 2.25rem;
  color: #111827;
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.8;
}

.authors-section,
.mission-section {
  margin-bottom: 3rem;
}

.authors-section h2,
.mission-section h2 {
  font-size: 1.5rem;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;
}

.authors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.author-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.author-avatar {
  font-size: 3.5rem;
  display: block;
  margin-bottom: 1rem;
}

.author-name {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 0.25rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.author-role {
  font-size: 0.85rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.author-bio {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.mission-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mission-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.mission-card h3 {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 0.5rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.mission-card p {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
}
</style>
