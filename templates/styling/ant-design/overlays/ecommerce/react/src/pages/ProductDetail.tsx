import { useParams, Link } from 'react-router-dom';
import { Button, Typography, Tag, Card, Row, Col, Divider } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { products, Product } from '../data/products';

const { Title, Text, Paragraph } = Typography;

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: 64 }}>
        <Title level={3}>Product Not Found</Title>
        <Link to="/"><Button type="primary">Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, color: '#4f46e5' }}>
        <ArrowLeftOutlined /> Back to Shop
      </Link>
      <Row gutter={[48, 32]}>
        <Col xs={24} md={10}>
          <Card style={{ textAlign: 'center', fontSize: 120, padding: '48px 0', background: '#f9fafb' }}>
            {product.image}
          </Card>
        </Col>
        <Col xs={24} md={14}>
          <Tag color="blue" style={{ marginBottom: 12 }}>{product.category}</Tag>
          <Title level={2} style={{ marginBottom: 8 }}>{product.name}</Title>
          <Paragraph type="secondary" style={{ fontSize: 16, lineHeight: 1.6 }}>{product.description}</Paragraph>
          <Divider />
          <Title level={3} style={{ color: '#4f46e5', marginBottom: 24 }}>${product.price.toFixed(2)}</Title>
          <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={() => addToCart(product)} style={{ height: 48, paddingInline: 32 }}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
}
