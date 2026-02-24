'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { useCart, Product } from '../../components/CartProvider';

const ProductDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #4f46e5;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailGrid = styled.div`
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
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    font-size: 5rem;
  }
`;

const DetailInfo = styled.div`
  h1 {
    font-size: 2rem;
    color: #111827;
    margin: 0.5rem 0;
  }
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const RatingText = styled.span`
  color: #6b7280;
`;

const DetailPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin: 1rem 0;
`;

const ProductDescription = styled.p`
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const AddToCartButton = styled.button`
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  font-size: 1.05rem;
  background: #4f46e5;
  color: white;

  &:hover {
    background: #4338ca;
  }
`;

const ProductFeatures = styled.div`
  margin-top: 2rem;

  h3 {
    font-size: 1.1rem;
    color: #111827;
    margin-bottom: 0.75rem;
  }

  li {
    list-style: none;
    padding: 0.3rem 0;
    color: #374151;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 1.5rem;

  h2 {
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
  }
`;

const NotFoundButton = styled(Link)`
  display: inline-block;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  background: #4f46e5;
  color: white;
  text-decoration: none;

  &:hover {
    background: #4338ca;
  }
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

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <NotFound>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <NotFoundButton href="/">Back to Shop</NotFoundButton>
      </NotFound>
    );
  }

  return (
    <ProductDetailWrapper>
      <BackLink href="/">← Back to Shop</BackLink>
      <DetailGrid>
        <DetailImage>{product.image}</DetailImage>
        <DetailInfo>
          <ProductCategory>{product.category}</ProductCategory>
          <h1>{product.name}</h1>
          <ProductRating>
            {'⭐'.repeat(Math.floor(product.rating))}
            <RatingText>{product.rating} / 5.0</RatingText>
          </ProductRating>
          <DetailPrice>${product.price.toFixed(2)}</DetailPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <AddToCartButton onClick={() => addToCart(product)}>
            🛒 Add to Cart
          </AddToCartButton>
          <ProductFeatures>
            <h3>Features</h3>
            <ul>
              <li>Free shipping on orders over $50</li>
              <li>30-day return policy</li>
              <li>1-year warranty</li>
              <li>Secure checkout</li>
            </ul>
          </ProductFeatures>
        </DetailInfo>
      </DetailGrid>
    </ProductDetailWrapper>
  );
}
