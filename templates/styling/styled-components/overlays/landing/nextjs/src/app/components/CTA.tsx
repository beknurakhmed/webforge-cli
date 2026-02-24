'use client';

import styled from 'styled-components';

const CTASection = styled.section`
  background: #f9fafb;
  padding: 5rem 2rem;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #4f46e5;
  background: #4f46e5;
  color: white;

  &:hover {
    background: #4338ca;
    border-color: #4338ca;
  }
`;

const CTANote = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`;

export function CTA() {
  return (
    <CTASection id="cta">
      <CTAContent>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of developers building amazing products.</p>
        <CTAButton>Start Free Trial</CTAButton>
        <CTANote>No credit card required</CTANote>
      </CTAContent>
    </CTASection>
  );
}
