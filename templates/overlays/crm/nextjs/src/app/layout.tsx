import './globals.css';
import { Sidebar } from './components/Sidebar';

export const metadata = {
  title: '{{projectName}} - CRM',
  description: 'Customer relationship management for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="crm-layout">
          <Sidebar />
          <main className="crm-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
