import { styles } from '../main';

export function renderContact(): string {
  return `
    <nav class="${styles.navbar}">
      <div class="${styles.navContainer}">
        <a href="#/" class="${styles.navLogo}">{{projectName}}</a>
        <div class="${styles.navLinks}">
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact" class="active">Contact</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="${styles.pageHeader}">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? I'd love to hear from you.</p>
      </section>

      <section class="${styles.section}">
        <div class="${styles.contactGrid}">
          <div class="${styles.contactFormCard}">
            <h2>Send a Message</h2>
            <form class="${styles.contactForm}">
              <div class="${styles.formRow}">
                <div class="${styles.formGroup}">
                  <label>First Name</label>
                  <input type="text" class="${styles.formInput}" placeholder="John" />
                </div>
                <div class="${styles.formGroup}">
                  <label>Last Name</label>
                  <input type="text" class="${styles.formInput}" placeholder="Doe" />
                </div>
              </div>
              <div class="${styles.formGroup}">
                <label>Email</label>
                <input type="email" class="${styles.formInput}" placeholder="john@example.com" />
              </div>
              <div class="${styles.formGroup}">
                <label>Subject</label>
                <select class="${styles.formInput}">
                  <option value="">Select a topic</option>
                  <option>Project Inquiry</option>
                  <option>Freelance Work</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="${styles.formGroup}">
                <label>Message</label>
                <textarea class="${styles.formInput} ${styles.formTextarea}" rows="5" placeholder="Tell me about your project or question..."></textarea>
              </div>
              <button type="submit" class="${styles.btn} ${styles.btnPrimary} ${styles.btnFull}">Send Message</button>
            </form>
          </div>

          <div class="${styles.contactInfoCard}">
            <h2>Contact Info</h2>
            <div class="${styles.contactInfoList}">
              <div class="${styles.contactInfoItem}">
                <span class="${styles.contactInfoIcon}">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@developer.com</p>
                </div>
              </div>
              <div class="${styles.contactInfoItem}">
                <span class="${styles.contactInfoIcon}">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div class="${styles.contactInfoItem}">
                <span class="${styles.contactInfoIcon}">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div class="${styles.contactInfoItem}">
                <span class="${styles.contactInfoIcon}">🕐</span>
                <div>
                  <h4>Availability</h4>
                  <p>Mon - Fri, 9am - 6pm PST</p>
                </div>
              </div>
            </div>

            <div class="${styles.socialSection}">
              <h3>Follow Me</h3>
              <div class="${styles.socialLinks}">
                <a href="#" class="${styles.socialCard}">
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="#" class="${styles.socialCard}">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="${styles.socialCard}">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" class="${styles.socialCard}">
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div class="${styles.faqSection}">
              <h3>FAQ</h3>
              <div class="${styles.faqItem}">
                <h4>What is your typical response time?</h4>
                <p>I usually respond within 24-48 hours during business days.</p>
              </div>
              <div class="${styles.faqItem}">
                <h4>Are you available for freelance work?</h4>
                <p>Yes! I am currently open to freelance and contract opportunities.</p>
              </div>
              <div class="${styles.faqItem}">
                <h4>Do you work remotely?</h4>
                <p>Absolutely. I have experience working with remote teams across different time zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="${styles.footer}">
      <div class="${styles.footerContent}">
        <div class="${styles.footerSection}">
          <h4>{{projectName}}</h4>
          <p>Full Stack Developer crafting digital experiences that make a difference.</p>
        </div>
        <div class="${styles.footerSection}">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/projects">Projects</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="${styles.footerSection}">
          <h4>Connect</h4>
          <a href="#">🐙 GitHub</a>
          <a href="#">💼 LinkedIn</a>
          <a href="#">🐦 Twitter</a>
        </div>
      </div>
      <div class="${styles.footerBottom}">
        <p>&copy; 2024 {{projectName}}. All rights reserved.</p>
      </div>
    </footer>
  `;
}
