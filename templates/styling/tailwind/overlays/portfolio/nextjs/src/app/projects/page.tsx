'use client';

import { useState } from 'react';
import { ProjectCard, Project } from '../components/ProjectCard';

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Projects</h1>
        <p className="text-gray-500 mt-2">A complete collection of my work, side projects, and experiments.</p>
      </div>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 border-2 rounded-full font-medium text-sm transition-all cursor-pointer ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
