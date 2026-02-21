function Contact() {
  return (
    <div className="contact-section">
      <h2>Get In Touch</h2>
      <p className="section-subtitle">Have a project in mind? Let's work together.</p>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact-details">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <span>📧</span>
            <p>hello@developer.com</p>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <p>San Francisco, CA</p>
          </div>
          <div className="contact-item">
            <span>🔗</span>
            <p>github.com/developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
