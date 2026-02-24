import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactSection}>
      <h2>Get In Touch</h2>
      <p className={styles.sectionSubtitle}>Have a project in mind? Let's work together.</p>
      <div className={styles.contactGrid}>
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className={styles.btnPrimary}>Send Message</button>
        </form>
        <div className={styles.contactDetails}>
          <h3>Contact Info</h3>
          <div className={styles.contactItem}>
            <span>📧</span>
            <p>hello@developer.com</p>
          </div>
          <div className={styles.contactItem}>
            <span>📍</span>
            <p>San Francisco, CA</p>
          </div>
          <div className={styles.contactItem}>
            <span>🔗</span>
            <p>github.com/developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
