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
    <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 flex items-center justify-center text-5xl bg-gradient-to-br from-indigo-50 to-indigo-100">{project.image}</div>
      <div className="p-5">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{project.category}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{project.title}</h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded text-xs font-medium">{t}</span>
          ))}
        </div>
        <a href={project.link} className="text-indigo-600 font-semibold text-sm hover:underline" target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}
