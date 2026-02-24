import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className={styles.projectsSection}>
      <h2>All Projects</h2>
      <p className={styles.sectionSubtitle}>Browse my complete portfolio</p>
      <div className={styles.filterBar}>
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? styles.filterBtnActive : styles.filterBtn}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className={styles.projectsGrid}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
