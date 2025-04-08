
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

function Gallery() {
  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/g1.png",
      alt: "Tech Conference"
    },
    {
      id: 2,
      src: "/assets/g2.png",
      alt: "Hackathon"
    },
    {
      id: 3,
      src: "/assets/g3.png",
      alt: "Workshop"
    },
    {
      id: 4,
      src: "/assets/g4.png",
      alt: "Tech Exhibition"
    },
    {
      id: 5,
      src: "/assets/g5.png",
      alt: "Innovation Lab"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-cyberdark relative parallax-section">
      {/* Parallax Background */}
      <div 
        className="parallax-bg" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(10, 17, 40, 0.8))',
          backgroundSize: 'cover',
        }}
        data-speed="0.1"
      ></div>
      
      <div className="grid-bg"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-glow">OUR <span className="text-cyberblue">GALLERY</span></h2>
          <div className="w-20 h-1 bg-cyberteal mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore memorable moments from our previous tech events and competitions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="cyber-border h-full overflow-hidden group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6 bg-cyberdark border-cyberteal text-cyberteal hover:bg-cyberblue/20" />
            <CarouselNext className="-right-4 md:-right-6 bg-cyberdark border-cyberteal text-cyberteal hover:bg-cyberblue/20" />
          </Carousel>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="cyber-border inline-block px-8 py-3 bg-cyberteal/10 hover:bg-cyberteal/20 transition-colors text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
