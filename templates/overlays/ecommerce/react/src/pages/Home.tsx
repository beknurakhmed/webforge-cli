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
    <section className="product-section">
      <div className="section-header">
        <h2>All Products</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        {filtered.length === 0 && <p className="no-results">No products found.</p>}
      </div>
    </section>
  );
}
