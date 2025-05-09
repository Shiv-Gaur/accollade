
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function GalleryPage() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ['All'];
  
  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/g2.png",
      description: "Opening ceremony of our annual tech conference with keynote speakers"
    },
    {
      id: 2,
      src: "/assets/g3.png",
      description: "Teams working intensively during our 48-hour hackathon challenge"
    },
    {
      id: 3,
      src: "/assets/g4.png",
      description: "Interactive AI workshop led by industry professionals"
    },
    {
      id: 4,
      src: "/assets/g5.png",
      description: "Cutting-edge technology showcase with live demonstrations"
    },
    {
      id: 5,
      src: "/assets/g6.png",
      description: "Our state-of-the-art innovation lab during a prototype testing session"
    },
    {
      id: 6,
      src: "/assets/g7.png",
      description: "Participants during the intense coding challenge finals"
    },
    {
      id: 7,
      src: "/assets/g8.png",
      description: "Our team during final preparations for the event"
    },
    {
      id: 8,
      src: "/assets/g9.png",
      description: "Collaborative problem-solving session during our design thinking workshop"
    },
    {
      id: 9,
      src: "/assets/g10.png",
      description: "Setting up the main stage before the event begins"
    },
    {
      id: 10,
      src: "/assets/g11.png",
      description: "Winners of the robotics competition receiving their awards"
    },
    {
      id: 11,
      src: "/assets/g12.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 12,
      src: "/assets/g13.png",
      description: "Participants getting hands-on experience with new technologies"
    },
    {
      id: 13,
      src: "/assets/g14.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 14,
      src: "/assets/g15.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 15,
      src: "/assets/g16.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 16,
      src: "/assets/g17.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 17,
      src: "/assets/g18.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 18,
      src: "/assets/g19.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 19,
      src: "/assets/g20.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 20,
      src: "/assets/g21.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 21,
      src: "/assets/g22.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 22,
      src: "/assets/g23.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 23,
      src: "/assets/g24.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 24,
      src: "/assets/g25.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 25,
      src: "/assets/g26.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 26,
      src: "/assets/g27.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 27,
      src: "/assets/g28.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 28,
      src: "/assets/g29.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
    {
      id: 29,
      src: "/assets/g30.png",
      description: "Attendees experiencing our virtual reality exhibition"
    },
  ];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyberdark to-cyberpurple">
      <Navbar scrollY={scrollY} />
      
      {/* Background image and overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyberdark/90 to-cyberpurple/90 z-10"></div>
        <img 
          src="/lovable-uploads/85cdbd65-3c4f-48b9-8cd0-7ec8f2058f90.png"
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 cyber-pattern opacity-30 z-20"></div>
      </div>
      
      <div className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 cyber-glow">EVENT <span className="text-cyberblue">GALLERY</span></h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberteal to-cyberpink mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Explore moments captured from our tech events, workshops, and competitions.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-10 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 cyber-border backdrop-blur-sm transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-cyberblue/40 to-cyberteal/40 text-white border-cyberteal' 
                    : 'bg-cyberdark/50 hover:bg-cyberblue/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="cyber-card overflow-hidden group cursor-pointer rounded-md"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-cyberteal text-sm mt-1">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="cyber-panel relative max-w-4xl w-full rounded-md overflow-hidden modal-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-30 bg-cyberpink hover:bg-cyberpink/80 p-2 rounded-full transition-colors shadow-lg shadow-cyberpink/20"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain mx-auto"
            />
            <div className="p-6 border-t border-cyberblue/30">
              <h3 className="text-xl font-bold cyber-glow">{selectedImage.alt}</h3>
              <p className="text-gray-300 mt-3">{selectedImage.description}</p>
              <p className="text-cyberteal mt-3 text-sm">Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default GalleryPage;
