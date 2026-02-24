import styles from './PortfolioFooter.module.css';

function PortfolioFooter() {
  return (
    <footer className={styles.portfolioFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
