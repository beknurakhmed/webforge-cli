import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartProvider } from './components/CartProvider';

export const metadata = {
  title: '{{projectName}} - Online Store',
  description: 'Shop the latest products at {{projectName}}',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px' }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
