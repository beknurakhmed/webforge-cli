import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="landing">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
