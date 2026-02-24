import { useState } from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem;
`;

const SettingsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 1.25rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.4rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.6rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
`;

const FormToggle = styled.div`
  margin-bottom: 0.75rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    font-size: 0.9rem;
    color: #374151;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #4f46e5;
    cursor: pointer;
  }
`;

const PrimaryButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background: #4338ca;
  }
`;

export function Settings() {
  const [name, setName] = useState('Brian Admin');
  const [email, setEmail] = useState('brian@example.com');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <PageTitle>Settings</PageTitle>
      <SettingsCard>
        <h3>Profile</h3>
        <FormGroup>
          <label htmlFor="name">Full Name</label>
          <FormInput id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email Address</label>
          <FormInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
      </SettingsCard>
      <SettingsCard>
        <h3>Preferences</h3>
        <FormToggle>
          <label>
            <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            <span>Dark Mode</span>
          </label>
        </FormToggle>
        <FormToggle>
          <label>
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            <span>Email Notifications</span>
          </label>
        </FormToggle>
      </SettingsCard>
      <PrimaryButton>Save Changes</PrimaryButton>
    </div>
  );
}
