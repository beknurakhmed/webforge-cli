'use client';

import styled from 'styled-components';
import { StatsCards } from './components/StatsCards';
import { ContactsTable } from './components/ContactsTable';

const PageHeader = styled.div`margin-bottom: 2rem; h1 { font-size: 1.75rem; color: #111827; font-weight: 700; } p { color: #6b7280; margin-top: 0.25rem; }`;
const DashboardGrid = styled.div`display: grid; grid-template-columns: 1fr 360px; gap: 1.5rem; @media (max-width: 768px) { grid-template-columns: 1fr; }`;

const ActivityCard = styled.div`background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); padding: 1.5rem;`;
const ActivityTitle = styled.h3`font-size: 1rem; font-weight: 600; color: #111827; margin-bottom: 1.25rem;`;
const ActivityList = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const ActivityItem = styled.div`display: flex; gap: 0.75rem;`;
const ActivityIcon = styled.span`font-size: 1.25rem; flex-shrink: 0;`;
const ActivityInfo = styled.div`flex: 1;`;
const ActivityAction = styled.p`font-weight: 600; color: #111827; font-size: 0.9rem;`;
const ActivityDetail = styled.p`color: #6b7280; font-size: 0.85rem;`;
const ActivityTime = styled.p`color: #9ca3af; font-size: 0.75rem; margin-top: 0.25rem;`;

const recentActivities = [
  { action: 'New deal created', detail: 'TechCorp Inc. - Enterprise Plan', time: '2 hours ago', icon: '💼' },
  { action: 'Contact updated', detail: 'Sarah Chen - Status changed to Customer', time: '4 hours ago', icon: '👤' },
  { action: 'Deal closed', detail: 'GlobalNet Ltd. - Premium Package', time: '1 day ago', icon: '🎉' },
  { action: 'New contact added', detail: 'Emily Brown - StartupXYZ', time: '1 day ago', icon: '➕' },
  { action: 'Meeting scheduled', detail: 'James Wilson - Product Demo', time: '2 days ago', icon: '📅' },
];

export default function CRMDashboard() {
  return (
    <div>
      <PageHeader><h1>Dashboard</h1><p>Welcome back! Here is your sales overview.</p></PageHeader>
      <StatsCards />
      <DashboardGrid>
        <ContactsTable limit={4} />
        <ActivityCard>
          <ActivityTitle>Recent Activity</ActivityTitle>
          <ActivityList>
            {recentActivities.map((activity, i) => (
              <ActivityItem key={i}>
                <ActivityIcon>{activity.icon}</ActivityIcon>
                <ActivityInfo>
                  <ActivityAction>{activity.action}</ActivityAction>
                  <ActivityDetail>{activity.detail}</ActivityDetail>
                  <ActivityTime>{activity.time}</ActivityTime>
                </ActivityInfo>
              </ActivityItem>
            ))}
          </ActivityList>
        </ActivityCard>
      </DashboardGrid>
    </div>
  );
}
