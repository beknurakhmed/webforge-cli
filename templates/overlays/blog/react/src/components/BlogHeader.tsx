import { NavLink } from 'react-router-dom';

function BlogHeader() {
  return (
    <header className="blog-header">
      <div className="header-content">
        <NavLink to="/" className="blog-title">{'{{projectName}}'}</NavLink>
        <nav className="blog-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default BlogHeader;
