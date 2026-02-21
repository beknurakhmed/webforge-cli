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
    <div className="project-card">
      <div className="project-image">{project.image}</div>
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}
