
function Sponsors() {
  // Mock sponsor logos
  const sponsors = [
    { id: 1, name: "TechCorp", tier: "platinum" },
    { id: 2, name: "InnovateTech", tier: "platinum" },
    { id: 3, name: "Future Labs", tier: "gold" },
    { id: 4, name: "DigiSolutions", tier: "gold" },
    { id: 5, name: "CodeMasters", tier: "gold" },
    { id: 6, name: "ByteWorks", tier: "silver" },
    { id: 7, name: "CloudTech", tier: "silver" },
    { id: 8, name: "DataMinds", tier: "silver" },
    { id: 9, name: "AICore", tier: "silver" },
  ];
  
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-cyberpurple to-cyberdark relative parallax-section">
      {/* Parallax Background */}
      <div className="parallax-bg grid-bg opacity-5" data-speed="0.1"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-glow">OUR <span className="text-cyberpink">SPONSORS</span></h2>
          <div className="w-20 h-1 bg-cyberteal mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We're proud to partner with leading companies who share our vision of innovation and technology.
          </p>
        </div>
        
        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl text-center mb-6 text-cyberteal">PLATINUM SPONSORS</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors
              .filter(sponsor => sponsor.tier === "platinum")
              .map(sponsor => (
                <div 
                  key={sponsor.id}
                  className="cyber-border p-6 w-full md:w-64 h-32 flex items-center justify-center bg-cyberdark/40"
                >
                  <div className="text-2xl font-bold text-white cyber-glow">
                    {sponsor.name}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-xl text-center mb-6 text-cyberteal">GOLD SPONSORS</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors
              .filter(sponsor => sponsor.tier === "gold")
              .map(sponsor => (
                <div 
                  key={sponsor.id}
                  className="cyber-border p-5 w-48 h-24 flex items-center justify-center bg-cyberdark/40"
                >
                  <div className="text-xl font-bold text-white">
                    {sponsor.name}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Silver Sponsors */}
        <div>
          <h3 className="text-xl text-center mb-6 text-cyberteal">SILVER SPONSORS</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors
              .filter(sponsor => sponsor.tier === "silver")
              .map(sponsor => (
                <div 
                  key={sponsor.id}
                  className="cyber-border p-4 w-40 h-20 flex items-center justify-center bg-cyberdark/40"
                >
                  <div className="text-lg font-bold text-white">
                    {sponsor.name}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Become a Sponsor */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in becoming a sponsor?</h3>
          <a 
            href="#contact" 
            className="cyber-border inline-block px-8 py-3 bg-cyberpink/10 hover:bg-cyberpink/20 transition-colors text-white"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
