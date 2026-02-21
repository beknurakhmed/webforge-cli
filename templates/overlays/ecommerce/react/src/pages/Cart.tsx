import { Link } from 'react-router-dom';
import { CartItem } from '../data/products';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <div className="cart-empty">
          <p>🛒 Your cart is empty</p>
          <Link to="/" className="continue-link">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart ({cart.length} items)</h2>
      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-row">
              <span className="cart-row-image">{item.image}</span>
              <div className="cart-row-info">
                <Link to={`/product/${item.id}`}><h4>{item.name}</h4></Link>
                <p>Qty: {item.quantity}</p>
              </div>
              <span className="cart-row-price">${(item.price * item.quantity).toFixed(2)}</span>
              <button className="cart-row-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>Free</span></div>
          <div className="summary-row total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
