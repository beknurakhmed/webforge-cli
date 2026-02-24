import { Link } from 'react-router-dom';
import { Card, Button, Typography, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../data/products';

const { Title, Text, Paragraph } = Typography;

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card
      hoverable
      cover={
        <Link to={`/product/${product.id}`} style={{ textAlign: 'center', fontSize: 64, padding: '32px 0', background: '#f9fafb', display: 'block' }}>
          {product.image}
        </Link>
      }
      actions={[
        <div key="actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
          <Text strong style={{ fontSize: 18, color: '#4f46e5' }}>${product.price.toFixed(2)}</Text>
          <Button type="primary" icon={<ShoppingCartOutlined />} onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            Add to Cart
          </Button>
        </div>
      ]}
    >
      <Tag color="blue" style={{ marginBottom: 8 }}>{product.category}</Tag>
      <Title level={5} style={{ marginBottom: 4 }}>{product.name}</Title>
      <Paragraph type="secondary" ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
        {product.description}
      </Paragraph>
    </Card>
  );
}
