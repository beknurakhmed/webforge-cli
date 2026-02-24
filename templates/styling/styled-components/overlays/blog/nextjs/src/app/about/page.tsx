'use client';

import styled from 'styled-components';

const AboutPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const AboutHero = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const AboutSection = styled.div`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #374151;
    margin-bottom: 0.75rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
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

const TeamAvatar = styled.div`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`;

const TeamRole = styled.p`
  font-size: 0.8rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TeamBio = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const team = [
  { name: 'Alex Rivera', role: 'Lead Writer & Editor', bio: 'Full-stack developer with 10+ years of experience. Passionate about modern web technologies and developer education.', avatar: '👨‍💻' },
  { name: 'Priya Sharma', role: 'Design Writer', bio: 'UI/UX designer who loves translating complex design concepts into accessible, practical advice.', avatar: '👩‍🎨' },
  { name: 'Marcus Chen', role: 'Technical Writer', bio: 'Software architect specializing in scalable systems and design patterns. Writes about architecture and best practices.', avatar: '👨' },
  { name: 'Sofia Andersen', role: 'Tutorial Creator', bio: 'Frontend developer and educator. Creates in-depth tutorials that make complex topics approachable.', avatar: '👩' },
];

export default function About() {
  return (
    <AboutPage>
      <AboutHero>
        <h1>About {'{{projectName}}'}</h1>
        <p>We are a team of passionate developers and designers sharing knowledge about modern web development, design, and technology.</p>
      </AboutHero>

      <AboutSection>
        <h2>Our Mission</h2>
        <p>We believe in making technology accessible to everyone. Our articles combine practical tutorials with in-depth analysis to help developers at every level grow their skills and stay current with the latest trends.</p>
      </AboutSection>

      <AboutSection>
        <h2>Meet the Team</h2>
        <TeamGrid>
          {team.map((member) => (
            <TeamCard key={member.name}>
              <TeamAvatar>{member.avatar}</TeamAvatar>
              <h3>{member.name}</h3>
              <TeamRole>{member.role}</TeamRole>
              <TeamBio>{member.bio}</TeamBio>
            </TeamCard>
          ))}
        </TeamGrid>
      </AboutSection>

      <AboutSection>
        <h2>Get In Touch</h2>
        <p>Have a suggestion for a topic? Want to contribute? We would love to hear from you.</p>
        <ContactInfo>
          <ContactItem>
            <span>📧</span>
            <span>hello@{'{{projectName}}'}.com</span>
          </ContactItem>
          <ContactItem>
            <span>🐦</span>
            <span>@{'{{projectName}}'}</span>
          </ContactItem>
        </ContactInfo>
      </AboutSection>
    </AboutPage>
  );
}
