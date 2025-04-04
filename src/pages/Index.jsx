
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-b from-cyberdark to-cyberpurple">
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
