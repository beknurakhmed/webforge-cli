import { Link } from 'react-router-dom';
import { CartItem } from '../data/products';
import styles from './Cart.module.css';

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

export function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className={styles.cartPage}>
        <h2>Shopping Cart</h2>
        <div className={styles.cartEmpty}>
          <p>Your cart is empty</p>
          <Link to="/" className={styles.continueLink}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h2>Shopping Cart ({cart.length} items)</h2>
      <div className={styles.cartLayout}>
        <div className={styles.cartItemsList}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartRow}>
              <span className={styles.cartRowImage}>{item.image}</span>
              <div className={styles.cartRowInfo}>
                <Link to={`/product/${item.id}`}><h4>{item.name}</h4></Link>
                <p>Qty: {item.quantity}</p>
              </div>
              <span className={styles.cartRowPrice}>${(item.price * item.quantity).toFixed(2)}</span>
              <button className={styles.cartRowRemove} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className={styles.cartSummary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryRow}><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className={styles.summaryRow}><span>Shipping</span><span>Free</span></div>
          <div className={styles.summaryRowTotal}><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
