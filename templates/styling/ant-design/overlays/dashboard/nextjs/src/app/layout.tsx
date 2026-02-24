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
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: 24, background: '#f5f5f5' }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
