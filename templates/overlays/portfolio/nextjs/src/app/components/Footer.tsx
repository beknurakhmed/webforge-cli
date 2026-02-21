import Link from 'next/link';

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>🚀 {'{{projectName}}'}</h3>
            <p>Building digital experiences that make a difference. Let us create something amazing together.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <span>💼</span>
              <span>🐦</span>
              <span>📂</span>
              <span>📧</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 {'{{projectName}}'}. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
