import Link from 'next/link';
import styles from './BlogFooter.module.css';

export function BlogFooter() {
  return (
    <footer className={styles.blogFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>📝 {'{{projectName}}'}</h3>
            <p>Sharing insights, tutorials, and stories about technology, design, and the web.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Categories</h4>
            <ul>
              <li><Link href="/category/technology">Technology</Link></li>
              <li><Link href="/category/design">Design</Link></li>
              <li><Link href="/category/business">Business</Link></li>
              <li><Link href="/category/tutorial">Tutorials</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/">Home</Link></li>
              <li>RSS Feed</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <span>🐦</span>
              <span>📘</span>
              <span>💼</span>
              <span>📷</span>
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
