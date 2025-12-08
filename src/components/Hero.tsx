import { Phone, Calendar, ShieldCheck, Heart, BadgeDollarSign, Crown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-transparent text-gray-900 pt-[482px] md:pt-32 pb-24 overflow-x-hidden" style={{ zIndex: 20 }}>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 60px rgba(0, 86, 164, 0.8),
                        0 0 120px rgba(0, 86, 164, 0.4),
                        inset 0 0 40px rgba(228, 35, 19, 0.1);
          }
          50% {
            box-shadow: 0 0 80px rgba(228, 35, 19, 0.9),
                        0 0 140px rgba(228, 35, 19, 0.5),
                        inset 0 0 60px rgba(228, 35, 19, 0.2);
          }
        }

        .hero-shimmer-inner {
          position: relative;
          overflow: hidden;
        }

        .hero-shimmer-inner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 10%,
            rgba(228, 35, 19, 0.2) 35%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(228, 35, 19, 0.2) 65%,
            transparent 90%,
            transparent 100%
          );
          animation: shimmer 8s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .hero-shimmer-inner > * {
          position: relative;
          z-index: 1;
        }

        .emergency-pulse {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end justify-items-start">
          <div className="max-w-sm rounded-2xl shadow-2xl border-4 border-[#0056A4] lg:shadow-[0_0_60px_rgba(0,86,164,0.8),0_0_120px_rgba(0,86,164,0.4)] w-full md:w-auto">
            <div className="rounded-2xl bg-white/50 p-8 backdrop-blur hero-shimmer-inner">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                <span className="text-[#E42313]">Don't Let</span> Plumbing Problems <span className="text-[#E42313] whitespace-nowrap">Hound You</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-black leading-relaxed text-center md:text-left">
                Paul The Plumber provides fast, friendly,
                expert plumbing service for Omaha and
                nearby communities,
                without leaving your family in the doghouse.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { text: 'Licensed, Insured & Bonded', icon: ShieldCheck, gradient: 'from-blue-600 to-blue-800' },
                  { text: 'Fast, Friendly, Family-Owned', icon: Heart, gradient: 'from-red-500 to-red-700' },
                  { text: 'Upfront Pricing – No Surprises', icon: BadgeDollarSign, gradient: 'from-green-600 to-emerald-700' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg transform transition-transform hover:scale-110`}>
                      <item.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-base font-bold text-black">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="tel:4025960200"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E42313] text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl w-full max-w-xs"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/50 text-black rounded-2xl shadow-2xl p-8 backdrop-blur border-4 border-[#0056A4] emergency-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-rose-700 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Crown className="w-9 h-9 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0056A4]">Same-Day & Emergency Service Available, Call Now</h3>
                </div>
              </div>
              <p className="text-black text-lg leading-relaxed mb-6">
                <strong>We understand plumbing emergencies don't wait. That's why we offer same-day service and are available for emergency repairs when you need us most.</strong>
              </p>
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <a href="tel:4025960200" className="flex items-center gap-4 transition-all hover:scale-105">
                  <Phone className="w-6 h-6 text-[#E42313]" />
                  <span className="text-3xl font-bold text-[#E42313]">402-596-0200</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-[#0056A4] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-all hover:scale-105 shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
