'use client';

import styled from 'styled-components';

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

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
`;

const ProjectInfo = styled.div`
  padding: 1.25rem;
`;

const ProjectCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  margin: 0.35rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #374151;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLink = styled.a`
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <ProjectImage>{project.image}</ProjectImage>
      <ProjectInfo>
        <ProjectCategory>{project.category}</ProjectCategory>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectTech>
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </ProjectTech>
        <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
          View Project →
        </ProjectLink>
      </ProjectInfo>
    </Card>
  );
}
