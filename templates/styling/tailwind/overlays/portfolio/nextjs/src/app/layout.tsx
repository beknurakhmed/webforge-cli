import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata = {
  title: '{{projectName}} - Portfolio',
  description: 'Portfolio and projects showcase for {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-700 bg-gray-50 leading-relaxed">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
