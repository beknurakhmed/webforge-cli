import Link from 'next/link';

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
    <aside className="blog-sidebar">
      <div className="sidebar-widget">
        <h3>📂 Categories</h3>
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link href={`/category/${cat.slug}`} className="category-link">
                <span>{cat.name}</span>
                <span className="category-count">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3>🔥 Popular Posts</h3>
        <ul className="popular-list">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`} className="popular-link">
                <span className="popular-title">{post.title}</span>
                <span className="popular-date">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-widget newsletter-widget">
        <h3>📬 Newsletter</h3>
        <p>Get the latest posts delivered to your inbox.</p>
        <input type="email" placeholder="your@email.com" className="newsletter-input" />
        <button className="btn btn-primary btn-full">Subscribe</button>
      </div>
    </aside>
  );
}
