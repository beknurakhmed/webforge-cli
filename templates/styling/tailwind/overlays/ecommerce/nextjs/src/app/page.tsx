'use client';

import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { Product } from './components/CartProvider';

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Crystal-clear sound quality for music lovers.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.7, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and a vibrant AMOLED display.' },
  { id: 3, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', rating: 4.3, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', rating: 4.6, description: 'Durable travel backpack with laptop compartment, water-resistant fabric, and ergonomic design.' },
  { id: 5, name: 'Coffee Maker', price: 89.99, image: '☕', category: 'Home', rating: 4.4, description: 'Programmable coffee maker with thermal carafe, brew-strength control, and auto-shutoff feature.' },
  { id: 6, name: 'Desk Lamp', price: 45.99, image: '💡', category: 'Home', rating: 4.2, description: 'Adjustable LED desk lamp with multiple brightness levels, color temperatures, and USB charging port.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', rating: 4.8, description: 'Non-slip yoga mat with alignment marks, eco-friendly material, and carrying strap included.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', rating: 4.1, description: 'Polarized sunglasses with UV400 protection, lightweight titanium frame, and scratch-resistant lenses.' },
];

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center py-16 px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Welcome to {'{{projectName}}'}</h1>
        <p className="text-lg opacity-90 mb-8">Discover amazing products at unbeatable prices</p>
        <div className="max-w-lg mx-auto flex items-center bg-white rounded-full px-4 py-2">
          <span className="text-lg mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none w-full text-base text-gray-700 bg-transparent"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 border-2 rounded-full font-medium transition-all cursor-pointer ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-lg">
            <p>😕 No products found. Try a different search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
