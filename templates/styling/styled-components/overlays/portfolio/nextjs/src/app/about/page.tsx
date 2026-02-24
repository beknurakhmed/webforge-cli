'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { SkillsGrid } from '../components/SkillsGrid';

const AboutPageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const AboutHero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutAvatar = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
`;

const AboutIntro = styled.p`
  font-size: 1.1rem;
  color: #374151;
  max-width: 600px;
  margin: 0 auto;
`;

const AboutSection = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 1.25rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const TimelineIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
`;

const TimelineContent = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #111827;
  }
`;

const TimelineCompany = styled.p`
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.9rem;
`;

const TimelinePeriod = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-size: 0.9rem;
  color: #374151;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  text-align: center;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
  }
`;

const EducationIcon = styled.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
`;

const EducationSchool = styled.p`
  color: #374151;
  font-size: 0.9rem;
`;

const EducationYear = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
`;

const AboutCTA = styled.section`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Leading development of cloud-native applications serving 50K+ users. Architecting microservices and mentoring junior developers.', icon: '🏢' },
  { role: 'Frontend Developer', company: 'DesignStudio Co.', period: '2020 - 2022', description: 'Built responsive web applications and design systems. Improved page load performance by 40% through optimization.', icon: '💻' },
  { role: 'Junior Developer', company: 'StartupXYZ', period: '2018 - 2020', description: 'Full-stack development for a SaaS platform. Implemented features used by thousands of customers daily.', icon: '🚀' },
];

const education = [
  { degree: 'M.S. Computer Science', school: 'State University', year: '2018', icon: '🎓' },
  { degree: 'B.S. Software Engineering', school: 'Tech Institute', year: '2016', icon: '📚' },
];

export default function AboutPage() {
  return (
    <AboutPageWrapper>
      <AboutHero>
        <AboutAvatar>👨‍💻</AboutAvatar>
        <AboutTitle>About Me</AboutTitle>
        <AboutIntro>
          I am a full-stack developer with over 6 years of experience building web applications.
          I am passionate about clean code, user experience, and turning complex problems into simple,
          elegant solutions.
        </AboutIntro>
      </AboutHero>

      <AboutSection>
        <h2>💼 Experience</h2>
        <Timeline>
          {experience.map((exp, i) => (
            <TimelineItem key={i}>
              <TimelineIcon>{exp.icon}</TimelineIcon>
              <TimelineContent>
                <h3>{exp.role}</h3>
                <TimelineCompany>{exp.company}</TimelineCompany>
                <TimelinePeriod>{exp.period}</TimelinePeriod>
                <TimelineDescription>{exp.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </AboutSection>

      <AboutSection>
        <h2>🎓 Education</h2>
        <EducationGrid>
          {education.map((edu, i) => (
            <EducationCard key={i}>
              <EducationIcon>{edu.icon}</EducationIcon>
              <h3>{edu.degree}</h3>
              <EducationSchool>{edu.school}</EducationSchool>
              <EducationYear>{edu.year}</EducationYear>
            </EducationCard>
          ))}
        </EducationGrid>
      </AboutSection>

      <SkillsGrid />

      <AboutCTA>
        <h2>Want to work together?</h2>
        <p>I am always interested in hearing about new projects and opportunities.</p>
        <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
      </AboutCTA>
    </AboutPageWrapper>
  );
}
