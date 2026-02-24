import './globals.scss';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata = {
  title: '{{projectName}} - Portfolio',
  description: 'Portfolio and projects showcase for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
