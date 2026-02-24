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
  <NuxtLink :to="`/post/${post.id}`" :class="$style.postCard">
    <div :class="$style.cardImage">
      <span :class="$style.emoji">{{ post.image }}</span>
    </div>
    <div :class="$style.cardBody">
      <div :class="$style.cardMeta">
        <NuxtLink :to="`/category/${post.category.toLowerCase()}`" :class="$style.cardCategory" @click.stop>
          {{ post.category }}
        </NuxtLink>
        <span :class="$style.cardReadTime">{{ post.readTime }}</span>
      </div>
      <h3 :class="$style.cardTitle">{{ post.title }}</h3>
      <p :class="$style.cardExcerpt">{{ post.excerpt }}</p>
      <div :class="$style.cardFooter">
        <span :class="$style.cardAuthor">{{ post.author }}</span>
        <span :class="$style.cardDate">{{ post.date }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style module>
.postCard {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.postCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.cardImage {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.emoji {
  font-size: 3.5rem;
}

.cardBody {
  padding: 1.25rem;
}

.cardMeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.cardCategory {
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.cardCategory:hover {
  text-decoration: underline;
}

.cardReadTime {
  font-size: 0.75rem;
  color: #9ca3af;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.cardTitle {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.cardExcerpt {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cardFooter {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #9ca3af;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.cardAuthor {
  font-weight: 600;
  color: #374151;
}
</style>
