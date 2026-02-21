import { cart, getCartTotal } from '../main';

export function renderCart(): string {
  const total = getCartTotal();

  return `
    <header class="store-header">
      <div class="store-logo">🛍️ {{projectName}}</div>
      <nav class="store-nav">
        <a href="#/">Home</a>
        <a href="#/cart" class="active">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="store-main">
      <h1>Shopping Cart</h1>

      ${cart.length === 0 ? `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products yet.</p>
          <a href="#/" class="btn btn-primary">Continue Shopping</a>
        </div>
      ` : `
        <div class="cart-layout">
          <div class="cart-items">
            ${cart.map(item => `
              <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                  <h3><a href="#/product/${item.id}">${item.name}</a></h3>
                  <p class="cart-item-category">${item.category}</p>
                </div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">Qty: ${item.quantity}</div>
                <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="btn btn-danger btn-small" data-remove-from-cart="${item.id}">Remove</button>
              </div>
            `).join('')}
          </div>

          <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-row">
              <span>Subtotal (${cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
              <span>$${total.toFixed(2)}</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span>
              <span>${total > 100 ? 'Free' : '$9.99'}</span>
            </div>
            <div class="summary-row">
              <span>Tax</span>
              <span>$${(total * 0.08).toFixed(2)}</span>
            </div>
            <div class="summary-row summary-total">
              <span>Total</span>
              <span>$${(total + (total > 100 ? 0 : 9.99) + total * 0.08).toFixed(2)}</span>
            </div>
            <button class="btn btn-primary btn-large">Proceed to Checkout</button>
          </div>
        </div>
      `}
    </main>

    <footer class="store-footer">
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
