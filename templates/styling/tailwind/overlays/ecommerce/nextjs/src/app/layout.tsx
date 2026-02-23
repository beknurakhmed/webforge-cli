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
      <body className="font-sans text-gray-700 bg-gray-50 leading-relaxed">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
