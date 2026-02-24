'use client';

import styled from 'styled-components';

const SkillsSection = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillIcon = styled.span`
  font-size: 1.5rem;
`;

const SkillCategory = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
`;

const SkillName = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 6px;
  background: #f9fafb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.25rem;
`;

const SkillFill = styled.div<{ $width: number }>`
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #818cf8);
  border-radius: 3px;
  transition: width 0.5s ease;
  width: ${props => props.$width}%;
`;

const SkillLevel = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 600;
`;

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: '📘', category: 'Languages' },
  { name: 'Node.js', level: 88, icon: '🟢', category: 'Backend' },
  { name: 'Next.js', level: 92, icon: '▲', category: 'Frontend' },
  { name: 'CSS/Sass', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'Python', level: 80, icon: '🐍', category: 'Languages' },
  { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'Backend' },
  { name: 'Docker', level: 75, icon: '🐳', category: 'DevOps' },
  { name: 'AWS', level: 78, icon: '☁️', category: 'DevOps' },
  { name: 'Git', level: 93, icon: '📂', category: 'Tools' },
  { name: 'Figma', level: 85, icon: '🖌️', category: 'Design' },
  { name: 'GraphQL', level: 80, icon: '📊', category: 'Backend' },
];

export function SkillsGrid() {
  return (
    <SkillsSection>
      <SectionTitle>Skills & Technologies</SectionTitle>
      <SectionSubtitle>Tools and technologies I work with on a daily basis</SectionSubtitle>
      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillHeader>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillCategory>{skill.category}</SkillCategory>
            </SkillHeader>
            <SkillName>{skill.name}</SkillName>
            <SkillBar>
              <SkillFill $width={skill.level} />
            </SkillBar>
            <SkillLevel>{skill.level}%</SkillLevel>
          </SkillCard>
        ))}
      </Grid>
    </SkillsSection>
  );
}
