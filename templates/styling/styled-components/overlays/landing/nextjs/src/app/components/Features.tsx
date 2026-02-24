'use client';

import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

const FeaturesSubtitle = styled.p`
  color: #6b7280;
  margin-bottom: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  text-align: left;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
  }
`;

const FeatureIcon = styled.span`
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
`;

const features = [
  { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for performance with lazy loading and code splitting.' },
  { icon: '🎨', title: 'Beautiful Design', description: 'Clean, modern UI with responsive layouts.' },
  { icon: '🔒', title: 'Secure by Default', description: 'Built with security best practices.' },
  { icon: '🧩', title: 'Modular Architecture', description: 'Component-based structure for easy customization.' },
  { icon: '📱', title: 'Mobile First', description: 'Designed for mobile, scaled up for desktop.' },
  { icon: '🚀', title: 'Easy Deployment', description: 'Deploy anywhere in minutes.' },
];

export function Features() {
  return (
    <FeaturesSection id="features">
      <h2>Features</h2>
      <FeaturesSubtitle>Everything you need to build a modern web application</FeaturesSubtitle>
      <FeatureGrid>
        {features.map((f, i) => (
          <FeatureCard key={i}>
            <FeatureIcon>{f.icon}</FeatureIcon>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
}
