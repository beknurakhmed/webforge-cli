import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3>{'{{projectName}}'}</h3>
          <p>Building the future of the web, one project at a time.</p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerCol}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#cta">Pricing</a>
            <a href="#">Documentation</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}
