import { Flame, Wind, ArmchairIcon as Toilet, Droplets, Activity, Utensils, FilterIcon, Droplet, Gauge } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function Services() {
  const services = [
    {
      icon: Flame,
      name: 'Water Heaters',
      description: 'Installation, repair, and maintenance for tank and tankless systems.',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      icon: Wind,
      name: 'Drain Cleaning',
      description: 'Professional clearing of clogged drains and sewer lines.',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: Toilet,
      name: 'Toilet Repair & Installation',
      description: 'Fix running toilets, leaks, and install new efficient models.',
      gradient: 'from-cyan-500 to-teal-600',
    },
    {
      icon: Droplets,
      name: 'Faucet Repair & Replacement',
      description: 'Stop drips and upgrade to modern, water-efficient fixtures.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Activity,
      name: 'Pipe Leaks & Burst Pipes',
      description: 'Emergency repairs and permanent solutions for pipe problems.',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      icon: Utensils,
      name: 'Garbage Disposals',
      description: 'Installation, repair, and replacement of disposal units.',
      gradient: 'from-slate-500 to-gray-600',
    },
    {
      icon: FilterIcon,
      name: 'Water Filtration Systems',
      description: 'Whole-home and point-of-use filtration for cleaner water.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      icon: Droplet,
      name: 'Water Softeners',
      description: 'Installation and service to protect your pipes and appliances.',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Gauge,
      name: 'Sump Pumps',
      description: 'Keep your basement dry with reliable sump pump service.',
      gradient: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <section id="services" className="bg-white/70 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hassle-Free Plumbing Services for Omaha Homes
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our family-friendly, respectful technicians treat your home with care and provide expert solutions for all your plumbing needs.
            </p>
          </div>
        </LazyLoad>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <LazyLoad key={index} animation="fadeSlideUp" delay={index * 100} duration={600}>
                <div
                  className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0056A4] transition-colors duration-300">
                      {service.name}
                    </h3>

                    <p className="text-gray-700 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              </LazyLoad>
            );
          })}
        </div>
      </div>
    </section>
  );
}
