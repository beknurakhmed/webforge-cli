import './globals.css';
import { StyledComponentsRegistry } from './registry';
import { PortfolioShell } from './components/PortfolioShell';

export const metadata = {
  title: '{{projectName}} - Portfolio',
  description: 'Portfolio and projects showcase for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <PortfolioShell>{children}</PortfolioShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
