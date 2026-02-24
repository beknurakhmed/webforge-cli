import './globals.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: '{{projectName}}',
  description: 'Welcome to {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
