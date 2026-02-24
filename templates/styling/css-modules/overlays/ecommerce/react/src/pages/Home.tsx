import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products, Product } from '../data/products';
import styles from './Home.module.css';

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
      <div className={styles.sectionHeader}>
        <h2>All Products</h2>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.productGrid}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        {filtered.length === 0 && <p className={styles.noResults}>No products found.</p>}
      </div>
    </section>
  );
}
