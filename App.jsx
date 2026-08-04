import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-nvidia-canvas">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
