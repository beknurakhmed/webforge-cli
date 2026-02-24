import { ConfigProvider } from 'antd';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5' } }}>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </ConfigProvider>
  );
}

export default App;
