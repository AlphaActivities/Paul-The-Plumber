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
            <div className="relative rounded-xl shadow-xl overflow-hidden" style={{ minHeight: '240px' }}>
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/doggy-plumber.jpg)' }}
              />

              {/* Dark gradient overlay on bottom half for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 pb-8">
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2 drop-shadow-lg">
                  Call us Directly
                </p>
                <a
                  href="tel:4025960200"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-[#E42313] transition-colors flex items-center justify-center gap-2 whitespace-nowrap drop-shadow-lg"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
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
