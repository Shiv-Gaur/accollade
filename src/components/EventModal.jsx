
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

function EventModal({ event, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  if (!event) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-md py-8 px-4">
      <div 
        ref={modalRef}
        className="cyber-panel w-full max-w-3xl modal-animation relative max-h-[90vh] rounded-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-30">
          <button 
            onClick={onClose}
            className="bg-cyberpink hover:bg-cyberpink/80 p-2 rounded-full transition-colors shadow-lg shadow-cyberpink/20"
            aria-label="Close modal"
          >
            <X className="text-white" size={20} />
          </button>
        </div>
        
        <div className="h-72 sm:h-80 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyberdark/70 to-cyberdark z-10"></div>
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 z-20 max-w-[80%]">
            <span className="inline-block bg-gradient-to-r from-cyberblue to-cyberpink text-white px-3 py-1.5 text-sm mb-3 rounded-sm">
              {event.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold cyber-glow">{event.title}</h3>
          </div>
        </div>
        
        <div 
          ref={contentRef} 
          className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)] scrollbar-thin scrollbar-thumb-cyberteal/30 scrollbar-track-transparent"
        >
          <div className="space-y-4 mb-6">
            <p className="text-gray-300 text-lg">{event.fullDescription || event.description}</p>
            
            {event.details && (
              <div className="mt-6 cyber-border p-5 bg-cyberindigo/30 rounded-md">
                <h4 className="text-xl font-bold mb-4 text-cyberteal">Event Details</h4>
                <div className="space-y-3">
                  {event.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-cyberteal mr-2">✦</div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {event.schedule && (
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-cyberteal">Schedule</h4>
                <div className="space-y-3">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between cyber-border bg-cyberindigo/20 p-4 rounded-md hover:bg-cyberindigo/30 transition-colors duration-300">
                      <span className="font-semibold text-neonblue mb-1 sm:mb-0">{item.time}</span>
                      <span className="text-white">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-end">
          {event.registrationLink ? (
            <a 
              href={event.registrationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-border px-8 py-3 bg-gradient-to-r from-cyberblue to-cyberpink hover:opacity-90 transition-all duration-300 text-white rounded-sm"
            >
              Register for this Event
            </a>
          ) : (
            <span className="text-gray-400 italic">Registration link coming soon</span>
          )}

          {event.pdfLink && (
            <a 
              href={event.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-border px-8 py-3 bg-gradient-to-r from-cyberpink to-cyberblue hover:opacity-90 transition-all duration-300 text-white rounded-sm"
            >
              View Rules
            </a>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
