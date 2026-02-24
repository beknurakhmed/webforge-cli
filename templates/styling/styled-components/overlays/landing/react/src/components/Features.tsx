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
    color: #111827;
  }
`;

const FeaturesSubtitle = styled.p`
  color: #6b7280;
  font-size: 1.1rem;
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
    color: #111827;
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
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with lazy loading, code splitting, and modern build tools.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Clean, modern UI with responsive layouts that look great on any device.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built with security best practices including HTTPS, CSP headers, and input validation.',
  },
  {
    icon: '🧩',
    title: 'Modular Architecture',
    description: 'Component-based structure makes it easy to customize and extend functionality.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Designed for mobile devices first, then scaled up for tablets and desktops.',
  },
  {
    icon: '🚀',
    title: 'Easy Deployment',
    description: 'Deploy anywhere — Vercel, Netlify, AWS, or your own server in minutes.',
  },
];

export function Features() {
  return (
    <FeaturesSection id="features">
      <h2>Features</h2>
      <FeaturesSubtitle>Everything you need to build a modern web application</FeaturesSubtitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesSection>
  );
}
