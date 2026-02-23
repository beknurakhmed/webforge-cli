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
      <body className="font-sans text-gray-700 bg-gray-50 leading-relaxed">
        <BlogHeader />
        <main>{children}</main>
        <BlogFooter />
      </body>
    </html>
  );
}
