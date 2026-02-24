import Link from 'next/link';
import { ProjectCard, Project } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';
import styles from './page.module.css';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div>
          <p className={styles.heroGreeting}>Hello, I am</p>
          <h1 className={styles.heroName}>{'{{projectName}}'}</h1>
          <p className={styles.heroTitle}>Full-Stack Developer & Designer</p>
          <p className={styles.heroDescription}>
            I build modern web applications with clean code and thoughtful design.
            Passionate about creating digital experiences that make a real impact.
          </p>
          <div className={styles.heroActions}>
            <Link href="/projects" className={styles.btnPrimary}>View Projects</Link>
            <Link href="/contact" className={styles.btnOutline}>Get in Touch</Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroEmoji}>👨‍💻</div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>A selection of my recent work and side projects</p>
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className={styles.sectionCta}>
          <Link href="/projects" className={styles.btnOutline}>View All Projects →</Link>
        </div>
      </section>

      <SkillsGrid />

      <section className={styles.ctaSection}>
        <h2>Let us Work Together</h2>
        <p>Have a project in mind? I am always open to discussing new opportunities and creative ideas.</p>
        <Link href="/contact" className={styles.ctaBtnPrimary}>Start a Conversation</Link>
      </section>
    </div>
  );
}
