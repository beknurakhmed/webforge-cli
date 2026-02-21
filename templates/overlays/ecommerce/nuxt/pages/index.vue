<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', description: 'Premium wireless headphones with noise cancellation.' },
  { id: 2, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', description: 'Lightweight running shoes for daily training.' },
  { id: 3, name: 'Coffee Maker', price: 49.99, image: '☕', category: 'Home', description: 'Programmable coffee maker with thermal carafe.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', description: 'Water-resistant laptop backpack.' },
  { id: 5, name: 'Smartwatch', price: 199.99, image: '⌚', category: 'Electronics', description: 'Fitness tracking smartwatch.' },
  { id: 6, name: 'Desk Lamp', price: 34.99, image: '💡', category: 'Home', description: 'LED desk lamp with adjustable brightness.' },
  { id: 7, name: 'Yoga Mat', price: 29.99, image: '🧘', category: 'Sports', description: 'Non-slip yoga mat with carrying strap.' },
  { id: 8, name: 'Sunglasses', price: 89.99, image: '🕶️', category: 'Accessories', description: 'Polarized sunglasses with UV protection.' },
];

const search = ref('');
const selectedCategory = ref('All');

const categories = computed(() => ['All', ...new Set(products.map(p => p.category))]);

const filteredProducts = computed(() => {
  return products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase());
    const matchCategory = selectedCategory.value === 'All' || p.category === selectedCategory.value;
    return matchSearch && matchCategory;
  });
});
</script>

<template>
  <div class="shop-page">
    <div class="shop-hero">
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products at great prices</p>
    </div>

    <div class="shop-controls">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="search-input"
      />
      <div class="category-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['cat-btn', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-if="filteredProducts.length === 0" class="no-results">
      No products found matching your search.
    </p>
  </div>
</template>

<style scoped>
.shop-hero {
  text-align: center;
  padding: 2rem 0 1.5rem;
}

.shop-hero h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.shop-hero p {
  color: #6b7280;
  font-size: 1.1rem;
}

.shop-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.category-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.cat-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.cat-btn:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

.cat-btn.active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.no-results {
  text-align: center;
  color: #6b7280;
  padding: 3rem 0;
  font-size: 1.1rem;
}
</style>
