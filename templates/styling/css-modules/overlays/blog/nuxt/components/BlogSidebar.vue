<script setup lang="ts">
const categories = [
  { name: 'Technology', slug: 'technology', count: 3 },
  { name: 'Design', slug: 'design', count: 2 },
  { name: 'Business', slug: 'business', count: 2 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 1 },
];

const email = ref('');

function handleSubscribe() {
  if (email.value) {
    alert('Thanks for subscribing!');
    email.value = '';
  }
}
</script>

<template>
  <aside :class="$style.blogSidebar">
    <div :class="$style.sidebarCard">
      <h3 :class="$style.sidebarTitle">Categories</h3>
      <ul :class="$style.categoryList">
        <li v-for="cat in categories" :key="cat.slug">
          <NuxtLink :to="`/category/${cat.slug}`" :class="$style.categoryLink">
            <span>{{ cat.name }}</span>
            <span :class="$style.categoryCount">{{ cat.count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div :class="$style.sidebarCard">
      <h3 :class="$style.sidebarTitle">Newsletter</h3>
      <p :class="$style.newsletterDesc">Get the latest posts delivered to your inbox.</p>
      <form :class="$style.newsletterForm" @submit.prevent="handleSubscribe">
        <input
          v-model="email"
          type="email"
          placeholder="your@email.com"
          :class="$style.newsletterInput"
          required
        />
        <button type="submit" :class="$style.newsletterBtn">Subscribe</button>
      </form>
    </div>
  </aside>
</template>

<style module>
.blogSidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebarCard {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.sidebarTitle {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.categoryList {
  list-style: none;
}

.categoryLink {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: #374151;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 0.95rem;
  transition: color 0.2s;
  border-bottom: 1px solid #f3f4f6;
}

.categoryLink:hover {
  color: #4f46e5;
}

.categoryCount {
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
}

.newsletterDesc {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.newsletterForm {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.newsletterInput {
  padding: 0.65rem 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.newsletterInput:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.newsletterBtn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.65rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Segoe UI', system-ui, sans-serif;
  transition: background 0.2s;
}

.newsletterBtn:hover {
  background: #4338ca;
}
</style>
