const categories = ['Tutorial', 'TypeScript', 'CSS', 'Accessibility', 'Architecture', 'JavaScript', 'React'];

export function BlogSidebar() {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-section">
        <h3>About</h3>
        <p>A blog about modern web development, best practices, and software engineering.</p>
      </div>
      <div className="sidebar-section">
        <h3>Categories</h3>
        <div className="category-list">
          {categories.map((cat, i) => (
            <a key={i} href="#" className="category-tag">{cat}</a>
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
