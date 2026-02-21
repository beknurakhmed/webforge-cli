import { Link } from 'react-router-dom';
import { categories } from '../data/posts';

function BlogSidebar() {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-section">
        <h3>Categories</h3>
        <div className="category-list">
          {categories.map((cat) => (
            <Link key={cat} to={`/category/${cat.toLowerCase()}`} className="category-tag">
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-section">
        <h3>Newsletter</h3>
        <p>Subscribe to get the latest posts delivered to your inbox.</p>
        <input type="email" placeholder="your@email.com" className="newsletter-input" />
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </aside>
  );
}

export default BlogSidebar;
