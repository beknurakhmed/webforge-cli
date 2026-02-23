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
  <aside class="flex flex-col gap-5">
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">Categories</h3>
      <ul class="list-none">
        <li v-for="cat in categories" :key="cat.slug">
          <NuxtLink :to="`/category/${cat.slug}`" class="flex justify-between items-center py-2 text-gray-700 text-sm border-b border-gray-50 hover:text-indigo-600 transition-colors">
            <span>{{ cat.name }}</span>
            <span class="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full">{{ cat.count }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg p-6 shadow-sm">
      <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">Newsletter</h3>
      <p class="text-sm text-gray-500 mb-4">Get the latest posts delivered to your inbox.</p>
      <form class="flex flex-col gap-2" @submit.prevent="handleSubscribe">
        <input
          v-model="email"
          type="email"
          placeholder="your@email.com"
          class="px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
          required
        />
        <button type="submit" class="bg-indigo-600 text-white border-none py-2.5 rounded-lg font-semibold cursor-pointer hover:bg-indigo-700 transition-colors">Subscribe</button>
      </form>
    </div>
  </aside>
</template>
