import { cart, getCartTotal } from '../main';

export function renderCart(): string {
  const total = getCartTotal();

  return `
    <header class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div class="text-2xl font-bold text-indigo-600">🛍️ {{projectName}}</div>
      <nav class="flex gap-6">
        <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
        <a href="#/cart" class="text-indigo-600 font-medium transition-colors">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="min-h-[calc(100vh-200px)]">
      <h1 class="text-2xl font-bold text-gray-900 px-8 pt-8">Shopping Cart</h1>

      ${cart.length === 0 ? `
        <div class="text-center py-16 px-8">
          <div class="text-6xl mb-4">🛒</div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p class="text-gray-500 mb-8">Looks like you haven't added any products yet.</p>
          <a href="#/" class="inline-block px-6 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Continue Shopping</a>
        </div>
      ` : `
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 p-8">
          <div class="flex flex-col gap-4">
            ${cart.map(item => `
              <div class="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-6 flex-wrap">
                <div class="text-4xl w-16 text-center">${item.image}</div>
                <div class="flex-1">
                  <h3 class="text-base font-semibold text-gray-900"><a href="#/product/${item.id}" class="hover:text-indigo-600 transition-colors">${item.name}</a></h3>
                  <p class="text-sm text-gray-500">${item.category}</p>
                </div>
                <div class="font-semibold text-gray-900">$${item.price.toFixed(2)}</div>
                <div class="text-gray-500 text-sm">Qty: ${item.quantity}</div>
                <div class="font-semibold text-gray-900">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="px-3 py-1 rounded-lg font-semibold text-xs bg-red-500 text-white border-none hover:bg-red-600 transition-colors cursor-pointer" data-remove-from-cart="${item.id}">Remove</button>
              </div>
            `).join('')}
          </div>

          <div class="bg-white border border-gray-200 rounded-lg p-6 h-fit sticky top-20">
            <h2 class="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">Order Summary</h2>
            <div class="flex justify-between py-2 text-sm">
              <span>Subtotal (${cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
              <span>$${total.toFixed(2)}</span>
            </div>
            <div class="flex justify-between py-2 text-sm">
              <span>Shipping</span>
              <span>${total > 100 ? 'Free' : '$9.99'}</span>
            </div>
            <div class="flex justify-between py-2 text-sm">
              <span>Tax</span>
              <span>$${(total * 0.08).toFixed(2)}</span>
            </div>
            <div class="flex justify-between py-4 mt-2 font-bold text-lg text-gray-900 border-t-2 border-gray-200 mb-6">
              <span>Total</span>
              <span>$${(total + (total > 100 ? 0 : 9.99) + total * 0.08).toFixed(2)}</span>
            </div>
            <button class="w-full px-8 py-3 rounded-lg font-semibold text-base bg-indigo-600 text-white border-none hover:bg-indigo-700 transition-colors cursor-pointer">Proceed to Checkout</button>
          </div>
        </div>
      `}
    </main>

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
