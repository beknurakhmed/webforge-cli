import type { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>{project.image}</div>
      <div className={styles.projectInfo}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag, j) => (
            <span key={j} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
