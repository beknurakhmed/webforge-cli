import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products, Product } from '../data/products';

interface HomeProps {
  addToCart: (product: Product) => void;
}

export function Home({ addToCart }: HomeProps) {
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-900 m-0">All Products</h2>
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-56 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 text-center col-span-full py-8">No products found.</p>
        )}
      </div>
    </section>
  );
}
