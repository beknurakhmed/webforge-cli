import { products, cart } from '../main';

export function renderProductDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const product = products.find(p => p.id === id);

  if (!product) {
    return `
      <header class="store-header">
        <div class="store-logo">🛍️ {{projectName}}</div>
        <nav class="store-nav">
          <a href="#/">Home</a>
          <a href="#/cart">🛒 Cart (${cart.length})</a>
        </nav>
      </header>
      <main class="store-main">
        <div class="not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <a href="#/" class="btn btn-primary">Back to Shop</a>
        </div>
      </main>
    `;
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return `
    <header class="store-header">
      <div class="store-logo">🛍️ {{projectName}}</div>
      <nav class="store-nav">
        <a href="#/">Home</a>
        <a href="#/cart">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="store-main">
      <div class="breadcrumb">
        <a href="#/">Home</a> / <a href="#/">${product.category}</a> / <span>${product.name}</span>
      </div>

      <div class="product-detail">
        <div class="product-detail-image">${product.image}</div>
        <div class="product-detail-info">
          <span class="product-category">${product.category}</span>
          <h1>${product.name}</h1>
          <p class="price price-large">$${product.price.toFixed(2)}</p>
          <p class="product-description">${product.description}</p>
          <div class="product-meta">
            <span>✅ In Stock</span>
            <span>🚚 Free Shipping</span>
            <span>↩️ 30-Day Returns</span>
          </div>
          <button class="btn btn-primary btn-large" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </div>

      ${related.length > 0 ? `
        <section class="related-products">
          <h2>Related Products</h2>
          <div class="product-grid">
            ${related.map(p => `
              <div class="product-card">
                <div class="product-image">${p.image}</div>
                <h3>${p.name}</h3>
                <p class="price">$${p.price.toFixed(2)}</p>
                <a href="#/product/${p.id}" class="btn btn-secondary">View Details</a>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="store-footer">
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
