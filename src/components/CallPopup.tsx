import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export default function CallPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Popup card */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-scaleIn">
        <div className="relative bg-gradient-to-br from-[#0056A4] via-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 border-4 border-white/20">

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
            aria-label="Close popup"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              AVAILABLE NOW
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Need a Plumber Now?
            </h2>

            {/* Subtext */}
            <p className="text-white/90 text-lg font-medium">
              Same-Day & Emergency Service Available
            </p>

            {/* Phone number display with doggy photo background */}
            <div className="relative rounded-xl shadow-xl overflow-hidden h-64">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/doggy-plumber.jpg)' }}
              />

              {/* Dark gradient overlay on bottom half for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/80" />

              {/* Luxurious ribbon banner at top with "Let's Talk Now" */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 flex items-center h-[30px]">
                {/* Left ribbon tail extending to the left */}
                <svg width="50" height="30" viewBox="0 0 50 30" className="drop-shadow-lg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="leftTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B0000" stopOpacity="0" />
                      <stop offset="80%" stopColor="#B22222" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#E42313" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="shineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="white" stopOpacity="0" />
                      <stop offset="100%" stopColor="black" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  {/* Ribbon tail with V-notch at the end - extends left */}
                  <path d="M 50,0 L 0,0 L 6,15 L 0,30 L 50,30 Z" fill="url(#leftTailGradient)" />
                  {/* Glossy shine overlay */}
                  <path d="M 50,0 L 0,0 L 6,15 L 0,30 L 50,30 Z" fill="url(#shineGradient)" opacity="0.4" />
                </svg>

                {/* Main ribbon body with glossy effect - fades from center to edges */}
                <div className="relative bg-gradient-to-r from-transparent via-[#E42313] to-transparent py-1.5 px-6 shadow-2xl backdrop-blur-sm min-w-[200px] h-[30px] flex items-center justify-center">
                  {/* Top shine for luxurious effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/15 pointer-events-none"></div>

                  <p className="relative text-white text-sm sm:text-base font-bold uppercase tracking-wide text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.9)' }}>
                    Let's Talk Now
                  </p>
                </div>

                {/* Right ribbon tail extending to the right */}
                <svg width="50" height="30" viewBox="0 0 50 30" className="drop-shadow-lg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="rightTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E42313" stopOpacity="1" />
                      <stop offset="20%" stopColor="#B22222" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#8B0000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="shineGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="white" stopOpacity="0" />
                      <stop offset="100%" stopColor="black" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  {/* Ribbon tail with V-notch at the end - extends right */}
                  <path d="M 0,0 L 50,0 L 44,15 L 50,30 L 0,30 Z" fill="url(#rightTailGradient)" />
                  {/* Glossy shine overlay */}
                  <path d="M 0,0 L 50,0 L 44,15 L 50,30 L 0,30 Z" fill="url(#shineGradientRight)" opacity="0.4" />
                </svg>
              </div>

              {/* Phone number at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-4">
                <a
                  href="tel:4025960200"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0056A4] hover:text-[#E42313] transition-colors flex items-center justify-center gap-3 whitespace-nowrap drop-shadow-lg"
                >
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
                  402-596-0200
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:4025960200"
              className="block w-full py-4 bg-gradient-to-r from-[#E42313] to-red-600 text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-white/80 font-semibold pt-2">
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Licensed & Insured
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> Background Checked
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-400">✓</span> 5.0 Star Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
