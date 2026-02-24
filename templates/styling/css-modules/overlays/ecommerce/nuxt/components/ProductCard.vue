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
  <NuxtLink :to="`/product/${product.id}`" :class="$style.productCard">
    <div :class="$style.cardImage">
      <span :class="$style.emoji">{{ product.image }}</span>
    </div>
    <div :class="$style.cardBody">
      <span :class="$style.cardCategory">{{ product.category }}</span>
      <h3 :class="$style.cardName">{{ product.name }}</h3>
      <p :class="$style.cardPrice">${{ product.price.toFixed(2) }}</p>
    </div>
  </NuxtLink>
</template>

<style module>
.productCard {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.productCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.cardImage {
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.emoji {
  font-size: 4rem;
}

.cardBody {
  padding: 1.25rem;
}

.cardCategory {
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cardName {
  font-size: 1.05rem;
  color: #111827;
  margin: 0.35rem 0 0.5rem;
}

.cardPrice {
  font-size: 1.15rem;
  font-weight: 700;
  color: #4f46e5;
}
</style>
