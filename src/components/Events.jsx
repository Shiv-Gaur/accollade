
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EventModal from './EventModal';

function Events() {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const categories = ['All', 'Ground Events', 'Workshop', 'Competition'];
  
  const events = [
    {
      id: 1,
      title: "Artistein",
      category: "Competition",
      image: "/assets/Artstein.png",
      description: "Step into the world of colors, creativity, and cash prizes with Artistein! Join us for 2 exciting workshops—learn the art of Digital Illustration or dive into the cozy craft of Crochet Making and walk away with cool new skills.",
      details: ["Step into the world of colors, creativity, and cash prizes with Artistein! Join us for 2 exciting workshops—learn the art of Digital Illustration or dive into the cozy craft of Crochet Making and walk away with cool new skills.",
        "Feeling competitive? Take part in our 4 vibrant competitions: show off your talent in Sketching & Painting, go traditional with Mehendi Moments, rule the ramp in our Fashion Show, or team up with a friend for the wildly fun Duo Art Swap!Big prizes, bigger fun—Artistein is where your art shines!"
      ],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScrCWcW3cQNzP_lsI1lXWdAxv2trpUOO5CeQGZUYTTlaJeBQQ/viewform",
      pdfLink: "/assets/Artistein.pdf"
    },
    {
      id: 2,
      title: "Squid Games",
      category: "Ground Events",
      image: "/assets/squid.png",
      description: "Get ready to unleash your inner champion at Accolade 3.0 with a thrilling lineup of games! First, strategise and outwit your opponent in the timeless battle of minds with Chess. Then, feel the raw power and teamwork as you lock horns in the ultimate test of strength in Tug of War. Switch gears and dive into the chaotic fun of Gully Cricket, where improvised rules and street smarts reign supreme. Prepare to enter the eerie world of the Upside Down in our Treasure Hunt, themed 'Stranger Things', where you'll decipher cryptic clues and race against time to uncover hidden treasures from another dimension. Push your limits in the Bahubali Pushups competition, testing your endurance and strength like the mighty warrior himself. Finally, brace yourselves for a unique and exciting take on the global phenomenon, Squid Game (rest assured, Accolade 3.0's version will be all about fun and friendly competition!). Don't miss out on this epic showdown of skill, strength, strategy, and sheer fun!",
      fullDescription: "Get ready to unleash your inner champion at Accolade 3.0 with a thrilling lineup of games! First, strategise and outwit your opponent in the timeless battle of minds with Chess. Then, feel the raw power and teamwork as you lock horns in the ultimate test of strength in Tug of War. Switch gears and dive into the chaotic fun of Gully Cricket, where improvised rules and street smarts reign supreme. Prepare to enter the eerie world of the Upside Down in our Treasure Hunt, themed 'Stranger Things', where you'll decipher cryptic clues and race against time to uncover hidden treasures from another dimension. Push your limits in the Bahubali Pushups competition, testing your endurance and strength like the mighty warrior himself. Finally, brace yourselves for a unique and exciting take on the global phenomenon, Squid Game (rest assured, Accolade 3.0's version will be all about fun and friendly competition!). Don't miss out on this epic showdown of skill, strength, strategy, and sheer fun!",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Squid Games.pdf"
    },
    {
      id: 3,
      title: "Shankhnaad",
      category: "Competition",
      image: "/assets/shankhnaadmain.png",
      description: "Shankhnaad 2025 A celebration of creativity,Shankhnaad features a short film competition and an open mic event. From powerful short film to expressive performances in poetry, comedy, rap, and more—it's a stage for storytellers and artists to shine.",
      fullDescription: "A celebration of creativity, Shankhnaad features a short film competition and an open mic event. From powerful short films to expressive performances in poetry, comedy, rap, and more—it's a stage for storytellers and artists to shine.

",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScrCWcW3cQNzP_lsI1lXWdAxv2trpUOO5CeQGZUYTTlaJeBQQ/viewform",
      pdfLink: "/assets/Shankhnad.pdf"
    },
    {
      id: 4,
      title: "Tarang",
      category: "Competition",
      image: "/assets/tarang.png",
      description: "This is more than just a competition – it's a celebration of talent.Winners will be awarded certificates, medals, and cash prizes.More importantly, every participant will walk away with enhanced confidence, valuable exposure, and a platform to grow.",
      fullDescription: "This is more than just a competition – it's a celebration of talent.Winners will be awarded certificates, medals, and cash prizes.More importantly, every participant will walk away with enhanced confidence, valuable exposure, and a platform to grow.",
      details: ["Nrityotsav – A Stage for Every Performer",
      "Whether you’re performing solo or as part of a group, Nritautsav is your chance to shine and express your passion.",
      "Swaryudh – our dynamic singing competition invites voices from every genre and style. From classical to contemporary, Indian to Western, all forms of artistic expression are welcome."],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5vNDN5P0agq8b61Cn7PuFdWtmm6AAqgD5hlKTlXR2of1fBw/viewform",
      pdfLink: "/assets/Tarang.pdf"
    },
    {
      id: 5,
      title: "Code Hunt",
      category: "Competition",
      image: "/assets/codehunt.png",
      description: "Dive into a world of logic, mystery, and code-breaking brilliance! CODE HUNT is an exhilarating individual event designed for sharp minds who love a challenge. Conducted in a hybrid format, this two-round competition will test your programming prowess, puzzle-solving skills, and analytical thinking.",
      fullDescription: "Dive into a world of logic, mystery, and code-breaking brilliance! CODE HUNT is an exhilarating individual event designed for sharp minds who love a challenge. Conducted in a hybrid format, this two-round competition will test your programming prowess, puzzle-solving skills, and analytical thinking.",
      details: ["Round 1: Digital Quest – A fast-paced 60-minute session packed with logical puzzles and tech-focused MCQs.",
        "Round 2: The Cipher Hunt – A thrilling 2–3 hour journey through a labyrinth of ciphers, riddles, and clues."],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfeabsFCY62B94oU8JOU8ZOB_EV2sWK7bW46sYkX8QkXvGWKQ/viewform",
      pdfLink: "/assets/CODE HUNT RULE.pdf"
    },
    {
      id: 6,
      title: "IOT Workshop",
      category: "Workshop",
      image: "/assets/iot.png",
      description: "Dive into the world of the Internet of Things with our hands-on IOT Workshop.",
      fullDescription: "The IOT Workshop offers a beginner-friendly, hands-on introduction to the Internet of Things. Participants will explore how to control hardware with software, learn core concepts like Cloud and Edge Computing, and apply their skills by building a mini project.",
      details: [
        "IOT Workshop",
        "Participants will learn basics of IoT",
        "Will learn how to control hardware components with software",
        "Will learn basics of Cloud Computing and Edge Computing",
        "Will make a mini project"
      ],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd_vyHrj4raAKa7JilzxVurKGme0br-s3ApwJaHyuJrGOX7ew/viewform",
      pdfLink: "/assets/TDH workshops.pdf"
    }
  ];
  
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);
    
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };
  
  // Create refs for each event card
  const cardRefs = useRef(events.map(() => React.createRef()));
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);
  
  return (
    <section id="events" className="py-20 cyber-pattern relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-glow">FEATURED <span className="text-cyberblue">EVENTS</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberteal to-cyberpink mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge tech events and competitions designed to challenge your skills and expand your horizons.
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
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.slice(0, 6).map((event, index) => (
            <div 
              key={event.id} 
              ref={cardRefs.current[index]}
              className="spotlight cyber-card overflow-hidden group cursor-pointer rounded-md"
              onMouseMove={(e) => handleMouseMove(e, cardRefs.current[index])}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cyberdark via-cyberdark/50 to-transparent z-10"></div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-cyberblue to-cyberpink text-white text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6 border-t border-cyberblue/30">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:cyber-glow transition-all duration-300">{event.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block text-cyberteal group-hover:text-neonblue transition-colors">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-cyberteal/50 group-hover:border-neonblue group-hover:bg-cyberteal/10 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyberteal group-hover:text-neonblue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/events" 
            className="cyber-border inline-block px-8 py-3 bg-gradient-to-r from-cyberblue/20 to-cyberteal/20 hover:from-cyberblue/30 hover:to-cyberteal/30 transition-all duration-300 text-white"
          >
            View All Events
          </Link>
        </div>
      </div>
      
      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </section>
  );
}

export default Events;
