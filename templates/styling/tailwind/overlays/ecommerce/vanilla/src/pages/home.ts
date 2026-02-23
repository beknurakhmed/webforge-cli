import { products, cart } from '../main';

export function renderHome(): string {
  return `
    <header class="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div class="text-2xl font-bold text-indigo-600">🛍️ {{projectName}}</div>
      <nav class="flex gap-6">
        <a href="#/" class="text-indigo-600 font-medium transition-colors">Home</a>
        <a href="#/cart" class="text-gray-700 font-medium hover:text-indigo-600 transition-colors">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="min-h-[calc(100vh-200px)]">
      <section class="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-16 text-center rounded-lg m-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to {{projectName}}</h1>
        <p class="text-lg mb-8 opacity-90">Discover amazing products at great prices. Shop the latest trends today.</p>
        <a href="#/" class="inline-block bg-white text-indigo-600 font-semibold text-base px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Shop Now</a>
      </section>

      <section class="p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white p-8 rounded-lg text-center text-lg font-semibold border border-gray-200 cursor-pointer hover:border-indigo-600 hover:shadow-md transition-all">🔌 Electronics</div>
          <div class="bg-white p-8 rounded-lg text-center text-lg font-semibold border border-gray-200 cursor-pointer hover:border-indigo-600 hover:shadow-md transition-all">👜 Accessories</div>
          <div class="bg-white p-8 rounded-lg text-center text-lg font-semibold border border-gray-200 cursor-pointer hover:border-indigo-600 hover:shadow-md transition-all">🏠 Home</div>
          <div class="bg-white p-8 rounded-lg text-center text-lg font-semibold border border-gray-200 cursor-pointer hover:border-indigo-600 hover:shadow-md transition-all">🏃 Fitness</div>
        </div>
      </section>

      <section class="p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${products.map(p => `
            <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div class="text-5xl text-center py-6 bg-gray-50 rounded-lg mb-4">${p.image}</div>
              <span class="inline-block text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2 font-semibold">${p.category}</span>
              <h3 class="text-base font-semibold text-gray-900 mb-2">${p.name}</h3>
              <p class="text-xl font-bold text-indigo-600 mb-4">$${p.price.toFixed(2)}</p>
              <div class="flex gap-2">
                <a href="#/product/${p.id}" class="flex-1 text-center inline-block px-4 py-2 rounded-lg font-semibold text-sm bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors">View Details</a>
                <button class="flex-1 text-center px-4 py-2 rounded-lg font-semibold text-sm bg-indigo-600 text-white border-none hover:bg-indigo-700 transition-colors cursor-pointer" data-add-to-cart="${p.id}">Add to Cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 text-gray-400 mt-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
        <div>
          <h4 class="text-white font-semibold mb-4">{{projectName}}</h4>
          <p>Your one-stop shop for quality products.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <a href="#/" class="block py-1 text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#/cart" class="block py-1 text-gray-400 hover:text-white transition-colors">Cart</a>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <p>📧 support@store.com</p>
          <p>📞 (555) 123-4567</p>
        </div>
      </div>
      <div class="text-center py-6 px-8 border-t border-gray-800 text-sm">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
