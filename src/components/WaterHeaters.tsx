import { Droplets, Award, Crown, Sparkles, Zap, Waves, Volume2, ThermometerSun, AlertOctagon } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function WaterHeaters() {
  return (
    <section id="water-heaters" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LazyLoad animation="fadeSlideUp">
            <div>
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-16 h-16 md:w-20 md:h-20 text-[#0056A4] flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Omaha Water Heater Repair & Installation Experts
              </h2>
            </div>

            <p className="text-xl text-black mb-6 leading-relaxed font-bold">
              Most water heaters last 10–15 years. If yours is showing its age, making strange noises, or not producing enough hot water, it may be time for service or replacement.
            </p>

            <p className="text-lg text-black mb-6 leading-relaxed font-bold">
              We provide honest recommendations based on your specific situation. Sometimes a simple repair is all you need. Other times, upgrading to a newer, more efficient model makes better financial sense.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { text: 'Tank & Tankless Installation', icon: Award },
                { text: 'Fast Repairs on All Major Brands', icon: Crown },
                { text: 'Upfront Quotes Before We Start', icon: Sparkles },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-7 h-7 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-lg font-bold text-black">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
              <p className="text-xl font-bold mb-5">Signs You Need Service:</p>
              <div className="space-y-4">
                {[
                  { text: 'Rusty or discolored water', icon: Waves },
                  { text: 'Strange rumbling or popping sounds', icon: Volume2 },
                  { text: 'Not enough hot water for your household', icon: ThermometerSun },
                  { text: 'Visible leaks or moisture around the unit', icon: AlertOctagon },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <Icon className="w-6 h-6 text-amber-400 flex-shrink-0" />
                      <span className="text-base font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
          </LazyLoad>

          <LazyLoad animation="fadeSlideUp" delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-[#E42313]">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-[#E42313] text-white rounded-full text-sm font-semibold mb-4">
                Not sure what you need?
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quick Water Heater Help
              </h3>
              <p className="text-black">
                Tell us what's going on and we'll guide you to the best solution for your home and budget.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Award className="w-10 h-10 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-900">Free Consultation</p>
                  <p className="text-sm text-black">No obligation assessment</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Zap className="w-10 h-10 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-900">Quick Response</p>
                  <p className="text-sm text-black">Same-day service available</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="block w-full px-4 py-2 bg-[#E42313] text-white rounded-full font-semibold text-sm text-center hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
            >
              Request Water Heater Help
            </a>
            </div>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}
