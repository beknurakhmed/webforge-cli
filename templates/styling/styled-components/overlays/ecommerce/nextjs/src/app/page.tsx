'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { ProductCard } from './components/ProductCard';
import { Product } from './components/CartProvider';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  text-align: center;
  padding: 4rem 1.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.15rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;

const SearchBar = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  padding: 0.5rem 1rem;
`;

const SearchIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: #374151;
  background: transparent;
`;

const ProductsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Categories = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.25rem;
  border: 2px solid ${props => props.$active ? '#4f46e5' : '#e5e7eb'};
  border-radius: 50px;
  background: ${props => props.$active ? '#4f46e5' : 'white'};
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.$active ? 'white' : '#374151'};
  transition: all 0.2s;

  &:hover {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  font-size: 1.1rem;
`;

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
      <HeroSection>
        <h1>Welcome to {'{{projectName}}'}</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <SearchBar>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
      </HeroSection>

      <ProductsSection>
        <Categories>
          {categories.map((cat) => (
            <CategoryButton
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </CategoryButton>
          ))}
        </Categories>

        <ProductGrid>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>

        {filtered.length === 0 && (
          <NoResults>
            <p>No products found. Try a different search.</p>
          </NoResults>
        )}
      </ProductsSection>
    </div>
  );
}
