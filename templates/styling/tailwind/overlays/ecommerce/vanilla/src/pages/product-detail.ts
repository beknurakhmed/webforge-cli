import { products, cart } from '../main';

export function renderProductDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const product = products.find(p => p.id === id);

  if (!product) {
    return `
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div class="text-2xl font-bold text-indigo-600">🛍️ {{projectName}}</div>
        <nav class="flex gap-6">
          <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
          <a href="#/cart" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">🛒 Cart (${cart.length})</a>
        </nav>
      </header>
      <main class="min-h-[calc(100vh-200px)]">
        <div class="text-center py-16 px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p class="text-gray-500 mb-8">The product you're looking for doesn't exist.</p>
          <a href="#/" class="inline-block px-6 py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Back to Shop</a>
        </div>
      </main>
    `;
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return `
    <header class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div class="text-2xl font-bold text-indigo-600">🛍️ {{projectName}}</div>
      <nav class="flex gap-6">
        <a href="#/" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</a>
        <a href="#/cart" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="min-h-[calc(100vh-200px)]">
      <div class="px-8 py-4 text-sm text-gray-500">
        <a href="#/" class="text-indigo-600 hover:underline">Home</a> / <a href="#/" class="text-indigo-600 hover:underline">${product.category}</a> / <span>${product.name}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
        <div class="text-[8rem] text-center py-16 bg-white rounded-lg border border-gray-200">${product.image}</div>
        <div>
          <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2 font-semibold">${product.category}</span>
          <h1 class="text-3xl font-bold text-gray-900 my-2">${product.name}</h1>
          <p class="text-3xl font-bold text-indigo-600 mb-4">$${product.price.toFixed(2)}</p>
          <p class="text-gray-500 mb-6 leading-relaxed">${product.description}</p>
          <div class="flex gap-6 mb-8 text-gray-500 text-sm">
            <span>✅ In Stock</span>
            <span>🚚 Free Shipping</span>
            <span>↩️ 30-Day Returns</span>
          </div>
          <button class="w-full px-8 py-3 rounded-lg font-semibold text-base bg-indigo-600 text-white border-none hover:bg-indigo-700 transition-colors cursor-pointer" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </div>

      ${related.length > 0 ? `
        <section class="p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${related.map(p => `
              <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div class="text-5xl text-center py-6 bg-gray-50 rounded-lg mb-4">${p.image}</div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">${p.name}</h3>
                <p class="text-xl font-bold text-indigo-600 mb-4">$${p.price.toFixed(2)}</p>
                <a href="#/product/${p.id}" class="inline-block w-full text-center px-4 py-2 rounded-lg font-semibold text-sm bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors">View Details</a>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
