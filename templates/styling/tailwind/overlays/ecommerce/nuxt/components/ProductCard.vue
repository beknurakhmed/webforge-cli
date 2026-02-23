<script setup lang="ts">
defineProps<{
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };
}>();
</script>

<template>
  <NuxtLink :to="`/product/${product.id}`" class="block bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div class="bg-gray-100 flex items-center justify-center p-8">
      <span class="text-6xl">{{ product.image }}</span>
    </div>
    <div class="p-5">
      <span class="text-xs text-indigo-600 font-semibold uppercase tracking-wider">{{ product.category }}</span>
      <h3 class="text-base font-semibold text-gray-900 mt-1.5 mb-2">{{ product.name }}</h3>
      <p class="text-lg font-bold text-indigo-600">${{ product.price.toFixed(2) }}</p>
    </div>
  </NuxtLink>
</template>
