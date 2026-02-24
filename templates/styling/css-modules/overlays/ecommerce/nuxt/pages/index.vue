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
const style = useCssModule();

const categories = computed(() => ['All', ...new Set(products.map(p => p.category))]);

const filteredProducts = computed(() => {
  return products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase());
    const matchCategory = selectedCategory.value === 'All' || p.category === selectedCategory.value;
    return matchSearch && matchCategory;
  });
});

function catBtnClass(cat: string) {
  return selectedCategory.value === cat
    ? [style.catBtn, style.catBtnActive]
    : [style.catBtn];
}
</script>

<template>
  <div>
    <div :class="$style.shopHero">
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products at great prices</p>
    </div>

    <div :class="$style.shopControls">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        :class="$style.searchInput"
      />
      <div :class="$style.categoryFilters">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="catBtnClass(cat)"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div :class="$style.productGrid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-if="filteredProducts.length === 0" :class="$style.noResults">
      No products found matching your search.
    </p>
  </div>
</template>

<style module>
.shopHero {
  text-align: center;
  padding: 2rem 0 1.5rem;
}

.shopHero h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.shopHero p {
  color: #6b7280;
  font-size: 1.1rem;
}

.shopControls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.searchInput {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.searchInput:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.categoryFilters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.catBtn {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.catBtn:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

.catBtnActive {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.productGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.noResults {
  text-align: center;
  color: #6b7280;
  padding: 3rem 0;
  font-size: 1.1rem;
}
</style>
