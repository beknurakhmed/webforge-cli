import { useState } from 'react';
import { Input, Typography, Row, Col } from 'antd';
import { ProductCard } from '../components/ProductCard';
import { products, Product } from '../data/products';

const { Title } = Typography;
const { Search } = Input;

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <Title level={2} style={{ margin: 0 }}>All Products</Title>
        <Search
          placeholder="Search products..."
          allowClear
          style={{ maxWidth: 300 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Row gutter={[24, 24]}>
        {filtered.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </Col>
        ))}
      </Row>
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 64 }}>
          <Typography.Text type="secondary" style={{ fontSize: 16 }}>No products found.</Typography.Text>
        </div>
      )}
    </section>
  );
}
