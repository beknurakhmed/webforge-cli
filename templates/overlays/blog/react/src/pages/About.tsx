function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About This Blog</h1>
      <p className="about-description">
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </p>
      <div className="author-card">
        <div className="author-avatar">✍️</div>
        <div className="author-info">
          <h2>Jane Developer</h2>
          <p className="author-role">Senior Software Engineer</p>
          <p>
            With over 8 years of experience building web applications, I write about
            the tools, techniques, and practices that help developers build better software.
          </p>
        </div>
      </div>
      <div className="contact-info-section">
        <h2>Get in Touch</h2>
        <p>Have a question or want to collaborate? Reach out anytime.</p>
        <ul className="contact-links">
          <li>Email: hello@devblog.com</li>
          <li>GitHub: @janedev</li>
          <li>Twitter: @janedev</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
