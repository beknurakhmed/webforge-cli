<script setup lang="ts">
import { ref } from 'vue'
import { categories } from '../data'

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
  }
}
</script>

<template>
  <aside :class="$style.blogSidebar">
    <h3>Categories</h3>
    <ul :class="$style.categoryList">
      <li v-for="cat in categories" :key="cat">
        <RouterLink :to="`/category/${cat.toLowerCase().replace('.', '')}`">{{ cat }}</RouterLink>
      </li>
    </ul>
    <h3>Newsletter</h3>
    <div :class="$style.newsletterForm">
      <input v-model="email" type="email" placeholder="your@email.com" />
      <button @click="subscribe">Subscribe</button>
      <p v-if="subscribed" style="color: #059669; font-size: 0.8rem; margin-top: 0.4rem;">Subscribed!</p>
    </div>
  </aside>
</template>

<style module>
.blogSidebar {
  background: #fff;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  height: fit-content;
}

.blogSidebar h3 {
  font-size: 0.95rem;
  color: #111827;
  margin-bottom: 0.75rem;
}

.categoryList {
  list-style: none;
  margin-bottom: 1.5rem;
}

.categoryList li {
  margin-bottom: 0.4rem;
}

.categoryList a {
  font-size: 0.9rem;
  color: #6b7280;
}

.categoryList a:hover {
  color: #4f46e5;
}

.newsletterForm input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.newsletterForm button {
  width: 100%;
  padding: 0.5rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.newsletterForm button:hover {
  background: #4338ca;
}
</style>
