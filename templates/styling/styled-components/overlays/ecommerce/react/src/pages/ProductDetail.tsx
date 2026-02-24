import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { products, Product } from '../data/products';

const ProductDetailWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DetailImage = styled.div`
  font-size: 8rem;
  text-align: center;
  padding: 3rem;
  background: #f9fafb;
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 5rem;
    padding: 2rem;
  }
`;

const DetailInfo = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0.25rem 0 1rem;
  }
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  color: #4f46e5;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DetailDescription = styled.p`
  color: #374151;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DetailPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  display: block;
  margin-bottom: 1.5rem;
`;

const AddToCartButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background: #4338ca;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 0;

  h2 {
    color: #374151;
    margin-bottom: 1rem;
  }
`;

interface ProductDetailProps {
  addToCart: (product: Product) => void;
}

export function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <NotFound>
        <h2>Product Not Found</h2>
        <BackLink to="/">Back to Shop</BackLink>
      </NotFound>
    );
  }

  return (
    <ProductDetailWrapper>
      <BackLink to="/">← Back to Shop</BackLink>
      <DetailContent>
        <DetailImage>{product.image}</DetailImage>
        <DetailInfo>
          <ProductCategory>{product.category}</ProductCategory>
          <h1>{product.name}</h1>
          <DetailDescription>{product.description}</DetailDescription>
          <DetailPrice>${product.price.toFixed(2)}</DetailPrice>
          <AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </AddToCartButton>
        </DetailInfo>
      </DetailContent>
    </ProductDetailWrapper>
  );
}
