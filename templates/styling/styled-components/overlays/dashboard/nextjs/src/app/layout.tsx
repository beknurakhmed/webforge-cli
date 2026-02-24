import './globals.css';
import { StyledComponentsRegistry } from './registry';
import { Sidebar } from './components/Sidebar';
import { DashboardShell } from './components/DashboardShell';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <DashboardShell>
            <Sidebar />
            {children}
          </DashboardShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
