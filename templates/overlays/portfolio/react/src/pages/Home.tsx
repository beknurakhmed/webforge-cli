import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="portfolio-hero">
        <div className="hero-content">
          <span className="hero-greeting">Hi, I'm</span>
          <h1>{'{{projectName}}'}</h1>
          <p className="hero-role">Frontend Developer &amp; Software Engineer</p>
          <p className="hero-desc">
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section className="skills-section">
        <h2>Skills &amp; Technologies</h2>
        <p className="section-subtitle">Technologies I work with daily</p>
        <SkillsGrid />
      </section>
    </div>
  );
}

export default Home;
