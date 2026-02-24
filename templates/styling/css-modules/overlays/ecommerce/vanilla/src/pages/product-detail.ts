import { products, cart, styles } from '../main';

export function renderProductDetail(params?: Record<string, string>): string {
  const id = parseInt(params?.id || '1');
  const product = products.find(p => p.id === id);

  if (!product) {
    return `
      <header class="${styles.storeHeader}">
        <div class="${styles.storeLogo}">🛍️ {{projectName}}</div>
        <nav class="${styles.storeNav}">
          <a href="#/">Home</a>
          <a href="#/cart">🛒 Cart (${cart.length})</a>
        </nav>
      </header>
      <main class="${styles.storeMain}">
        <div class="${styles.notFound}">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <a href="#/" class="${styles.btn} ${styles.btnPrimary}">Back to Shop</a>
        </div>
      </main>
    `;
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return `
    <header class="${styles.storeHeader}">
      <div class="${styles.storeLogo}">🛍️ {{projectName}}</div>
      <nav class="${styles.storeNav}">
        <a href="#/">Home</a>
        <a href="#/cart">🛒 Cart (${cart.length})</a>
      </nav>
    </header>

    <main class="${styles.storeMain}">
      <div class="${styles.breadcrumb}">
        <a href="#/">Home</a> / <a href="#/">${product.category}</a> / <span>${product.name}</span>
      </div>

      <div class="${styles.productDetail}">
        <div class="${styles.productDetailImage}">${product.image}</div>
        <div class="${styles.productDetailInfo}">
          <span class="${styles.productCategory}">${product.category}</span>
          <h1>${product.name}</h1>
          <p class="${styles.price} ${styles.priceLarge}">$${product.price.toFixed(2)}</p>
          <p class="${styles.productDescription}">${product.description}</p>
          <div class="${styles.productMeta}">
            <span>✅ In Stock</span>
            <span>🚚 Free Shipping</span>
            <span>↩️ 30-Day Returns</span>
          </div>
          <button class="${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </div>

      ${related.length > 0 ? `
        <section class="${styles.relatedProducts}">
          <h2>Related Products</h2>
          <div class="${styles.productGrid}">
            ${related.map(p => `
              <div class="${styles.productCard}">
                <div class="${styles.productImage}">${p.image}</div>
                <h3>${p.name}</h3>
                <p class="${styles.price}">$${p.price.toFixed(2)}</p>
                <a href="#/product/${p.id}" class="${styles.btn} ${styles.btnSecondary}">View Details</a>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </main>

    <footer class="${styles.storeFooter}">
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
