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
  <aside class="blog-sidebar">
    <h3>Categories</h3>
    <ul class="category-list">
      <li v-for="cat in categories" :key="cat">
        <RouterLink :to="`/category/${cat.toLowerCase().replace('.', '')}`">{{ cat }}</RouterLink>
      </li>
    </ul>
    <h3>Newsletter</h3>
    <div class="newsletter-form">
      <input v-model="email" type="email" placeholder="your@email.com" />
      <button @click="subscribe">Subscribe</button>
      <p v-if="subscribed" style="color: #059669; font-size: 0.8rem; margin-top: 0.4rem;">Subscribed!</p>
    </div>
  </aside>
</template>
