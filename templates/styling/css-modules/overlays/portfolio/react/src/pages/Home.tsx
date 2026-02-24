import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';
import styles from './Home.module.css';

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className={styles.portfolioHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroGreeting}>Hi, I'm</span>
          <h1>{'{{projectName}}'}</h1>
          <p className={styles.heroRole}>Frontend Developer &amp; Software Engineer</p>
          <p className={styles.heroDesc}>
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </p>
          <div className={styles.heroActions}>
            <Link to="/projects" className={styles.btnPrimary}>View My Work</Link>
            <Link to="/contact" className={styles.btnOutline}>Get In Touch</Link>
          </div>
        </div>
      </section>
      <section className={styles.projectsSection}>
        <h2>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>A selection of my recent work</p>
        <div className={styles.projectsGrid}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className={styles.skillsSection}>
        <h2>Skills &amp; Technologies</h2>
        <p className={styles.sectionSubtitle}>Technologies I work with daily</p>
        <SkillsGrid />
      </section>
    </div>
  );
}

export default Home;
