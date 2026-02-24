import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from '../data/products';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
  background: white;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProductImage = styled.div`
  font-size: 4rem;
  text-align: center;
  padding: 2rem;
  background: #f9fafb;
`;

const ProductInfo = styled.div`
  padding: 1rem 1.25rem 0.5rem;

  h3 {
    font-size: 1.1rem;
    margin: 0.25rem 0;
    color: #111827;
  }

  p {
    color: #6b7280;
    font-size: 0.85rem;
    margin-bottom: 0;
  }
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  margin-top: auto;
`;

const ProductPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

const AddToCartButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.85rem;

  &:hover {
    background: #4338ca;
  }
`;

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card>
      <ProductLink to={`/product/${product.id}`}>
        <ProductImage>{product.image}</ProductImage>
        <ProductInfo>
          <ProductCategory>{product.category}</ProductCategory>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </ProductInfo>
      </ProductLink>
      <ProductActions>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <AddToCartButton onClick={() => onAddToCart(product)}>
          Add to Cart
        </AddToCartButton>
      </ProductActions>
    </Card>
  );
}
