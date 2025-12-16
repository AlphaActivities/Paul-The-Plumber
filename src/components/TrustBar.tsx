import { Star, Award, CheckCircle, Shield } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function TrustBar() {
  const badges = [
    {
      icon: Star,
      text: 'Google Reviews',
      rating: false,
      gradient: 'from-yellow-400 via-amber-500 to-orange-500',
      glowColor: 'rgba(251, 191, 36, 0.6)',
      iconBg: 'from-yellow-400 to-amber-600'
    },
    {
      icon: CheckCircle,
      text: 'Angi Certified',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      glowColor: 'rgba(16, 185, 129, 0.6)',
      iconBg: 'from-emerald-500 to-green-700'
    },
    {
      icon: Award,
      text: 'BBB Accredited Business',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.6)',
      iconBg: 'from-blue-500 to-blue-700'
    },
    {
      icon: Shield,
      text: 'HomeAdvisor Approved',
      gradient: 'from-red-500 via-rose-600 to-pink-600',
      glowColor: 'rgba(239, 68, 68, 0.6)',
      iconBg: 'from-red-500 to-rose-700'
    },
  ];

  return (
    <section className="relative -mt-24 pt-32 pb-12" style={{
      background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.7) 100%)',
      zIndex: 10
    }}>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes rotate-in {
          from {
            transform: rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .luxury-badge {
          animation: rotate-in 0.6s ease-out forwards;
          perspective: 1000px;
        }

        .luxury-badge:nth-child(1) { animation-delay: 0.1s; }
        .luxury-badge:nth-child(2) { animation-delay: 0.2s; }
        .luxury-badge:nth-child(3) { animation-delay: 0.3s; }
        .luxury-badge:nth-child(4) { animation-delay: 0.4s; }

        .luxury-badge:hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <LazyLoad key={index} animation="fadeSlideUp" delay={index * 100} duration={600}>
                <div
                  className="luxury-badge relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 group overflow-hidden"
                style={{
                  '--glow-color': badge.glowColor,
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                     style={{
                       backgroundImage: `linear-gradient(135deg, ${badge.glowColor}, transparent)`
                     }}
                />

                <div className={`icon-container relative w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.iconBg} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                {badge.rating && (
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                )}

                <span className="font-bold text-gray-900 text-sm relative z-10 group-hover:text-gray-950 transition-colors duration-300">
                  {badge.text}
                </span>

                <div className={`absolute -inset-1 bg-gradient-to-r ${badge.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                </div>
              </LazyLoad>
            );
          })}
        </div>
      </div>
    </section>
  );
}
