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
  <aside class="bg-white rounded-lg p-5 shadow-sm h-fit">
    <h3 class="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
    <ul class="list-none mb-6 space-y-1.5">
      <li v-for="cat in categories" :key="cat">
        <RouterLink :to="`/category/${cat.toLowerCase().replace('.', '')}`" class="text-sm text-gray-500 no-underline hover:text-indigo-600 transition-colors">{{ cat }}</RouterLink>
      </li>
    </ul>
    <h3 class="text-sm font-semibold text-gray-900 mb-3">Newsletter</h3>
    <div>
      <input v-model="email" type="email" placeholder="your@email.com" class="w-full py-2 px-3 border border-gray-300 rounded-md text-sm mb-2 focus:outline-none focus:border-indigo-600 transition-colors" />
      <button @click="subscribe" class="w-full py-2 bg-indigo-600 text-white border-none rounded-md text-sm font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">Subscribe</button>
      <p v-if="subscribed" class="text-emerald-600 text-xs mt-1.5">Subscribed!</p>
    </div>
  </aside>
</template>
