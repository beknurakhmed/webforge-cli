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
    <h1 :class="$style.cartTitle">Shopping Cart</h1>

    <div v-if="cart.length > 0" :class="$style.cartContent">
      <div :class="$style.cartItems">
        <div v-for="item in cart" :key="item.id" :class="$style.cartItem">
          <span :class="$style.itemImage">{{ item.image }}</span>
          <div :class="$style.itemDetails">
            <h3>{{ item.name }}</h3>
            <p :class="$style.itemPrice">${{ item.price.toFixed(2) }}</p>
          </div>
          <div :class="$style.itemQuantity">
            <button @click="updateQuantity(item.id, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, 1)">+</button>
          </div>
          <p :class="$style.itemSubtotal">${{ (item.price * item.quantity).toFixed(2) }}</p>
          <button :class="$style.removeBtn" @click="removeItem(item.id)">✕</button>
        </div>
      </div>

      <div :class="$style.cartSummary">
        <h2>Order Summary</h2>
        <div :class="$style.summaryRow">
          <span>Subtotal</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <div :class="$style.summaryRow">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div :class="[$style.summaryRow, $style.summaryTotal]">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
        <button :class="$style.checkoutBtn">Proceed to Checkout</button>
      </div>
    </div>

    <div v-else :class="$style.emptyCart">
      <p :class="$style.emptyIcon">🛒</p>
      <h2>Your cart is empty</h2>
      <p>Start adding some products!</p>
      <NuxtLink to="/" :class="$style.continueBtn">Continue Shopping</NuxtLink>
    </div>
  </div>
</template>

<style module>
.cartTitle {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 2rem;
}

.cartContent {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: start;
}

.cartItems {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cartItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.itemImage {
  font-size: 2.5rem;
}

.itemDetails {
  flex: 1;
}

.itemDetails h3 {
  color: #111827;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.itemPrice {
  color: #6b7280;
  font-size: 0.9rem;
}

.itemQuantity {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  overflow: hidden;
}

.itemQuantity button {
  background: #f3f4f6;
  border: none;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.itemQuantity button:hover {
  background: #e5e7eb;
}

.itemQuantity span {
  padding: 0.35rem 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.itemSubtotal {
  font-weight: 700;
  color: #111827;
  min-width: 70px;
  text-align: right;
}

.removeBtn {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem;
}

.removeBtn:hover {
  color: #ef4444;
}

.cartSummary {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cartSummary h2 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.summaryRow {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #6b7280;
}

.summaryTotal {
  font-weight: 700;
  font-size: 1.2rem;
  color: #111827;
  border-top: 1px solid #e5e7eb;
  margin-top: 0.75rem;
  padding-top: 1rem;
}

.checkoutBtn {
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

.checkoutBtn:hover {
  background: #4338ca;
}

.emptyCart {
  text-align: center;
  padding: 4rem 0;
}

.emptyIcon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.emptyCart h2 {
  color: #111827;
  margin-bottom: 0.5rem;
}

.emptyCart p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.continueBtn {
  display: inline-block;
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.continueBtn:hover {
  background: #4338ca;
}

@media (max-width: 768px) {
  .cartContent {
    grid-template-columns: 1fr;
  }
}
</style>
