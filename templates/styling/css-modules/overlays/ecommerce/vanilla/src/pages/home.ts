import { products, cart, styles } from '../main';

export function renderHome(): string {
  return `
    <header class="${styles.storeHeader}">
      <div class="${styles.storeLogo}">🛍️ {{projectName}}</div>
      <nav class="${styles.storeNav}">
        <a href="#/" class="active">Home</a>
        <a href="#/cart">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="${styles.storeMain}">
      <section class="${styles.hero}">
        <h1>Welcome to {{projectName}}</h1>
        <p>Discover amazing products at great prices. Shop the latest trends today.</p>
        <a href="#/" class="${styles.btn} ${styles.btnPrimary}">Shop Now</a>
      </section>

      <section class="${styles.categories}">
        <h2>Shop by Category</h2>
        <div class="${styles.categoryGrid}">
          <div class="${styles.categoryCard}">🔌 Electronics</div>
          <div class="${styles.categoryCard}">👜 Accessories</div>
          <div class="${styles.categoryCard}">🏠 Home</div>
          <div class="${styles.categoryCard}">🏃 Fitness</div>
        </div>
      </section>

      <section class="${styles.featured}">
        <h2>Featured Products</h2>
        <div class="${styles.productGrid}">
          ${products.map(p => `
            <div class="${styles.productCard}">
              <div class="${styles.productImage}">${p.image}</div>
              <span class="${styles.productCategory}">${p.category}</span>
              <h3>${p.name}</h3>
              <p class="${styles.price}">$${p.price.toFixed(2)}</p>
              <div class="${styles.productActions}">
                <a href="#/product/${p.id}" class="${styles.btn} ${styles.btnSecondary}">View Details</a>
                <button class="${styles.btn} ${styles.btnPrimary}" data-add-to-cart="${p.id}">Add to Cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>

    <footer class="${styles.storeFooter}">
      <div class="${styles.footerContent}">
        <div class="${styles.footerSection}">
          <h4>{{projectName}}</h4>
          <p>Your one-stop shop for quality products.</p>
        </div>
        <div class="${styles.footerSection}">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/cart">Cart</a>
        </div>
        <div class="${styles.footerSection}">
          <h4>Contact</h4>
          <p>📧 support@store.com</p>
          <p>📞 (555) 123-4567</p>
        </div>
      </div>
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
