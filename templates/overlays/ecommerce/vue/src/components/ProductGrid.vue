<script setup lang="ts">
interface Product { id: number; name: string; price: number; image: string; category: string; description: string; }
defineProps<{ products: Product[] }>();
defineEmits<{ 'add-to-cart': [product: Product] }>();
</script>

<template>
  <section class="product-section">
    <h2>All Products</h2>
    <div class="product-grid">
      <div v-for="p in products" :key="p.id" class="product-card">
        <div class="product-image">{{ p.image }}</div>
        <div class="product-info">
          <span class="product-category">{{ p.category }}</span>
          <h3>{{ p.name }}</h3>
          <p>{{ p.description }}</p>
          <div class="product-footer">
            <span class="product-price">${{ p.price.toFixed(2) }}</span>
            <button class="add-to-cart" @click="$emit('add-to-cart', p)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section h2 { font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; }
.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
.product-card { border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; transition: all 0.2s; }
.product-card:hover { box-shadow: 0 8px 25px rgba(0,0,0,0.08); transform: translateY(-2px); }
.product-image { font-size: 4rem; text-align: center; padding: 2rem; background: #f9fafb; }
.product-info { padding: 1.25rem; }
.product-category { font-size: 0.75rem; color: #4f46e5; font-weight: 600; text-transform: uppercase; }
.product-info h3 { font-size: 1.1rem; margin: 0.25rem 0; }
.product-info p { color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem; }
.product-footer { display: flex; justify-content: space-between; align-items: center; }
.product-price { font-size: 1.25rem; font-weight: 700; }
.add-to-cart { background: #4f46e5; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500; }
</style>
