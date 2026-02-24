import { Link } from 'react-router-dom';
import { categories } from '../data/posts';
import styles from './BlogSidebar.module.css';

function BlogSidebar() {
  return (
    <aside className={styles.blogSidebar}>
      <div className={styles.sidebarSection}>
        <h3>Categories</h3>
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat.toLowerCase()}`} className={styles.categoryTag}>
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.sidebarSection}>
        <h3>Newsletter</h3>
        <p>Subscribe to get the latest posts delivered to your inbox.</p>
        <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
        <button className={styles.newsletterBtn}>Subscribe</button>
      </div>
    </aside>
  );
}

export default BlogSidebar;
