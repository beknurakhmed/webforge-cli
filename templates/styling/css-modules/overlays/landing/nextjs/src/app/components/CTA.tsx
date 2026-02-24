import styles from './CTA.module.css';

export function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers building amazing products.</p>
        <button className={styles.btnPrimary}>Start Free Trial</button>
        <p className={styles.ctaNote}>No credit card required</p>
      </div>
    </section>
  );
}
