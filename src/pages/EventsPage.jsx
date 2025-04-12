import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventModal from '../components/EventModal';

function EventsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const categories = ['All', 'Ground Events', 'Workshop', 'Competition'];
  
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
      description: "A thrilling, multi-level challenge inspired by the popular Netflix series." ,
      fullDescription: "A thrilling, multi-level challenge inspired by the popular Netflix series. Players must survive four rounds blending individual skill and teamwork, including iconic games like Red Light Green Light and mystery rounds revealed only during the event. Strategy, speed, and sharp instincts are essential—only the strongest and smartest make it to the end",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Squid Games.pdf"
    },
    {
      id: 3,
      title: "Shankhnaad",
      category: "Competition",
      image: "/assets/shankhnaadmain.png",
      description: "...",
      fullDescription: "...",
      details: [],
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
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfeabsFCY62B94oU8JOU8ZOB_EV2sWK7bW46sYkX8QkXvGWKQ/viewform"
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
    },
    {
      id: 7,
      title: "Open Mic",
      category: "Workshop",
      image: "/assets/openmic.png",
      description: "Where Silence Ends and Stories Begin ,The stage doesn’t judge.",
      fullDescription: "A mic, a spotlight, and your voice that’s all it takes to spark a connection. Sing your heart out, spit some poetry, crack them up with stand-up, or share the untold stroy the Open Mic welcomes your vibe, your story, your art.No filters. Just raw emotions and real applause.",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd_vyHrj4raAKa7JilzxVurKGme0br-s3ApwJaHyuJrGOX7ew/viewform",
      pdfLink: "/assets/Shankhnaad.pdf"
    },
    {
      id: 8,
      title: "Build AI",
      category: "Competition",
      image: "/assets/buildai.png",
      description: "...",
      fullDescription: "...",
      details: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd_vyHrj4raAKa7JilzxVurKGme0br-s3ApwJaHyuJrGOX7ew/viewform",
      pdfLink: "/assets/TDH workshops.pdf"
    },
    {
      id: 9,
      title: "Chess",
      category: "Ground Events",
      image: "/assets/grnd.png",
      description: "An intellectual battleground where strategic prowess meets mental endurance.​",
      fullDescription: "An intellectual battleground where strategic prowess meets mental endurance. Participants will face off in classic chess matches under FIDE rules, progressing through knock-out and round-robin formats. Victory hinges on foresight, discipline, and precision. The event emphasizes silence, fair play, and sharp minds in this timeless game of wits.​",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Chess.pdf"
    },
    {
      id: 10,
      title: "Gully Cricket",
      category: "Ground Events",
      image: "/assets/grnd.png",
      description: "Experience the thrill of street-style cricket with our 5-a-side, knockout-format event! ",
      fullDescription: "Experience the thrill of street-style cricket with our 5-a-side, knockout-format event! With quick 4-over matches (5 in the final), quirky rules like “one tip one hand is out,” and fun twists on boundaries and scoring, Gully Cricket is all about energy, excitement, and community spirit. All equipment provided—just bring your game!",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Gully Cricket.pdf"
    },
    {
      id: 11,
      title: "The Upside Down",
      category: "Ground Events",
      image: "/assets/grnd.png",
      description: "Experience the thrill of street-style cricket with our 5-a-side, knockout-format event!",
      fullDescription: "Experience the thrill of street-style cricket with our 5-a-side, knockout-format event! With quick 4-over matches (5 in the final), quirky rules like “one tip one hand is out,” and fun twists on boundaries and scoring, Gully Cricket is all about energy, excitement, and community spirit. All equipment provided—just bring your game!",
      details: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Treasure Hunt.pdf"
    },
    {
      id: 12,
      title: "Short film Competition",
      category: "Ground Events",
      image: "/assets/shankhnaad.png",
      description: "...",
      fullDescription: "...",
      details: [],
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScw3v3cjljFw1FAXnamNeFtzNNh_UmH2zqXX_PbX-7rN9QXSA/viewform",
      pdfLink: "/assets/Shankhnaad.pdf"
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
