import './globals.css';
import Nav from './components/Nav';

export const metadata = {
  title: '{{projectName}}',
  description: 'Generated with webforge-cli',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
