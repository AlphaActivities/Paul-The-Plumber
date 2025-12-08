import { Tag } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function Coupons() {
  const coupons = [
    {
      title: '$25 OFF Any Plumbing Repair',
      conditions: 'Minimum service of $150. New customers only.',
    },
    {
      title: '$50 OFF Water Heater Installation',
      conditions: 'Valid on new water heater installations. Cannot be combined.',
    },
    {
      title: '$100 OFF Whole-Home Water Filtration',
      conditions: 'Complete system installation. Mention at booking.',
    },
    {
      title: 'FREE Drain Camera Inspection',
      conditions: 'With any drain cleaning service over $200.',
    },
  ];

  return (
    <section id="coupons" className="bg-white/70 py-20">
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes background-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animated-gradient-border {
          position: relative;
          background: linear-gradient(90deg, #0056A4, #E42313, #0056A4, #E42313);
          background-size: 300% 100%;
          animation: gradient-shift 8s ease infinite;
          padding: 3px;
          border-radius: 1rem;
        }
        .animated-gradient-content {
          background: linear-gradient(
            135deg,
            rgba(0, 86, 164, 0.08),
            rgba(228, 35, 19, 0.08),
            rgba(0, 86, 164, 0.12),
            rgba(228, 35, 19, 0.12),
            rgba(0, 86, 164, 0.08)
          );
          background-size: 400% 400%;
          animation: background-flow 10s ease infinite;
          border-radius: calc(1rem - 3px);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="animated-gradient-border shadow-xl">
              <div className="animated-gradient-content p-8 md:p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Current Specials & Coupons
                </h2>
                <p className="text-xl text-white">
                  Save on quality plumbing services with our current offers
                </p>
              </div>
            </div>
          </div>
        </LazyLoad>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {coupons.map((coupon, index) => (
            <LazyLoad key={index} animation="fadeSlideUp" delay={index * 150} duration={600}>
              <div
                className="bg-white border-2 border-dashed border-[#E42313] rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E42313] rounded-full flex items-center justify-center flex-shrink-0">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0056A4] mb-2">
                    {coupon.title}
                  </h3>
                  <p className="text-sm text-black mb-4">{coupon.conditions}</p>
                  <a
                    href="#contact"
                    className="inline-block px-6 py-2 bg-[#0056A4] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Claim This Coupon
                  </a>
                </div>
              </div>
              </div>
            </LazyLoad>
          ))}
        </div>

        <div className="text-center text-sm text-black max-w-3xl mx-auto">
          <p>
            One coupon per household. Must be mentioned at the time of booking. Not valid with other offers. Coupons subject to change without notice.
          </p>
        </div>
      </div>
    </section>
  );
}
