
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EventModal from './EventModal';

function Events() {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const categories = ['All', 'Competition', 'Workshop', 'Exhibition', 'Talk'];
  
  const events = [
    {
      id: 1,
      title: "Hackathon",
      category: "Competition",
      image: "/assets/Artstein.png",
      description: "48-hour coding marathon to build innovative solutions to real-world problems",
      fullDescription: "Our flagship hackathon brings together the brightest minds to solve challenging problems in a 48-hour coding marathon. Participants will work in teams to develop innovative solutions using cutting-edge technologies.",
      details: [
        "Teams of 2-4 participants",
        "Prizes worth $10,000",
        "Mentorship from industry experts",
        "Hardware and API resources provided"
      ],
      schedule: [
        { time: "Day 1, 10:00 AM", activity: "Registration & Team Formation" },
        { time: "Day 1, 12:00 PM", activity: "Kickoff & Problem Statements" },
        { time: "Day 2, 10:00 AM", activity: "Mid-way Check" },
        { time: "Day 2, 8:00 PM", activity: "Final Submissions" },
        { time: "Day 3, 11:00 AM", activity: "Presentations & Judging" }
      ]
    },
    {
      id: 2,
      title: "Robowars",
      category: "Competition",
      image: "/assets/squid.png", 
      description: "Battle it out with your custom-built robots in this high-energy competition",
      fullDescription: "Robowars is an adrenaline-pumping robot combat competition where participants design and build remote-controlled machines to battle in an arena. Bring your most resilient and powerful robot to compete for glory.",
      details: [
        "Weight categories: 15kg, 30kg, 60kg",
        "Arena with hazards and obstacles",
        "Double elimination tournament",
        "Technical inspection required before battles"
      ],
      schedule: [
        { time: "Day 1, 2:00 PM", activity: "Technical Inspection" },
        { time: "Day 1, 5:00 PM", activity: "Preliminary Rounds" },
        { time: "Day 2, 3:00 PM", activity: "Quarter & Semi Finals" },
        { time: "Day 2, 7:00 PM", activity: "Finals & Award Ceremony" }
      ]
    },
    {
      id: 3,
      title: "AI Workshop",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
      description: "Learn the latest AI techniques from industry experts",
      fullDescription: "This hands-on workshop will introduce participants to the latest developments in artificial intelligence. Led by industry experts, you'll learn practical applications of machine learning, deep learning, and neural networks.",
      details: [
        "No prior experience required",
        "Laptop with Python installed needed",
        "Certificate of completion provided",
        "Take-home projects included"
      ],
      schedule: [
        { time: "10:00 AM", activity: "Introduction to AI Concepts" },
        { time: "11:30 AM", activity: "Hands-on with ML Models" },
        { time: "2:00 PM", activity: "Neural Networks Workshop" },
        { time: "4:00 PM", activity: "Building Your First AI Application" }
      ]
    },
    {
      id: 4,
      title: "Cyber Security CTF",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=400",
      description: "Test your hacking skills in this Capture The Flag event",
      fullDescription: "Our Capture The Flag (CTF) competition challenges security enthusiasts to solve a series of cybersecurity puzzles and challenges. Test your skills in cryptography, reverse engineering, web exploitation, and more.",
      details: [
        "Individual or team participation",
        "Jeopardy-style challenges",
        "Multiple difficulty levels",
        "Real-time scoreboard"
      ],
      schedule: [
        { time: "9:00 AM", activity: "Competition Begins" },
        { time: "12:00 PM", activity: "Hint Release" },
        { time: "5:00 PM", activity: "Competition Ends" },
        { time: "6:00 PM", activity: "Solutions & Award Ceremony" }
      ]
    },
    {
      id: 5,
      title: "AR/VR Expo",
      category: "Exhibition",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&h=400",
      description: "Experience cutting-edge augmented and virtual reality technology",
      fullDescription: "Step into the future at our AR/VR Expo, showcasing the latest innovations in augmented and virtual reality. Experience immersive demos from leading companies and startups pushing the boundaries of this technology.",
      details: [
        "Interactive demos available",
        "VR gaming competitions",
        "Industry expert panels",
        "Startup showcase area"
      ],
      schedule: [
        { time: "All Day", activity: "Open Exhibition" },
        { time: "11:00 AM", activity: "Industry Panel Discussion" },
        { time: "2:00 PM", activity: "VR Gaming Tournament" },
        { time: "4:00 PM", activity: "Startup Pitches" }
      ]
    },
    {
      id: 6,
      title: "Tech Talk Series",
      category: "Talk",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&h=400",
      description: "Inspiring talks from industry leaders and innovators",
      fullDescription: "Our Tech Talk series brings together visionaries, industry leaders, and innovators to share insights on emerging technologies, career development, and the future of tech. Get inspired and expand your network.",
      details: [
        "Q&A sessions after each talk",
        "Networking opportunities",
        "Access to speaker presentations",
        "Diverse range of tech topics"
      ],
      schedule: [
        { time: "10:00 AM", activity: "Keynote: Future of Tech" },
        { time: "12:00 PM", activity: "Panel: Breaking Into Tech" },
        { time: "2:00 PM", activity: "Talk: Blockchain Revolution" },
        { time: "4:00 PM", activity: "Talk: AI Ethics & Responsibility" }
      ]
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
