import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this if it's not already present


function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set event date to April 17, 2025
    const eventDate = new Date('April 17, 2025 00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // When the countdown is finished, clear the timer and set all values to 0
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyberdark/80 to-cyberpurple/80 z-10"></div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          muted 
          loop
        >
          <source 
            src="/assets/cyberpunk.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 grid-bg"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center md:text-left max-w-3xl">
          <div className="flex justify-center md:justify-start mb-8">
            <img 
              src="/assets/155a3d61-7409-4984-9d30-cfc2aa37839a.png" 
              alt="Accolade Logo" 
              className="h-32 md:h-40 cyber-glow"
            />
          </div>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            The ultimate cyberpunk tech festival experience.<br />
            Join us for competitions, workshops, and innovation.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start space-x-4 mb-10">
            {[
              { label: 'DAYS', value: countdown.days },
              { label: 'HOURS', value: countdown.hours },
              { label: 'MINS', value: countdown.minutes },
              { label: 'SECS', value: countdown.seconds }
            ].map((item, index) => (
              <div key={index} className="cyber-border bg-cyberdark/50 backdrop-blur-sm p-3 md:p-4 w-16 md:w-24">
                <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                <div className="text-xs text-cyberteal">{item.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <Link 
              to="/events" 
              className="cyber-border px-8 py-3 bg-cyberblue hover:bg-cyberblue/80 transition-colors text-white text-lg"
              >
              Register Now
              </Link>

            <a 
              href="#about" 
              className="cyber-border px-8 py-3 bg-transparent hover:bg-neonblue/20 transition-colors text-white text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
