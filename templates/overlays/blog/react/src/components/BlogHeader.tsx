export function BlogHeader() {
  return (
    <header className="blog-header">
      <div className="header-content">
        <h1 className="blog-title">{{projectName}}</h1>
        <nav className="blog-nav">
          <a href="#" className="active">Home</a>
          <a href="#">Articles</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  );
}
