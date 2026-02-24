import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
