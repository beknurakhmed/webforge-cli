import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutTitle}>About This Blog</h1>
      <p className={styles.aboutDescription}>
        A blog dedicated to modern web development, covering topics from frontend frameworks
        to backend architectures and everything in between.
      </p>
      <div className={styles.authorCard}>
        <div className={styles.authorAvatar}>✍️</div>
        <div className={styles.authorInfo}>
          <h2>Jane Developer</h2>
          <p className={styles.authorRole}>Senior Software Engineer</p>
          <p>
            With over 8 years of experience building web applications, I write about
            the tools, techniques, and practices that help developers build better software.
          </p>
        </div>
      </div>
      <div className={styles.contactInfoSection}>
        <h2>Get in Touch</h2>
        <p>Have a question or want to collaborate? Reach out anytime.</p>
        <ul className={styles.contactLinks}>
          <li>Email: hello@devblog.com</li>
          <li>GitHub: @janedev</li>
          <li>Twitter: @janedev</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
