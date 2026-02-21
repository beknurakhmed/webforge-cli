export function renderContact(): string {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#/" class="nav-logo">{{projectName}}</a>
        <div class="nav-links">
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact" class="active">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="page-header">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you.</p>
      </section>

      <section class="section">
        <div class="contact-grid">
          <div class="contact-form-card">
            <h2>Send a Message</h2>
            <form class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-input" placeholder="John" />
                </div>
                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-input" placeholder="Doe" />
                </div>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-input" placeholder="john@example.com" />
              </div>
              <div class="form-group">
                <label>Subject</label>
                <select class="form-input">
                  <option value="">Select a topic</option>
                  <option>Project Inquiry</option>
                  <option>Freelance Work</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea class="form-input form-textarea" rows="5" placeholder="Tell me about your project or question..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">Send Message</button>
            </form>
          </div>

          <div class="contact-info-card">
            <h2>Contact Info</h2>
            <div class="contact-info-list">
              <div class="contact-info-item">
                <span class="contact-info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@developer.com</p>
                </div>
              </div>
              <div class="contact-info-item">
                <span class="contact-info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div class="contact-info-item">
                <span class="contact-info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div class="contact-info-item">
                <span class="contact-info-icon">🕐</span>
                <div>
                  <h4>Availability</h4>
                  <p>Mon - Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>

            <div class="social-section">
              <h3>Follow Me</h3>
              <div class="social-links">
                <a href="#" class="social-card">
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="#" class="social-card">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="social-card">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-card">
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div class="faq-section">
              <h3>FAQ</h3>
              <div class="faq-item">
                <h4>What is your typical response time?</h4>
                <p>I usually respond within 24-48 hours during business days.</p>
              </div>
              <div class="faq-item">
                <h4>Are you available for freelance work?</h4>
                <p>Yes! I am currently open to freelance and contract opportunities.</p>
              </div>
              <div class="faq-item">
                <h4>Do you work remotely?</h4>
                <p>Absolutely. I have experience working with remote teams across different time zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="footer-section">
          <h4>Connect</h4>
          <a href="#">🐙 GitHub</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
