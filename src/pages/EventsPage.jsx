import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventModal from '../components/EventModal';

function EventsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const categories = ['All', 'Competition', 'Workshop', 'Exhibition', 'Talk'];
  
  // Create refs for each event card
  const cardRefs = useRef([]);
  
  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  
  const events = [ 
    {
      id: 1,
      title: "Artistein",
      category: "Competition",
      image: "/assets/Artstein.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScrCWcW3cQNzP_lsI1lXWdAxv2trpUOO5CeQGZUYTTlaJeBQQ/viewform"
    },
    {
      id: 2,
      title: "Squid Games",
      category: "Competition",
      image: "/assets/squid.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform"
    },
    {
      id: 3,
      title: "Shankhnaad",
      category: "Workshop",
      image: "/assets/shankhnaadmain.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScrCWcW3cQNzP_lsI1lXWdAxv2trpUOO5CeQGZUYTTlaJeBQQ/viewform"
    },
    {
      id: 4,
      title: "Tarang",
      category: "Competition",
      image: "/assets/tarang.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5vNDN5P0agq8b61Cn7PuFdWtmm6AAqgD5hlKTlXR2of1fBw/viewform"
    },
    {
      id: 5,
      title: "Code Hunt",
      category: "Exhibition",
      image: "/assets/codehunt.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfeabsFCY62B94oU8JOU8ZOB_EV2sWK7bW46sYkX8QkXvGWKQ/viewform"
    },
    {
      id: 6,
      title: "IOT Workshop",
      category: "Talk",
      image: "/assets/iot.png",
      description: "...",
      fullDescription: "...",
      details: [],
      schedule: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd_vyHrj4raAKa7JilzxVurKGme0br-s3ApwJaHyuJrGOX7ew/viewform"
    },
    {
      id: 7,
      title: "Game Development Jam",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&h=400",
      description: "Create a playable game in just 48 hours with your team",
      fullDescription: "Push your creativity and coding skills to the limit in our Game Development Jam. Form a team and build a complete, playable game based on a surprise theme revealed at the start of the event.",
      details: [
        "Teams of 1-4 participants",
        "All experience levels welcome",
        "Tools and engines provided",
        "Public showcase of all games"
      ],
      schedule: [
        { time: "Day 1, 9:00 AM", activity: "Theme Announcement" },
        { time: "Day 1, 10:00 AM", activity: "Development Begins" },
        { time: "Day 2, 10:00 AM", activity: "Progress Check-in" },
        { time: "Day 2, 10:00 PM", activity: "Submission Deadline" },
        { time: "Day 3, 1:00 PM", activity: "Public Showcase & Awards" }
      ]
    },
    {
      id: 8,
      title: "Blockchain Workshop",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=600&h=400",
      description: "Learn blockchain fundamentals and build your first dApp",
      fullDescription: "This comprehensive workshop will take you from blockchain basics to building your own decentralized application. Understand the technology behind cryptocurrencies and explore real-world applications beyond finance.",
      details: [
        "Basic coding knowledge required",
        "Hands-on practical sessions",
        "Take-home learning materials",
        "Certificate of completion"
      ],
      schedule: [
        { time: "9:30 AM", activity: "Blockchain Fundamentals" },
        { time: "11:00 AM", activity: "Smart Contract Development" },
        { time: "1:30 PM", activity: "Building a Simple dApp" },
        { time: "3:30 PM", activity: "Deployment & Best Practices" }
      ]
    },
    {
      id: 9,
      title: "Drone Racing",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&h=400",
      description: "Navigate custom-built drones through a challenging aerial course",
      fullDescription: "Experience the adrenaline of FPV (First Person View) drone racing as pilots navigate their custom-built quadcopters through gates, obstacles, and tunnels at speeds up to 120 km/h.",
      details: [
        "Open and amateur divisions",
        "Custom-built obstacle course",
        "FPV goggles experience station",
        "Drone building workshop available"
      ],
      schedule: [
        { time: "10:00 AM", activity: "Registration & Equipment Check" },
        { time: "11:30 AM", activity: "Qualification Rounds" },
        { time: "2:00 PM", activity: "Semi-Finals" },
        { time: "4:00 PM", activity: "Finals & Award Ceremony" }
      ]
    }
  ];
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);
    
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.style.setProperty('--x', `${x}px`);
    cardRef.style.setProperty('--y', `${y}px`);
  };
  
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, filteredEvents.length);
  }, [filteredEvents]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyberdark to-cyberpurple">
      <Navbar scrollY={scrollY} />
      
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 cyber-glow">ALL <span className="text-cyberblue">EVENTS</span></h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberteal to-cyberpink mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Discover all our exciting events and competitions. From hackathons to workshops, there's something for everyone.
            </p>
          </div>
          
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                ref={el => cardRefs.current[index] = el}
                className="spotlight cyber-card overflow-hidden group hover:transform hover:scale-[1.01] transition-all cursor-pointer rounded-md"
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
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <span 
                    className="inline-block text-cyberteal group-hover:text-neonblue transition-colors"
                  >
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
      
      <Footer />
    </div>
  );
}

export default EventsPage;
