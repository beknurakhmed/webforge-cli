export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{{projectName}}</h3>
          <p>Building the future of the web.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#cta">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  );
}
