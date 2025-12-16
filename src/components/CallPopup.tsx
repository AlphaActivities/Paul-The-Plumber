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

              {/* Luxurious 3D ribbon banner */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}>
                {/* Left ribbon tail with 3D fold effect */}
                <svg width="60" height="48" viewBox="0 0 60 48" className="relative" style={{ marginRight: '-2px' }}>
                  <defs>
                    {/* Main ribbon gradient for left tail */}
                    <linearGradient id="leftRibbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF4545" />
                      <stop offset="50%" stopColor="#E42313" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                    {/* Darker fold gradient */}
                    <linearGradient id="leftFoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#B91C1C" />
                      <stop offset="50%" stopColor="#991B1B" />
                      <stop offset="100%" stopColor="#7F1D1D" />
                    </linearGradient>
                    {/* Glossy shine */}
                    <linearGradient id="leftShineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                      <stop offset="30%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="70%" stopColor="transparent" />
                      <stop offset="100%" stopColor="black" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Main tail surface */}
                  <path d="M 60,0 L 15,0 L 10,24 L 15,48 L 60,48 Z" fill="url(#leftRibbonGrad)" />
                  {/* V-notch fold - darker for depth */}
                  <path d="M 15,0 L 0,12 L 10,24 L 15,48 L 0,36 L 10,24 Z" fill="url(#leftFoldGrad)" />
                  {/* Glossy overlay on main surface */}
                  <path d="M 60,0 L 15,0 L 10,24 L 15,48 L 60,48 Z" fill="url(#leftShineGrad)" />
                  {/* Subtle highlight on fold edge */}
                  <path d="M 15,0 L 10,24 L 15,48" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Main ribbon body */}
                <div className="relative px-8 py-2 bg-gradient-to-b from-[#FF4545] via-[#E42313] to-[#B91C1C]" style={{ height: '48px', minWidth: '220px' }}>
                  {/* Top glossy shine */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none" style={{ height: '40%' }}></div>

                  {/* Bottom shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" style={{ top: '60%' }}></div>

                  {/* Gold trim on top edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>

                  {/* Gold trim on bottom edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>

                  {/* Text container */}
                  <div className="relative h-full flex items-center justify-center">
                    <p
                      className="text-white text-base sm:text-lg font-bold uppercase tracking-[0.15em] text-center select-none"
                      style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.2)',
                        letterSpacing: '0.15em'
                      }}
                    >
                      Let's Talk Now
                    </p>
                  </div>
                </div>

                {/* Right ribbon tail with 3D fold effect */}
                <svg width="60" height="48" viewBox="0 0 60 48" className="relative" style={{ marginLeft: '-2px' }}>
                  <defs>
                    {/* Main ribbon gradient for right tail */}
                    <linearGradient id="rightRibbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF4545" />
                      <stop offset="50%" stopColor="#E42313" />
                      <stop offset="100%" stopColor="#B91C1C" />
                    </linearGradient>
                    {/* Darker fold gradient */}
                    <linearGradient id="rightFoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#B91C1C" />
                      <stop offset="50%" stopColor="#991B1B" />
                      <stop offset="100%" stopColor="#7F1D1D" />
                    </linearGradient>
                    {/* Glossy shine */}
                    <linearGradient id="rightShineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                      <stop offset="30%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="70%" stopColor="transparent" />
                      <stop offset="100%" stopColor="black" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {/* Main tail surface */}
                  <path d="M 0,0 L 45,0 L 50,24 L 45,48 L 0,48 Z" fill="url(#rightRibbonGrad)" />
                  {/* V-notch fold - darker for depth */}
                  <path d="M 45,0 L 60,12 L 50,24 L 45,48 L 60,36 L 50,24 Z" fill="url(#rightFoldGrad)" />
                  {/* Glossy overlay on main surface */}
                  <path d="M 0,0 L 45,0 L 50,24 L 45,48 L 0,48 Z" fill="url(#rightShineGrad)" />
                  {/* Subtle highlight on fold edge */}
                  <path d="M 45,0 L 50,24 L 45,48" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
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
