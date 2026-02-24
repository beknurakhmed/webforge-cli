'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from '../components/CartProvider';

const CartEmpty = styled.div`
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

const CartEmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const CartPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    color: #111827;
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CartItemImage = styled.div`
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 8px;
`;

const CartItemInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
    color: #111827;
  }
`;

const CartItemCategory = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
`;

const CartItemPrice = styled.p`
  font-weight: 600;
  color: #4f46e5;
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;

  button {
    width: 32px;
    height: 32px;
    border: none;
    background: #f9fafb;
    cursor: pointer;
    font-size: 1rem;
  }

  span {
    width: 36px;
    text-align: center;
    font-weight: 600;
  }
`;

const CartItemTotal = styled.p`
  font-weight: 700;
  color: #111827;
  min-width: 70px;
  text-align: right;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const CartSummary = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 80px;

  h2 {
    font-size: 1.25rem;
    color: #111827;
    margin-bottom: 1rem;
  }
`;

const SummaryRow = styled.div<{ $isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #374151;
  border-top: ${props => props.$isTotal ? '2px solid #e5e7eb' : 'none'};
  margin-top: ${props => props.$isTotal ? '0.5rem' : '0'};
  padding-top: ${props => props.$isTotal ? '1rem' : '0.5rem'};
  font-size: ${props => props.$isTotal ? '1.15rem' : '1rem'};
  font-weight: ${props => props.$isTotal ? '700' : '400'};
  color: ${props => props.$isTotal ? '#111827' : '#374151'};
`;

const CheckoutButton = styled.button`
  width: 100%;
  text-align: center;
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
  margin-top: 1rem;

  &:hover {
    background: #4338ca;
  }
`;

const ContinueLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #4f46e5;
  font-weight: 500;
  text-decoration: none;
`;

const ClearButton = styled.button`
  background: transparent;
  color: #374151;
  border: 2px solid #e5e7eb;
  padding: 0.625rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`;

const ShopButton = styled(Link)`
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

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <CartEmpty>
        <CartEmptyIcon>🛒</CartEmptyIcon>
        <h2>Your cart is empty</h2>
        <p>Looks like you have not added any items to your cart yet.</p>
        <ShopButton href="/">Continue Shopping</ShopButton>
      </CartEmpty>
    );
  }

  return (
    <CartPageWrapper>
      <CartHeader>
        <h1>Shopping Cart</h1>
        <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
      </CartHeader>

      <CartLayout>
        <CartItems>
          {items.map((item) => (
            <CartItemCard key={item.id}>
              <CartItemImage>{item.image}</CartItemImage>
              <CartItemInfo>
                <h3>{item.name}</h3>
                <CartItemCategory>{item.category}</CartItemCategory>
                <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
              </CartItemInfo>
              <CartItemActions>
                <QuantityControl>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </QuantityControl>
                <CartItemTotal>${(item.price * item.quantity).toFixed(2)}</CartItemTotal>
                <RemoveButton onClick={() => removeFromCart(item.id)}>🗑️</RemoveButton>
              </CartItemActions>
            </CartItemCard>
          ))}
        </CartItems>

        <CartSummary>
          <h2>Order Summary</h2>
          <SummaryRow><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></SummaryRow>
          <SummaryRow><span>Shipping</span><span>{totalPrice > 50 ? 'Free' : '$9.99'}</span></SummaryRow>
          <SummaryRow><span>Tax</span><span>${(totalPrice * 0.08).toFixed(2)}</span></SummaryRow>
          <SummaryRow $isTotal><span>Total</span><span>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</span></SummaryRow>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
          <ContinueLink href="/">← Continue Shopping</ContinueLink>
        </CartSummary>
      </CartLayout>
    </CartPageWrapper>
  );
}
