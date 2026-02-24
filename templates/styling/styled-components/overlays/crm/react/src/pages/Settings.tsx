import styled from 'styled-components';

const CRMHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }
`;

const SettingsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  max-width: 500px;
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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

  input, select {
    padding: 0.6rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: #4f46e5;
    }
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

function Settings() {
  return (
    <div>
      <CRMHeader>
        <h1>Settings</h1>
      </CRMHeader>
      <SettingsCard>
        <SettingsForm onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" defaultValue="My Company" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" defaultValue="admin@company.com" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="timezone">Timezone</label>
            <select id="timezone" defaultValue="UTC-5">
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-7">Mountain Time (UTC-7)</option>
              <option value="UTC-6">Central Time (UTC-6)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European (UTC+1)</option>
            </select>
          </FormGroup>
          <PrimaryButton type="submit">Save Changes</PrimaryButton>
        </SettingsForm>
      </SettingsCard>
    </div>
  );
}

export default Settings;
