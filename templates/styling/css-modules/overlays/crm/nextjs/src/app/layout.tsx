import './globals.css';
import { Sidebar } from './components/Sidebar';
import styles from './layout.module.css';

export const metadata = {
  title: '{{projectName}} - CRM',
  description: 'Customer relationship management for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.crmLayout}>
          <Sidebar />
          <main className={styles.crmMain}>{children}</main>
        </div>
      </body>
    </html>
  );
}
