import styled from 'styled-components';
import SkillsGrid from '../components/SkillsGrid';

const AboutSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;

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

const AboutBio = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;

  p {
    color: #374151;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AboutAvatar = styled.span`
  font-size: 3rem;
  flex-shrink: 0;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 2rem 0 1rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TimelineItem = styled.div`
  border-left: 3px solid #4f46e5;
  padding-left: 1.25rem;

  h4 {
    font-size: 1.05rem;
    color: #111827;
    margin: 0.25rem 0;
  }

  p {
    color: #374151;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
`;

const TimelineYear = styled.span`
  font-size: 0.8rem;
  color: #4f46e5;
  font-weight: 600;
`;

const TimelineCompany = styled.span`
  font-size: 0.9rem;
  color: #6b7280;
`;

const SkillsWrapper = styled.div`
  background: #f9fafb;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const timelineData = [
  { year: '2024 - Present', role: 'Senior Frontend Developer', company: 'Tech Corp', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { year: '2022 - 2024', role: 'Frontend Developer', company: 'StartupXYZ', desc: 'Built and maintained multiple React applications from scratch.' },
  { year: '2020 - 2022', role: 'Junior Developer', company: 'Web Agency', desc: 'Developed responsive websites and learned modern frameworks.' },
];

function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <SectionSubtitle>My journey as a developer</SectionSubtitle>
      <div>
        <AboutBio>
          <AboutAvatar>👨‍💻</AboutAvatar>
          <p>
            I am a passionate software engineer with a love for building beautiful, performant
            web applications. With expertise in modern JavaScript frameworks and a keen eye
            for design, I bridge the gap between functionality and aesthetics.
          </p>
        </AboutBio>
        <TimelineTitle>Experience</TimelineTitle>
        <Timeline>
          {timelineData.map((item, i) => (
            <TimelineItem key={i}>
              <TimelineYear>{item.year}</TimelineYear>
              <h4>{item.role}</h4>
              <TimelineCompany>{item.company}</TimelineCompany>
              <p>{item.desc}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <SkillsWrapper>
        <TimelineTitle>Skills</TimelineTitle>
        <SkillsGrid />
      </SkillsWrapper>
    </AboutSection>
  );
}

export default About;
