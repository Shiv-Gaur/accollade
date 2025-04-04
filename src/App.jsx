
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update parallax elements
      document.querySelectorAll('.parallax-bg').forEach(bg => {
        const speed = bg.getAttribute('data-speed') || 0.2;
        const yPos = -scrollY * speed;
        bg.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <>
      <Preloader onLoadComplete={() => setLoading(false)} />
      <div className={`min-h-screen bg-gradient-to-b from-cyberdark to-cyberpurple transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar scrollY={scrollY} />
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
