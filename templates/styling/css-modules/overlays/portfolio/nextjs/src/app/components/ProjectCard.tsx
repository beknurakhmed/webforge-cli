import styles from './ProjectCard.module.css';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>{project.image}</div>
      <div className={styles.projectInfo}>
        <span className={styles.projectCategory}>{project.category}</span>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
        <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}
