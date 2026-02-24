import Link from 'next/link';
import styles from './BlogSidebar.module.css';

const categories = [
  { name: 'Technology', slug: 'technology', count: 12 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Business', slug: 'business', count: 6 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 5 },
  { name: 'Tutorial', slug: 'tutorial', count: 9 },
];

const popularPosts = [
  { id: 1, title: 'Getting Started with Next.js 15', date: 'Jan 15, 2025' },
  { id: 3, title: 'Design Systems That Scale', date: 'Jan 10, 2025' },
  { id: 5, title: 'The Future of Web Development', date: 'Jan 3, 2025' },
];

export function BlogSidebar() {
  return (
    <aside className={styles.blogSidebar}>
      <div className={styles.sidebarWidget}>
        <h3>📂 Categories</h3>
        <ul className={styles.categoryList}>
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link href={`/category/${cat.slug}`} className={styles.categoryLink}>
                <span>{cat.name}</span>
                <span className={styles.categoryCount}>{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.sidebarWidget}>
        <h3>🔥 Popular Posts</h3>
        <ul className={styles.popularList}>
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`} className={styles.popularLink}>
                <span className={styles.popularTitle}>{post.title}</span>
                <span className={styles.popularDate}>{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.sidebarWidget} ${styles.newsletterWidget}`}>
        <h3>📬 Newsletter</h3>
        <p>Get the latest posts delivered to your inbox.</p>
        <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
        <button className={styles.btnPrimary}>Subscribe</button>
      </div>
    </aside>
  );
}
