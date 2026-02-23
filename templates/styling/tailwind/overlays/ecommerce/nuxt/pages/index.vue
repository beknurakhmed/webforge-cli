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
  <div>
    <div class="text-center py-8 pb-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome to Our Store</h1>
      <p class="text-gray-500 text-lg">Discover amazing products at great prices</p>
    </div>

    <div class="flex flex-col gap-4 mb-8">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-colors"
      />
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="[
            'px-4 py-2 border rounded-full text-sm cursor-pointer transition-all',
            selectedCategory === cat
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
          ]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <p v-if="filteredProducts.length === 0" class="text-center text-gray-500 py-12 text-lg">
      No products found matching your search.
    </p>
  </div>
</template>
