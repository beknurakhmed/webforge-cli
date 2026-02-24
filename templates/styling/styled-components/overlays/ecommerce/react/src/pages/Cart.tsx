import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartItem } from '../data/products';

const CartPage = styled.div`
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
`;

const CartEmpty = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const ContinueLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const CartRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #e5e7eb;
`;

const CartRowImage = styled.span`
  font-size: 2.5rem;
`;

const CartRowInfo = styled.div`
  flex: 1;

  a {
    text-decoration: none;
    color: inherit;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    color: #111827;
  }

  p {
    color: #6b7280;
    font-size: 0.85rem;
    margin: 0.25rem 0 0;
  }
`;

const CartRowPrice = styled.span`
  font-weight: 700;
  color: #111827;
  font-size: 1rem;
  min-width: 70px;
  text-align: right;
`;

const CartRowRemove = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const CartSummary = styled.div`
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  height: fit-content;

  h3 {
    font-size: 1.1rem;
    color: #111827;
    margin: 0 0 1rem;
  }
`;

const SummaryRow = styled.div<{ $isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: #374151;
  font-size: ${props => props.$isTotal ? '1.1rem' : '0.95rem'};
  border-top: ${props => props.$isTotal ? '1px solid #e5e7eb' : 'none'};
  margin-top: ${props => props.$isTotal ? '0.5rem' : '0'};
  padding-top: ${props => props.$isTotal ? '1rem' : '0.5rem'};
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #4338ca;
  }
`;

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <CartPage>
        <h2>Shopping Cart</h2>
        <CartEmpty>
          <p>🛒 Your cart is empty</p>
          <ContinueLink to="/">Continue Shopping</ContinueLink>
        </CartEmpty>
      </CartPage>
    );
  }

  return (
    <CartPage>
      <h2>Shopping Cart ({cart.length} items)</h2>
      <CartLayout>
        <CartItemsList>
          {cart.map((item) => (
            <CartRow key={item.id}>
              <CartRowImage>{item.image}</CartRowImage>
              <CartRowInfo>
                <Link to={`/product/${item.id}`}><h4>{item.name}</h4></Link>
                <p>Qty: {item.quantity}</p>
              </CartRowInfo>
              <CartRowPrice>${(item.price * item.quantity).toFixed(2)}</CartRowPrice>
              <CartRowRemove onClick={() => removeFromCart(item.id)}>Remove</CartRowRemove>
            </CartRow>
          ))}
        </CartItemsList>
        <CartSummary>
          <h3>Order Summary</h3>
          <SummaryRow><span>Subtotal</span><span>${total.toFixed(2)}</span></SummaryRow>
          <SummaryRow><span>Shipping</span><span>Free</span></SummaryRow>
          <SummaryRow $isTotal><span>Total</span><strong>${total.toFixed(2)}</strong></SummaryRow>
          <CheckoutButton>Checkout</CheckoutButton>
        </CartSummary>
      </CartLayout>
    </CartPage>
  );
}
