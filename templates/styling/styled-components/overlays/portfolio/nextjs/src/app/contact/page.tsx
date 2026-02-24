'use client';

import { useState } from 'react';
import styled from 'styled-components';

const ContactPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #111827;
  }

  p {
    color: #6b7280;
    margin-top: 0.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.35rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #374151;
    background: white;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79,70,229,0.1);
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  background: #4f46e5;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;

  h3 {
    font-size: 1.25rem;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
  }
`;

const SuccessIcon = styled.span`
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
`;

const SendAnotherButton = styled.button`
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  background: #4f46e5;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ContactInfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const InfoLabel = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
`;

const InfoValue = styled.p`
  font-weight: 600;
  color: #111827;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 8px;
  font-weight: 500;
  color: #374151;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    background: #eef2ff;
    color: #4f46e5;
  }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ContactPageWrapper>
      <ContactHeader>
        <h1>Get in Touch</h1>
        <p>Have a project in mind or just want to say hello? I would love to hear from you.</p>
      </ContactHeader>

      <ContactGrid>
        <ContactFormCard>
          {submitted ? (
            <SuccessMessage>
              <SuccessIcon>✅</SuccessIcon>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              <SendAnotherButton onClick={() => setSubmitted(false)}>Send Another</SendAnotherButton>
            </SuccessMessage>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          )}
        </ContactFormCard>

        <ContactInfoSection>
          <ContactInfoCard>
            <h3>Contact Information</h3>
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <div>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>hello@{'{{projectName}}'}.com</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <div>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>San Francisco, CA</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🕐</InfoIcon>
              <div>
                <InfoLabel>Availability</InfoLabel>
                <InfoValue>Open for freelance projects</InfoValue>
              </div>
            </InfoItem>
          </ContactInfoCard>

          <ContactInfoCard>
            <h3>Social Links</h3>
            <SocialGrid>
              <SocialCard href="#">
                <span>💼</span>
                <span>LinkedIn</span>
              </SocialCard>
              <SocialCard href="#">
                <span>📂</span>
                <span>GitHub</span>
              </SocialCard>
              <SocialCard href="#">
                <span>🐦</span>
                <span>Twitter</span>
              </SocialCard>
              <SocialCard href="#">
                <span>📸</span>
                <span>Dribbble</span>
              </SocialCard>
            </SocialGrid>
          </ContactInfoCard>
        </ContactInfoSection>
      </ContactGrid>
    </ContactPageWrapper>
  );
}
