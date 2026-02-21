import { products, cart } from '../main';

export function renderHome(): string {
  return `
    <header class="store-header">
      <div class="store-logo">🛍️ {{projectName}}</div>
      <nav class="store-nav">
        <a href="#/" class="active">Home</a>
        <a href="#/cart">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="store-main">
      <section class="hero">
        <h1>Welcome to {{projectName}}</h1>
        <p>Discover amazing products at great prices. Shop the latest trends today.</p>
        <a href="#/" class="btn btn-primary">Shop Now</a>
      </section>

      <section class="categories">
        <h2>Shop by Category</h2>
        <div class="category-grid">
          <div class="category-card">🔌 Electronics</div>
          <div class="category-card">👜 Accessories</div>
          <div class="category-card">🏠 Home</div>
          <div class="category-card">🏃 Fitness</div>
        </div>
      </section>

      <section class="featured">
        <h2>Featured Products</h2>
        <div class="product-grid">
          ${products.map(p => `
            <div class="product-card">
              <div class="product-image">${p.image}</div>
              <span class="product-category">${p.category}</span>
              <h3>${p.name}</h3>
              <p class="price">$${p.price.toFixed(2)}</p>
              <div class="product-actions">
                <a href="#/product/${p.id}" class="btn btn-secondary">View Details</a>
                <button class="btn btn-primary" data-add-to-cart="${p.id}">Add to Cart</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>

    <footer class="store-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>{{projectName}}</h4>
          <p>Your one-stop shop for quality products.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/cart">Cart</a>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>📧 support@store.com</p>
          <p>📞 (555) 123-4567</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
