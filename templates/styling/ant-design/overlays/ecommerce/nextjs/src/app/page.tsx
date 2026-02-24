'use client';

import { useState } from 'react';
import { Input, Typography, Button, Row, Col, Space } from 'antd';
import { ProductCard } from './components/ProductCard';
import { Product } from './components/CartProvider';

const { Title, Text } = Typography;
const { Search } = Input;

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.7, description: 'Feature-packed smartwatch with health monitoring, GPS tracking, and a vibrant AMOLED display.' },
  { id: 3, name: 'Running Shoes', price: 129.99, image: '👟', category: 'Sports', rating: 4.3, description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.' },
  { id: 4, name: 'Backpack', price: 59.99, image: '🎒', category: 'Accessories', rating: 4.6, description: 'Durable travel backpack with laptop compartment and ergonomic design.' },
  { id: 5, name: 'Coffee Maker', price: 89.99, image: '☕', category: 'Home', rating: 4.4, description: 'Programmable coffee maker with thermal carafe and auto-shutoff feature.' },
  { id: 6, name: 'Desk Lamp', price: 45.99, image: '💡', category: 'Home', rating: 4.2, description: 'Adjustable LED desk lamp with multiple brightness levels and USB charging port.' },
  { id: 7, name: 'Yoga Mat', price: 34.99, image: '🧘', category: 'Sports', rating: 4.8, description: 'Non-slip yoga mat with alignment marks and carrying strap included.' },
  { id: 8, name: 'Sunglasses', price: 149.99, image: '🕶️', category: 'Accessories', rating: 4.1, description: 'Polarized sunglasses with UV400 protection and lightweight titanium frame.' },
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
      <div style={{ textAlign: 'center', padding: '48px 0 32px' }}>
        <Title level={2}>Welcome to {'{{projectName}}'}</Title>
        <Text type="secondary" style={{ fontSize: 16, display: 'block', marginBottom: 24 }}>Discover amazing products at unbeatable prices</Text>
        <Search placeholder="Search products..." allowClear style={{ maxWidth: 400 }} value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <Space wrap style={{ marginBottom: 24, justifyContent: 'center', display: 'flex' }}>
        {categories.map((cat) => (
          <Button key={cat} type={activeCategory === cat ? 'primary' : 'default'} onClick={() => setActiveCategory(cat)}>{cat}</Button>
        ))}
      </Space>
      <Row gutter={[24, 24]}>
        {filtered.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 64 }}>
          <Text type="secondary" style={{ fontSize: 16 }}>No products found. Try a different search.</Text>
        </div>
      )}
    </div>
  );
}
