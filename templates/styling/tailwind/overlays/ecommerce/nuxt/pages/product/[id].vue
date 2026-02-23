<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const route = useRoute();
const productId = Number(route.params.id);

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

const product = products.find(p => p.id === productId);
const quantity = ref(1);
const added = ref(false);

const cart = useState<CartItem[]>('cart');

function addToCart() {
  if (!product) return;
  const existing = cart.value.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity.value;
  } else {
    cart.value.push({ ...product, quantity: quantity.value });
  }
  added.value = true;
  setTimeout(() => { added.value = false; }, 2000);
}
</script>

<template>
  <div v-if="product">
    <NuxtLink to="/" class="inline-block text-indigo-600 font-medium mb-6 hover:underline">← Back to Shop</NuxtLink>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div class="bg-white rounded-xl flex items-center justify-center p-12 shadow-sm">
        <span class="text-[8rem]">{{ product.image }}</span>
      </div>

      <div>
        <span class="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium mb-3">{{ product.category }}</span>
        <h1 class="text-3xl font-bold text-gray-900 mb-3">{{ product.name }}</h1>
        <p class="text-2xl text-indigo-600 font-bold mb-4">${{ product.price.toFixed(2) }}</p>
        <p class="text-gray-500 leading-relaxed mb-8">{{ product.description }}</p>

        <div class="flex gap-4 items-center">
          <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button class="bg-gray-100 border-none px-4 py-2 text-lg cursor-pointer hover:bg-gray-200" @click="quantity = Math.max(1, quantity - 1)">-</button>
            <span class="px-4 py-2 font-semibold min-w-[3rem] text-center">{{ quantity }}</span>
            <button class="bg-gray-100 border-none px-4 py-2 text-lg cursor-pointer hover:bg-gray-200" @click="quantity++">+</button>
          </div>
          <button class="bg-indigo-600 text-white border-none px-8 py-3 rounded-lg text-base font-semibold cursor-pointer hover:bg-indigo-700 transition-colors" @click="addToCart">
            {{ added ? '✓ Added!' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-16">
    <h2 class="text-gray-900 font-bold text-xl mb-4">Product not found</h2>
    <NuxtLink to="/" class="inline-block text-indigo-600 font-medium hover:underline">← Back to Shop</NuxtLink>
  </div>
</template>
