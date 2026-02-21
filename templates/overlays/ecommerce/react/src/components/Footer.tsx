export function Footer() {
  return (
    <footer className="store-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{{projectName}}</h3>
          <p>Your one-stop shop for quality products.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#">All Products</a>
            <a href="#">New Arrivals</a>
            <a href="#">Sale</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  );
}
