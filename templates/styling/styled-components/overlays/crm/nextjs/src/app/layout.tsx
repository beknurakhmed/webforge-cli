import './globals.css';
import { StyledComponentsRegistry } from './registry';
import { Sidebar } from './components/Sidebar';
import { CRMShell } from './components/CRMShell';

export const metadata = {
  title: '{{projectName}} - CRM',
  description: 'Customer relationship management for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CRMShell>
            <Sidebar />
            {children}
          </CRMShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
