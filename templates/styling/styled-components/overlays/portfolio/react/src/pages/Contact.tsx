import styled from 'styled-components';

const ContactSection = styled.div`
  max-width: 900px;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #374151;
  }

  input, textarea {
    padding: 0.6rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
    }
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid #4f46e5;
  background: #4f46e5;
  color: white;

  &:hover {
    background: #4338ca;
    border-color: #4338ca;
  }
`;

const ContactDetails = styled.div`
  padding-top: 0.5rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1.25rem;

  span {
    font-size: 1.25rem;
  }

  p {
    color: #374151;
    margin: 0;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <h2>Get In Touch</h2>
      <SectionSubtitle>Have a project in mind? Let's work together.</SectionSubtitle>
      <ContactGrid>
        <ContactForm onSubmit={(e) => e.preventDefault()}>
          <FormRow>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Tell me about your project..." />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        <ContactDetails>
          <h3>Contact Info</h3>
          <ContactItem>
            <span>📧</span>
            <p>hello@developer.com</p>
          </ContactItem>
          <ContactItem>
            <span>📍</span>
            <p>San Francisco, CA</p>
          </ContactItem>
          <ContactItem>
            <span>🔗</span>
            <p>github.com/developer</p>
          </ContactItem>
        </ContactDetails>
      </ContactGrid>
    </ContactSection>
  );
}

export default Contact;
