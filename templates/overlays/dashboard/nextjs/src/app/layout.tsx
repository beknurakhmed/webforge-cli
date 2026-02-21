import './globals.css';
import { Sidebar } from './components/Sidebar';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="dashboard-layout">
          <Sidebar />
          <main className="dashboard-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
