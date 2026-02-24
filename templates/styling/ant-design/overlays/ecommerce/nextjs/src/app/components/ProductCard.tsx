'use client';

import Link from 'next/link';
import { Card, Tag, Typography, Rate } from 'antd';
import { Product } from './CartProvider';

const { Title, Text } = Typography;

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card hoverable cover={<div style={{ textAlign: 'center', fontSize: 64, padding: '32px 0', background: '#f9fafb' }}>{product.image}</div>}>
        <Tag color="blue" style={{ marginBottom: 8 }}>{product.category}</Tag>
        <Title level={5} style={{ marginBottom: 4 }}>{product.name}</Title>
        <Rate disabled defaultValue={product.rating} allowHalf style={{ fontSize: 14 }} />
        <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>{product.rating}</Text>
        <div style={{ marginTop: 8 }}>
          <Text strong style={{ fontSize: 18, color: '#4f46e5' }}>${product.price.toFixed(2)}</Text>
        </div>
      </Card>
    </Link>
  );
}
