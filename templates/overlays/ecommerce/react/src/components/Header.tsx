interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="store-header">
      <div className="header-content">
        <h1 className="store-logo">{{projectName}}</h1>
        <nav className="store-nav">
          <a href="#" className="active">All Products</a>
          <a href="#">Electronics</a>
          <a href="#">Accessories</a>
          <a href="#">Home</a>
        </nav>
        <div className="header-actions">
          <input type="text" className="search-input" placeholder="Search products..." />
          <button className="cart-btn" onClick={onCartClick}>
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}
