'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { ProjectCard, Project } from '../components/ProjectCard';

const ProjectsPageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #111827;
  }

  p {
    color: #6b7280;
    margin-top: 0.5rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.25rem;
  border: 2px solid ${props => props.$active ? '#4f46e5' : '#e5e7eb'};
  border-radius: 50px;
  background: ${props => props.$active ? '#4f46e5' : 'white'};
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.$active ? 'white' : '#374151'};
  transition: all 0.2s;
  font-size: 0.85rem;

  &:hover {
    background: #4f46e5;
    color: white;
    border-color: #4f46e5;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

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
    <ProjectsPageWrapper>
      <ProjectsHeader>
        <h1>All Projects</h1>
        <p>A complete collection of my work, side projects, and experiments.</p>
      </ProjectsHeader>

      <FilterGroup>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            $active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterGroup>

      <ProjectsGrid>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>

      {filtered.length === 0 && (
        <EmptyState>
          <p>No projects found in this category.</p>
        </EmptyState>
      )}
    </ProjectsPageWrapper>
  );
}
