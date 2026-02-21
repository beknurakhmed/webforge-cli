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
        <main>{children}</main>
        <BlogFooter />
      </body>
    </html>
  );
}
