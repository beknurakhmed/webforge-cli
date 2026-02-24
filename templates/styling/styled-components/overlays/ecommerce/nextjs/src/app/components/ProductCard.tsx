'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { Product } from './CartProvider';

const Card = styled(Link)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: #f3f4f6;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProductName = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: #111827;
  margin: 0.25rem 0;
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

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4f46e5;
`;

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card href={`/product/${product.id}`}>
      <ProductImage>{product.image}</ProductImage>
      <ProductInfo>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductRating>
          {'⭐'.repeat(Math.floor(product.rating))}
          <RatingText>{product.rating}</RatingText>
        </ProductRating>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      </ProductInfo>
    </Card>
  );
}
