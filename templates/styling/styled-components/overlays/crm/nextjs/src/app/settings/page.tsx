'use client';

import { useState } from 'react';
import styled from 'styled-components';

const PageHeader = styled.div`margin-bottom: 2rem; h1 { font-size: 1.75rem; color: #111827; font-weight: 700; } p { color: #6b7280; margin-top: 0.25rem; }`;
const SettingsGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const SettingsCard = styled.div`background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); h3 { font-size: 1.1rem; color: #111827; margin-bottom: 1.25rem; }`;
const FormGroup = styled.div`margin-bottom: 1rem; label { display: block; font-size: 0.85rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; } input, select { width: 100%; padding: 0.625rem 0.875rem; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 0.9rem; color: #374151; background: white; &:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); } }`;
const ToggleGroup = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const ToggleRow = styled.div`display: flex; justify-content: space-between; align-items: center;`;
const ToggleLabel = styled.p`font-weight: 600; color: #111827; font-size: 0.9rem;`;
const ToggleDesc = styled.p`font-size: 0.8rem; color: #6b7280;`;
const ToggleSwitch = styled.button<{ $active: boolean }>`width: 48px; height: 26px; border-radius: 13px; border: none; background: ${props => props.$active ? '#4f46e5' : '#d1d5db'}; cursor: pointer; position: relative; transition: background 0.2s;`;
const ToggleKnob = styled.span<{ $active: boolean }>`width: 20px; height: 20px; border-radius: 50%; background: white; position: absolute; top: 3px; left: 3px; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.15); transform: ${props => props.$active ? 'translateX(22px)' : 'translateX(0)'};`;
const PipelineList = styled.div`display: flex; flex-direction: column; gap: 0.5rem;`;
const PipelineItem = styled.div`display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;`;
const StageNumber = styled.span`width: 24px; height: 24px; border-radius: 50%; background: #4f46e5; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;`;
const PrimaryButton = styled.button`display: inline-block; padding: 0.625rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; font-size: 0.9rem; background: #4f46e5; color: white; &:hover { background: #4338ca; }`;

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('{{projectName}}');
  const [email, setEmail] = useState('admin@example.com');
  const [notifications, setNotifications] = useState(true);
  const [dealAlerts, setDealAlerts] = useState(true);

  return (
    <div>
      <PageHeader><h1>Settings</h1><p>Manage your CRM preferences and configuration.</p></PageHeader>
      <SettingsGrid>
        <SettingsCard>
          <h3>⚙️ General Settings</h3>
          <FormGroup><label>Company Name</label><input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /></FormGroup>
          <FormGroup><label>Admin Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></FormGroup>
          <FormGroup><label>Currency</label><select defaultValue="USD"><option value="USD">USD ($)</option><option value="EUR">EUR (&#8364;)</option><option value="GBP">GBP (&#163;)</option></select></FormGroup>
          <PrimaryButton>Save Changes</PrimaryButton>
        </SettingsCard>
        <SettingsCard>
          <h3>🔔 Notifications</h3>
          <ToggleGroup>
            <ToggleRow><div><ToggleLabel>Email Notifications</ToggleLabel><ToggleDesc>Receive email alerts for new leads</ToggleDesc></div><ToggleSwitch $active={notifications} onClick={() => setNotifications(!notifications)}><ToggleKnob $active={notifications} /></ToggleSwitch></ToggleRow>
            <ToggleRow><div><ToggleLabel>Deal Alerts</ToggleLabel><ToggleDesc>Get notified when deal stages change</ToggleDesc></div><ToggleSwitch $active={dealAlerts} onClick={() => setDealAlerts(!dealAlerts)}><ToggleKnob $active={dealAlerts} /></ToggleSwitch></ToggleRow>
          </ToggleGroup>
        </SettingsCard>
        <SettingsCard>
          <h3>📊 Pipeline Stages</h3>
          <PipelineList>
            {['Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'].map((stage, i) => (
              <PipelineItem key={stage}><StageNumber>{i + 1}</StageNumber><span>{stage}</span></PipelineItem>
            ))}
          </PipelineList>
        </SettingsCard>
        <SettingsCard>
          <h3>🔒 Security</h3>
          <FormGroup><label>Current Password</label><input type="password" placeholder="Enter current password" /></FormGroup>
          <FormGroup><label>New Password</label><input type="password" placeholder="Enter new password" /></FormGroup>
          <PrimaryButton>Update Password</PrimaryButton>
        </SettingsCard>
      </SettingsGrid>
    </div>
  );
}
