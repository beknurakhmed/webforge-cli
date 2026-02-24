import './globals.css';
import { Sidebar } from './components/Sidebar';
import styles from './layout.module.css';

export const metadata = {
  title: '{{projectName}} - Dashboard',
  description: 'Admin dashboard for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.dashboardLayout}>
          <Sidebar />
          <main className={styles.dashboardMain}>{children}</main>
        </div>
      </body>
    </html>
  );
}
