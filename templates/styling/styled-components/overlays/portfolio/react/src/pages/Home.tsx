import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import SkillsGrid from '../components/SkillsGrid';
import { projects } from '../data/projects';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  padding: 5rem 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const HeroGreeting = styled.span`
  font-size: 1.1rem;
  color: #4f46e5;
  font-weight: 600;
`;

const HeroRole = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 1rem;
`;

const HeroDesc = styled.p`
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)<{ $variant?: 'outline' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  display: inline-block;

  background: ${props => props.$variant === 'outline' ? 'transparent' : '#4f46e5'};
  color: white;
  border-color: ${props => props.$variant === 'outline' ? '#475569' : '#4f46e5'};

  &:hover {
    background: ${props => props.$variant === 'outline' ? 'transparent' : '#4338ca'};
    border-color: ${props => props.$variant === 'outline' ? 'white' : '#4338ca'};
  }
`;

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsSection = styled.section`
  background: #f9fafb;
  padding: 5rem 2rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #111827;
  }
`;

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroGreeting>Hi, I'm</HeroGreeting>
          <h1>{'{{projectName}}'}</h1>
          <HeroRole>Frontend Developer &amp; Software Engineer</HeroRole>
          <HeroDesc>
            I craft pixel-perfect, user-centric web experiences with modern technologies.
            Passionate about clean code and great design.
          </HeroDesc>
          <HeroActions>
            <Button to="/projects">View My Work</Button>
            <Button to="/contact" $variant="outline">Get In Touch</Button>
          </HeroActions>
        </HeroContent>
      </HeroSection>
      <ProjectsSection>
        <h2>Featured Projects</h2>
        <SectionSubtitle>A selection of my recent work</SectionSubtitle>
        <ProjectsGrid>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </ProjectsSection>
      <SkillsSection>
        <h2>Skills &amp; Technologies</h2>
        <SectionSubtitle>Technologies I work with daily</SectionSubtitle>
        <SkillsGrid />
      </SkillsSection>
    </div>
  );
}

export default Home;
