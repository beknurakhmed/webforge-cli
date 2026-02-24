<script setup lang="ts">
defineProps<{
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
}>();
</script>

<template>
  <div :class="$style.projectCard">
    <div :class="$style.cardImage">
      <span :class="$style.emoji">{{ project.image }}</span>
    </div>
    <div :class="$style.cardBody">
      <h3 :class="$style.cardTitle">{{ project.title }}</h3>
      <p :class="$style.cardDesc">{{ project.description }}</p>
      <div :class="$style.cardTags">
        <span v-for="tag in project.tags" :key="tag" :class="$style.tag">{{ tag }}</span>
      </div>
      <a :href="project.link" :class="$style.cardLink" target="_blank" rel="noopener">
        View Project &rarr;
      </a>
    </div>
  </div>
</template>

<style module>
.projectCard {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.projectCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.cardImage {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}

.emoji {
  font-size: 4rem;
}

.cardBody {
  padding: 1.5rem;
}

.cardTitle {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.cardDesc {
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.cardTags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tag {
  background: #eef2ff;
  color: #4f46e5;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
}

.cardLink {
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.cardLink:hover {
  color: #4338ca;
  text-decoration: underline;
}
</style>
