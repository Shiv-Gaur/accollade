
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-glow">ABOUT <span className="text-cyberblue">ACCOLLADE</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberteal to-cyberpink mx-auto"></div>
          </div>
          
          <div className="cyber-panel p-8 rounded-lg backdrop-blur-md">
            <div className="mb-8">
              <p className="text-gray-300 text-lg mb-6">
                Welcome to <span className="text-cyberteal font-bold">ACCOLADE 3.0</span> , the annual tech and cultural fest of Graphic Era University, where innovation meets expression.
              </p>
              <p className="text-gray-300 text-lg">
              Now in its third edition, ACCOLADE continues to grow as a celebration of talent, creativity, and progress. From thrilling tech competitions to electrifying cultural showcases, it's a space where students from all walks come together to create, compete, and connect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-border p-6 bg-cyberindigo/30 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-cyberteal">Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Foster innovation, creativity, and collaboration across disciplines</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Provide a platform for students to showcase both technical prowess and artistic talent</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Build a vibrant community around learning, performance, and expression</p>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-border p-6 bg-cyberindigo/30 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-cyberteal">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Artistein – An artistic showcase of visual storytelling, installations, and creative expression</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Code Hunt – A thrilling coding challenge for problem-solvers and programmers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Workshops – Hands-on learning experiences in emerging technologies and creative arts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-cyberpink mr-2">✦</div>
                    <p className="text-gray-300">Tarang – Cultural extravaganza featuring dance, music, and open mic performances</p>
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
