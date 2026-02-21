function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <p>&copy; 2025 {'{{projectName}}'}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PortfolioFooter;
