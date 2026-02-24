import styled from 'styled-components';
import type { Project } from '../data/projects';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
`;

const ProjectImage = styled.div`
  font-size: 3rem;
  text-align: center;
  padding: 2rem;
  background: #f9fafb;
`;

const ProjectInfo = styled.div`
  padding: 1.25rem;

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #111827;
  }

  p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <ProjectImage>{project.image}</ProjectImage>
      <ProjectInfo>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ProjectTags>
          {project.tags.map((tag, j) => (
            <Tag key={j}>{tag}</Tag>
          ))}
        </ProjectTags>
      </ProjectInfo>
    </Card>
  );
}

export default ProjectCard;
