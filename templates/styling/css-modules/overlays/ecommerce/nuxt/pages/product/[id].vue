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
    <NuxtLink to="/" :class="$style.backLink">&larr; Back to Shop</NuxtLink>

    <div :class="$style.productLayout">
      <div :class="$style.productImage">
        <span :class="$style.imageEmoji">{{ product.image }}</span>
      </div>

      <div :class="$style.productInfo">
        <span :class="$style.productCategory">{{ product.category }}</span>
        <h1 :class="$style.productName">{{ product.name }}</h1>
        <p :class="$style.productPrice">${{ product.price.toFixed(2) }}</p>
        <p :class="$style.productDesc">{{ product.description }}</p>

        <div :class="$style.addToCartSection">
          <div :class="$style.quantityControl">
            <button @click="quantity = Math.max(1, quantity - 1)">-</button>
            <span>{{ quantity }}</span>
            <button @click="quantity++">+</button>
          </div>
          <button :class="$style.addBtn" @click="addToCart">
            {{ added ? '✓ Added!' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else :class="$style.notFound">
    <h2>Product not found</h2>
    <NuxtLink to="/" :class="$style.backLink">&larr; Back to Shop</NuxtLink>
  </div>
</template>

<style module>
.backLink {
  display: inline-block;
  color: #4f46e5;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.backLink:hover {
  text-decoration: underline;
}

.productLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.productImage {
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.imageEmoji {
  font-size: 8rem;
}

.productCategory {
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.productName {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.75rem;
}

.productPrice {
  font-size: 1.75rem;
  color: #4f46e5;
  font-weight: 700;
  margin-bottom: 1rem;
}

.productDesc {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.addToCartSection {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.quantityControl {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  overflow: hidden;
}

.quantityControl button {
  background: #f3f4f6;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  cursor: pointer;
}

.quantityControl button:hover {
  background: #e5e7eb;
}

.quantityControl span {
  padding: 0.5rem 1rem;
  font-weight: 600;
  min-width: 3rem;
  text-align: center;
}

.addBtn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.addBtn:hover {
  background: #4338ca;
}

.notFound {
  text-align: center;
  padding: 4rem 0;
}

.notFound h2 {
  color: #111827;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .productLayout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
