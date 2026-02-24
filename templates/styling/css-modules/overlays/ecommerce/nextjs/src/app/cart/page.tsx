'use client';

import Link from 'next/link';
import { useCart } from '../components/CartProvider';
import styles from './page.module.css';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className={styles.cartEmpty}>
        <div className={styles.cartEmptyIcon}>🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you have not added any items to your cart yet.</p>
        <Link href="/" className={styles.btnPrimary}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <h1>Shopping Cart</h1>
        <button className={styles.btnOutline} onClick={clearCart}>Clear Cart</button>
      </div>

      <div className={styles.cartLayout}>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartItemImage}>{item.image}</div>
              <div className={styles.cartItemInfo}>
                <h3>{item.name}</h3>
                <p className={styles.cartItemCategory}>{item.category}</p>
                <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.cartItemActions}>
                <div className={styles.quantityControl}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className={styles.cartItemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
                <button className={styles.btnRemove} onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>{totalPrice > 50 ? 'Free' : '$9.99'}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <div className={styles.summaryRowTotal}>
            <span>Total</span>
            <span>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <button className={styles.btnPrimary}>Proceed to Checkout</button>
          <Link href="/" className={styles.continueLink}>Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
