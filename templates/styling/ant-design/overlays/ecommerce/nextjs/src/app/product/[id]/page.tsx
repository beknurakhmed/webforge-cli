'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button, Typography, Tag, Card, Row, Col, Divider, Rate } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useCart, Product } from '../../components/CartProvider';

const { Title, Text, Paragraph } = Typography;

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

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <Title level={3}>Product Not Found</Title>
        <Link href="/"><Button type="primary">Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Shop
      </Link>
      <Row gutter={[48, 32]}>
        <Col xs={24} md={10}>
          <Card style={{ textAlign: 'center', fontSize: 120, padding: '48px 0', background: '#f9fafb' }}>{product.image}</Card>
        </Col>
        <Col xs={24} md={14}>
          <Tag color="blue" style={{ marginBottom: 12 }}>{product.category}</Tag>
          <Title level={2} style={{ marginBottom: 8 }}>{product.name}</Title>
          <div style={{ marginBottom: 16 }}>
            <Rate disabled defaultValue={product.rating} allowHalf />
            <Text type="secondary" style={{ marginLeft: 8 }}>{product.rating} / 5.0</Text>
          </div>
          <Title level={3} style={{ color: '#4f46e5' }}>${product.price.toFixed(2)}</Title>
          <Paragraph type="secondary" style={{ fontSize: 16 }}>{product.description}</Paragraph>
          <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={() => addToCart(product)} style={{ height: 48, paddingInline: 32, marginTop: 16 }}>
            Add to Cart
          </Button>
          <Divider />
          <Title level={5}>Features</Title>
          <ul style={{ color: '#666', lineHeight: 2 }}>
            <li>Free shipping on orders over $50</li>
            <li>30-day return policy</li>
            <li>1-year warranty</li>
            <li>Secure checkout</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
