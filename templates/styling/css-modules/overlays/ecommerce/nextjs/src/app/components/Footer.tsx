import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>🛍️ {'{{projectName}}'}</h3>
            <p>Your one-stop shop for quality products at great prices.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Shop</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale Items</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>📌</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
