
import React from 'react';

function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyberdark/90 to-cyberpurple/90 z-10"></div>
        <img 
          src="/assets/85cdbd65-3c4f-48b9-8cd0-7ec8f2058f90.png" 
          alt="Tech Background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 cyber-pattern opacity-30 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-glow">ABOUT <span className="text-cyberblue">ACCOLADE</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberteal to-cyberpink mx-auto"></div>
          </div>
          
          <div className="cyber-panel p-8 rounded-lg backdrop-blur-md">
            <div className="mb-8">
              <p className="text-gray-300 text-lg mb-6">
                Welcome to <span className="text-cyberteal font-bold">ACCOLADE</span>, the ultimate cyberpunk tech festival where innovation meets immersion. Born from a vision to celebrate cutting-edge technology within a dystopian-inspired atmosphere, our event bridges the gap between science fiction and reality.
              </p>
              <p className="text-gray-300 text-lg">
                Every year, we bring together the brightest minds in technology, art, and culture to push boundaries and imagine new futures. From competitive hackathons to immersive exhibitions, ACCOLADE is more than an event—it's a glimpse into tomorrow's possibilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-border p-6 bg-cyberindigo/30 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-cyberteal">Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Foster innovation and technological advancement</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Create a platform for tech enthusiasts to collaborate</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Showcase emerging technologies in an immersive environment</p>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-border p-6 bg-cyberindigo/30 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-cyberteal">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">48-hour hackathon with $10,000 in prizes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Cutting-edge AR/VR exhibition space</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Industry expert panels and networking sessions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Interactive workshops on emerging technologies</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="#events" 
                className="inline-block cyber-border px-8 py-3 bg-gradient-to-r from-cyberblue/20 to-cyberteal/20 hover:from-cyberblue/30 hover:to-cyberteal/30 transition-all duration-300 text-white"
              >
                Explore Our Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
