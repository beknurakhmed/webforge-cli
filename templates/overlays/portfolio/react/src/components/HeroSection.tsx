export function HeroSection() {
  return (
    <header className="portfolio-hero">
      <nav className="portfolio-nav">
        <div className="logo">{{projectName}}</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="hero-content">
        <span className="hero-greeting">Hi, I'm</span>
        <h1>Beknur</h1>
        <p className="hero-role">Frontend Developer & Software Engineer</p>
        <p className="hero-desc">I craft pixel-perfect, user-centric web experiences with modern technologies. Passionate about clean code and great design.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </header>
  );
}
