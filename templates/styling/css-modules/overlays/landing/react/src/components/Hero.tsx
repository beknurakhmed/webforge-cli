import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <nav className={styles.nav}>
        <div className={styles.logo}>{'{{projectName}}'}</div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#cta">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className={styles.heroContent}>
        <h1>Build Something Amazing</h1>
        <p>A modern landing page template to kickstart your next project. Fast, responsive, and ready for production.</p>
        <div className={styles.heroActions}>
          <button className={styles.btnPrimary}>Get Started</button>
          <button className={styles.btnSecondary}>Learn More</button>
        </div>
      </div>
    </header>
  );
}
