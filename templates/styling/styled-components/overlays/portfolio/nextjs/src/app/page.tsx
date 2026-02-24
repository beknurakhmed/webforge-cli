'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { ProjectCard, Project } from './components/ProjectCard';
import { SkillsGrid } from './components/SkillsGrid';

const HomePage = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2.5rem 0;
  }
`;

const HeroContent = styled.div``;

const HeroGreeting = styled.p`
  font-size: 1.1rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const HeroName = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroTitle = styled.p`
  font-size: 1.35rem;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  color: #374151;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const OutlineButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  background: transparent;
  color: #4f46e5;
  border: 2px solid #4f46e5;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #4f46e5;
    color: white;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroEmoji = styled.div`
  font-size: 10rem;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #6b7280;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionCTA = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 12px;
  margin: 4rem 0;
  color: white;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 1.5rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  background: white;
  color: #4f46e5;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }
`;

const projects: Project[] = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern web technologies for optimal performance.', tech: ['React', 'Node.js', 'PostgreSQL'], image: '🛒', category: 'Web App', link: '#', featured: true },
  { id: 2, title: 'Task Management Dashboard', description: 'Real-time collaborative task management tool with drag-and-drop, notifications, and team features.', tech: ['Next.js', 'TypeScript', 'MongoDB'], image: '📋', category: 'SaaS', link: '#', featured: true },
  { id: 3, title: 'Weather Analytics App', description: 'Interactive weather visualization app with historical data analysis and forecasting capabilities.', tech: ['React', 'D3.js', 'Python'], image: '🌤️', category: 'Data Viz', link: '#', featured: true },
  { id: 4, title: 'Social Media Mobile App', description: 'Cross-platform social app with real-time messaging, stories, and content sharing features.', tech: ['React Native', 'Firebase', 'Redux'], image: '📱', category: 'Mobile', link: '#', featured: false },
  { id: 5, title: 'AI Content Generator', description: 'AI-powered tool for generating marketing copy, blog posts, and social media content automatically.', tech: ['Python', 'OpenAI', 'FastAPI'], image: '🤖', category: 'AI/ML', link: '#', featured: false },
  { id: 6, title: 'Portfolio Website Builder', description: 'Drag-and-drop portfolio builder with customizable themes, animations, and one-click deployment.', tech: ['Vue.js', 'Node.js', 'AWS'], image: '🎨', category: 'Web App', link: '#', featured: false },
];

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <HomePage>
      <HeroSection>
        <HeroContent>
          <HeroGreeting>Hello, I am</HeroGreeting>
          <HeroName>{'{{projectName}}'}</HeroName>
          <HeroTitle>Full-Stack Developer & Designer</HeroTitle>
          <HeroDescription>
            I build modern web applications with clean code and thoughtful design.
            Passionate about creating digital experiences that make a real impact.
          </HeroDescription>
          <HeroActions>
            <PrimaryButton href="/projects">View Projects</PrimaryButton>
            <OutlineButton href="/contact">Get in Touch</OutlineButton>
          </HeroActions>
        </HeroContent>
        <HeroVisual>
          <HeroEmoji>👨‍💻</HeroEmoji>
        </HeroVisual>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>A selection of my recent work and side projects</SectionSubtitle>
        <ProjectsGrid>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
        <SectionCTA>
          <OutlineButton href="/projects">View All Projects →</OutlineButton>
        </SectionCTA>
      </FeaturedSection>

      <SkillsGrid />

      <CTASection>
        <h2>Let us Work Together</h2>
        <p>Have a project in mind? I am always open to discussing new opportunities and creative ideas.</p>
        <CTAButton href="/contact">Start a Conversation</CTAButton>
      </CTASection>
    </HomePage>
  );
}
