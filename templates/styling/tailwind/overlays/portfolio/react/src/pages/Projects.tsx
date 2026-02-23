import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="max-w-[1100px] mx-auto py-20 px-8">
      <h2 className="text-center text-3xl font-bold mb-2 text-gray-900">All Projects</h2>
      <p className="text-gray-500 text-center mb-12">Browse my complete portfolio</p>
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm cursor-pointer transition-all duration-150 border ${
              active === cat
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-500 border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
