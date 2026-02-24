import './globals.css';
import { StyledComponentsRegistry } from './registry';
import { BlogShell } from './components/BlogShell';

export const metadata = {
  title: '{{projectName}} - Blog',
  description: 'Latest articles and insights from {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <BlogShell>{children}</BlogShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
