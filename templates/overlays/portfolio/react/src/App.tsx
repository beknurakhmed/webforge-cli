import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ContactForm } from './components/ContactForm';
import { PortfolioFooter } from './components/PortfolioFooter';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <HeroSection />
      <Projects />
      <Skills />
      <ContactForm />
      <PortfolioFooter />
    </div>
  );
}

export default App;
