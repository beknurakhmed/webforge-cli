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
  <NuxtLink :to="`/product/${product.id}`" class="product-card">
    <div class="card-image">
      <span class="emoji">{{ product.image }}</span>
    </div>
    <div class="card-body">
      <span class="card-category">{{ product.category }}</span>
      <h3 class="card-name">{{ product.name }}</h3>
      <p class="card-price">${{ product.price.toFixed(2) }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.emoji {
  font-size: 4rem;
}

.card-body {
  padding: 1.25rem;
}

.card-category {
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-name {
  font-size: 1.05rem;
  color: #111827;
  margin: 0.35rem 0 0.5rem;
}

.card-price {
  font-size: 1.15rem;
  font-weight: 700;
  color: #4f46e5;
}
</style>
