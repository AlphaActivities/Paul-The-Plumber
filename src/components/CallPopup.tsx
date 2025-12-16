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

              {/* Sleek premium banner tag */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))' }}>
                <div className="relative flex items-center">
                  {/* Left angled edge */}
                  <svg width="20" height="36" viewBox="0 0 20 36" className="relative" style={{ marginRight: '-1px' }}>
                    <defs>
                      <linearGradient id="leftEdgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1F2937" />
                        <stop offset="100%" stopColor="#111827" />
                      </linearGradient>
                      <linearGradient id="leftShine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,8 L 20,0 L 20,36 L 0,28 Z" fill="url(#leftEdgeGrad)" />
                    <path d="M 0,8 L 20,0 L 20,36 L 0,28 Z" fill="url(#leftShine)" />
                  </svg>

                  {/* Main banner body with metallic finish */}
                  <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 px-6 flex items-center justify-center" style={{ height: '36px', minWidth: '200px' }}>
                    {/* Top metallic shine */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10"></div>

                    {/* Red accent stripe on top */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>

                    {/* Red accent stripe on bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80"></div>

                    {/* Gold center line */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

                    {/* Text */}
                    <div className="relative flex items-center gap-2">
                      <p
                        className="text-white text-sm font-bold uppercase tracking-[0.2em] select-none"
                        style={{
                          textShadow: '0 0 10px rgba(239, 68, 68, 0.5), 0 2px 4px rgba(0,0,0,0.8)',
                          letterSpacing: '0.2em'
                        }}
                      >
                        Let's Talk Now
                      </p>
                    </div>
                  </div>

                  {/* Right angled edge */}
                  <svg width="20" height="36" viewBox="0 0 20 36" className="relative" style={{ marginLeft: '-1px' }}>
                    <defs>
                      <linearGradient id="rightEdgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1F2937" />
                        <stop offset="100%" stopColor="#111827" />
                      </linearGradient>
                      <linearGradient id="rightShine" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,0 L 20,8 L 20,28 L 0,36 Z" fill="url(#rightEdgeGrad)" />
                    <path d="M 0,0 L 20,8 L 20,28 L 0,36 Z" fill="url(#rightShine)" />
                  </svg>
                </div>
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
