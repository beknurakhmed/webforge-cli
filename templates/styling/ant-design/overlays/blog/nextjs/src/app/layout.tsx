import './globals.css';
import { BlogHeader } from './components/BlogHeader';
import { BlogFooter } from './components/BlogFooter';

export const metadata = {
  title: '{{projectName}} - Blog',
  description: 'Latest articles and insights from {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BlogHeader />
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px' }}>{children}</main>
        <BlogFooter />
      </body>
    </html>
  );
}
