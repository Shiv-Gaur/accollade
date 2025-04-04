
import { useState, useEffect } from 'react';

function Preloader({ onLoadComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadComplete) onLoadComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-cyberdark">
      <div className="relative w-full max-w-[500px] h-[400px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-4">
          <div className="h-[100px] w-[40px] border-2 border-cyberblue shadow-[0_0_15px_rgba(26,95,180,0.5),inset_0_0_10px_rgba(26,95,180,0.3)] overflow-hidden relative animate-[glitchEffect1_4s_infinite]" 
               style={{ transform: 'skew(-10deg)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,240,0.5)] to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
          <div className="h-[100px] w-[40px] border-2 border-cyberblue shadow-[0_0_15px_rgba(26,95,180,0.5),inset_0_0_10px_rgba(26,95,180,0.3)] overflow-hidden relative animate-[glitchEffect2_4s_infinite]"
               style={{ transform: 'skew(-10deg)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,240,0.5)] to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
        
        <div className="absolute bottom-[30px] left-0 w-full text-center text-[#00fff0] text-[12px] font-mono opacity-70 animate-[dataFlicker_3s_infinite]">
          INITIALIZING SEQUENCE
        </div>
        
        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[200px] h-[2px] bg-[rgba(26,95,180,0.3)]">
          <div className="h-full w-0 bg-[#00fff0] shadow-[0_0_10px_#00fff0] animate-[loadProgress_4s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
