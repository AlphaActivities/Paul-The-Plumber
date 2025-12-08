import { MapPin } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function ServiceAreas() {
  const areas = [
    'Omaha',
    'Papillion',
    'La Vista',
    'Bellevue',
    'Ralston',
    'Gretna',
    'Elkhorn',
    'Bennington',
    'Millard',
    'Council Bluffs',
    'Springfield',
    'Plattsmouth',
    'Blair',
    'Fort Calhoun',
    'Waterloo',
    'Valley',
  ];

  return (
    <section id="areas" className="bg-white/70 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proudly Serving Omaha & Surrounding Communities
            </h2>
          </div>
        </LazyLoad>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LazyLoad animation="fadeSlideUp" delay={100}>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-12 h-12 text-[#E42313] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Local Plumbing Experts
                </h3>
                <p className="text-lg text-black leading-relaxed">
                  Based in Omaha, we serve the greater metro area and nearby communities. Our local expertise means we understand the unique plumbing challenges of Nebraska homes and arrive quickly when you need us.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-black mb-4">
                <strong className="text-gray-900">Fast Response Times:</strong> Being local means we can provide same-day service throughout our service area.
              </p>
              <p className="text-black">
                <strong className="text-gray-900">Don't see your area?</strong> Give us a call – we may still be able to help!
              </p>
            </div>
            </div>
          </LazyLoad>

          <LazyLoad animation="fadeSlideUp" delay={200}>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Communities We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-black"
                >
                  <div className="w-2 h-2 bg-[#E42313] rounded-full"></div>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            </div>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}
