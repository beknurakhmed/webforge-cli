import { cart, getCartTotal, styles } from '../main';

export function renderCart(): string {
  const total = getCartTotal();

  return `
    <header class="${styles.storeHeader}">
      <div class="${styles.storeLogo}">🛍️ {{projectName}}</div>
      <nav class="${styles.storeNav}">
        <a href="#/">Home</a>
        <a href="#/cart" class="active">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="${styles.storeMain}">
      <h1>Shopping Cart</h1>

      ${cart.length === 0 ? `
        <div class="${styles.emptyCart}">
          <div class="${styles.emptyCartIcon}">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products yet.</p>
          <a href="#/" class="${styles.btn} ${styles.btnPrimary}">Continue Shopping</a>
        </div>
      ` : `
        <div class="${styles.cartLayout}">
          <div class="${styles.cartItems}">
            ${cart.map(item => `
              <div class="${styles.cartItem}">
                <div class="${styles.cartItemImage}">${item.image}</div>
                <div class="${styles.cartItemInfo}">
                  <h3><a href="#/product/${item.id}">${item.name}</a></h3>
                  <p class="${styles.cartItemCategory}">${item.category}</p>
                </div>
                <div class="${styles.cartItemPrice}">$${item.price.toFixed(2)}</div>
                <div class="${styles.cartItemQuantity}">Qty: ${item.quantity}</div>
                <div class="${styles.cartItemTotal}">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="${styles.btn} ${styles.btnDanger} ${styles.btnSmall}" data-remove-from-cart="${item.id}">Remove</button>
              </div>
            `).join('')}
          </div>

          <div class="${styles.cartSummary}">
            <h2>Order Summary</h2>
            <div class="${styles.summaryRow}">
              <span>Subtotal (${cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
              <span>$${total.toFixed(2)}</span>
            </div>
            <div class="${styles.summaryRow}">
              <span>Shipping</span>
              <span>${total > 100 ? 'Free' : '$9.99'}</span>
            </div>
            <div class="${styles.summaryRow}">
              <span>Tax</span>
              <span>$${(total * 0.08).toFixed(2)}</span>
            </div>
            <div class="${styles.summaryRow} ${styles.summaryTotal}">
              <span>Total</span>
              <span>$${(total + (total > 100 ? 0 : 9.99) + total * 0.08).toFixed(2)}</span>
            </div>
            <button class="${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}">Proceed to Checkout</button>
          </div>
        </div>
      `}
    </main>

    <footer class="${styles.storeFooter}">
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
