
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyberdark p-4">
      <div className="cyber-border p-8 bg-cyberdark/80 backdrop-blur-md text-center max-w-lg">
        <h1 className="text-6xl font-bold mb-4 cyber-glow">404</h1>
        <h2 className="text-2xl font-bold mb-4 cyber-pink-glow">SYSTEM ERROR</h2>
        <p className="text-gray-300 mb-8">
          The digital pathway you're searching for does not exist in our mainframe.
        </p>
        <div className="cyber-glitch inline-block">
          <a 
            href="/" 
            className="cyber-border inline-block px-8 py-3 bg-cyberpink/20 hover:bg-cyberpink/40 transition-colors text-white"
          >
            Return to Mainframe
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
