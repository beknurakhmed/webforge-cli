'use client';

import Link from 'next/link';
import { useCart } from '../components/CartProvider';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you have not added any items to your cart yet.</p>
        <Link href="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="btn btn-outline" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">{item.image}</div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{totalPrice > 50 ? 'Free' : '$9.99'}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(totalPrice + (totalPrice > 50 ? 0 : 9.99) + totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <button className="btn btn-primary btn-lg btn-full">Proceed to Checkout</button>
          <Link href="/" className="continue-link">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
