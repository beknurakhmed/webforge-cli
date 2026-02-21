<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
  };
}>();
</script>

<template>
  <NuxtLink :to="`/post/${post.id}`" class="post-card">
    <div class="card-image">
      <span class="emoji">{{ post.image }}</span>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <NuxtLink :to="`/category/${post.category.toLowerCase()}`" class="card-category" @click.stop>
          {{ post.category }}
        </NuxtLink>
        <span class="card-read-time">{{ post.readTime }}</span>
      </div>
      <h3 class="card-title">{{ post.title }}</h3>
      <p class="card-excerpt">{{ post.excerpt }}</p>
      <div class="card-footer">
        <span class="card-author">{{ post.author }}</span>
        <span class="card-date">{{ post.date }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.post-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.emoji {
  font-size: 3.5rem;
}

.card-body {
  padding: 1.25rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-category {
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.card-category:hover {
  text-decoration: underline;
}

.card-read-time {
  font-size: 0.75rem;
  color: #9ca3af;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.card-title {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.card-excerpt {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #9ca3af;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.card-author {
  font-weight: 600;
  color: #374151;
}
</style>
