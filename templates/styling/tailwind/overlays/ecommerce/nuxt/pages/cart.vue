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

const cart = useState<CartItem[]>('cart');

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

function removeItem(id: number) {
  cart.value = cart.value.filter(item => item.id !== id);
}

function updateQuantity(id: number, delta: number) {
  const item = cart.value.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeItem(id);
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

    <div v-if="cart.length > 0" class="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8 items-start">
      <div class="flex flex-col gap-4">
        <div v-for="item in cart" :key="item.id" class="flex items-center gap-4 bg-white p-5 rounded-lg shadow-sm">
          <span class="text-4xl">{{ item.image }}</span>
          <div class="flex-1">
            <h3 class="text-gray-900 font-semibold mb-1">{{ item.name }}</h3>
            <p class="text-gray-500 text-sm">${{ item.price.toFixed(2) }}</p>
          </div>
          <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button class="bg-gray-100 border-none px-3 py-1.5 cursor-pointer text-sm hover:bg-gray-200" @click="updateQuantity(item.id, -1)">-</button>
            <span class="px-3 py-1.5 font-semibold text-sm">{{ item.quantity }}</span>
            <button class="bg-gray-100 border-none px-3 py-1.5 cursor-pointer text-sm hover:bg-gray-200" @click="updateQuantity(item.id, 1)">+</button>
          </div>
          <p class="font-bold text-gray-900 min-w-[70px] text-right">${{ (item.price * item.quantity).toFixed(2) }}</p>
          <button class="bg-transparent border-none text-gray-400 cursor-pointer text-lg p-1 hover:text-red-500" @click="removeItem(item.id)">✕</button>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">Order Summary</h2>
        <div class="flex justify-between py-2 text-gray-500">
          <span>Subtotal</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between py-2 text-gray-500">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div class="flex justify-between py-4 mt-3 border-t border-gray-200 font-bold text-xl text-gray-900">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <button class="w-full bg-indigo-600 text-white border-none py-3.5 rounded-lg text-base font-semibold cursor-pointer mt-5 hover:bg-indigo-700 transition-colors">Proceed to Checkout</button>
      </div>
    </div>

    <div v-else class="text-center py-16">
      <p class="text-6xl mb-4">🛒</p>
      <h2 class="text-gray-900 font-bold text-xl mb-2">Your cart is empty</h2>
      <p class="text-gray-500 mb-6">Start adding some products!</p>
      <NuxtLink to="/" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>
