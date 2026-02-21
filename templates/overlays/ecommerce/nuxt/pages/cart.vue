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
  <div class="cart-page">
    <h1 class="cart-title">Shopping Cart</h1>

    <div v-if="cart.length > 0" class="cart-content">
      <div class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <span class="item-image">{{ item.image }}</span>
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-price">${{ item.price.toFixed(2) }}</p>
          </div>
          <div class="item-quantity">
            <button @click="updateQuantity(item.id, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, 1)">+</button>
          </div>
          <p class="item-subtotal">${{ (item.price * item.quantity).toFixed(2) }}</p>
          <button class="remove-btn" @click="removeItem(item.id)">✕</button>
        </div>
      </div>

      <div class="cart-summary">
        <h2>Order Summary</h2>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p class="empty-icon">🛒</p>
      <h2>Your cart is empty</h2>
      <p>Start adding some products!</p>
      <NuxtLink to="/" class="continue-btn">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.cart-title {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 2rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.item-image {
  font-size: 2.5rem;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  color: #111827;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.item-price {
  color: #6b7280;
  font-size: 0.9rem;
}

.item-quantity {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  overflow: hidden;
}

.item-quantity button {
  background: #f3f4f6;
  border: none;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.item-quantity button:hover {
  background: #e5e7eb;
}

.item-quantity span {
  padding: 0.35rem 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.item-subtotal {
  font-weight: 700;
  color: #111827;
  min-width: 70px;
  text-align: right;
}

.remove-btn {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem;
}

.remove-btn:hover {
  color: #ef4444;
}

.cart-summary {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cart-summary h2 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #6b7280;
}

.summary-row.total {
  font-weight: 700;
  font-size: 1.2rem;
  color: #111827;
  border-top: 1px solid #e5e7eb;
  margin-top: 0.75rem;
  padding-top: 1rem;
}

.checkout-btn {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.25rem;
  transition: background 0.2s;
}

.checkout-btn:hover {
  background: #4338ca;
}

.empty-cart {
  text-align: center;
  padding: 4rem 0;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-cart h2 {
  color: #111827;
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.continue-btn {
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.continue-btn:hover {
  background: #4338ca;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}
</style>
