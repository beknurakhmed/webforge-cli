import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="text-5xl text-center py-8 bg-gray-50">{project.image}</div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, j) => (
            <span key={j} className="bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded text-xs font-medium">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
