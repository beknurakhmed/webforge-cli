import { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #111827;
  }
`;

const SectionSubtitle = styled.p`
  color: #6b7280;
  text-align: center;
  margin-bottom: 3rem;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#4f46e5' : 'white'};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border: 1px solid ${props => props.$active ? '#4f46e5' : '#d1d5db'};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.15s;

  &:hover {
    border-color: #4f46e5;
    color: ${props => props.$active ? 'white' : '#4f46e5'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <ProjectsSection>
      <h2>All Projects</h2>
      <SectionSubtitle>Browse my complete portfolio</SectionSubtitle>
      <FilterBar>
        {allCategories.map((cat) => (
          <FilterButton
            key={cat}
            $active={active === cat}
            onClick={() => setActive(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterBar>
      <ProjectsGrid>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
