export function Hero() {
  return (
    <header className="hero">
      <nav className="nav">
        <div className="logo">{{projectName}}</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#cta">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="hero-content">
        <h1>Build Something Amazing</h1>
        <p>A modern landing page template to kickstart your next project.</p>
        <div className="hero-actions">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </header>
  );
}
