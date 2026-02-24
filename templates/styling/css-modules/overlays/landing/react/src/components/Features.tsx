import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Clean, modern UI with responsive layouts that look great on any device.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built with security best practices including HTTPS, CSP headers, and input validation.',
  },
  {
    icon: '🧩',
    title: 'Modular Architecture',
    description: 'Component-based structure makes it easy to customize and extend functionality.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Designed for mobile devices first, then scaled up for tablets and desktops.',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description: 'Deploy anywhere — Vercel, Netlify, AWS, or your own server in minutes.',
  },
];

export function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2>Features</h2>
      <p className={styles.featuresSubtitle}>Everything you need to build a modern web application</p>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
