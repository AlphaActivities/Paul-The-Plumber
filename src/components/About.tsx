import { Home, Shield, DollarSign, Sparkles } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function About() {
  const reasons = [
    {
      icon: Home,
      title: 'Family-Owned & Operated',
      description: 'Local business with deep roots in the Omaha community.',
    },
    {
      icon: Shield,
      title: 'Background-Checked Technicians',
      description: 'Trustworthy professionals you can feel safe welcoming into your home.',
    },
    {
      icon: DollarSign,
      title: 'Upfront, Honest Pricing',
      description: 'Clear quotes before we start – no hidden fees or surprise charges.',
    },
    {
      icon: Sparkles,
      title: 'No-Mess, No-Stress Service',
      description: 'Shoe covers, clean workspace, and thorough cleanup after every job.',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Plumbing-general.PNG)' }}>
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Families Trust Paul The Plumber
            </h2>
          </div>
        </LazyLoad>

        <LazyLoad animation="fadeSlideUp" delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6 text-lg text-black leading-relaxed font-bold">
              <p>
                Paul The Plumber is a family-owned business serving Omaha and surrounding communities with honest, reliable plumbing services. We understand that inviting a service professional into your home is a big decision, which is why we prioritize trust, transparency, and respect in everything we do.
              </p>
              <p>
                Our team takes pride in treating every home as if it were our own. From wearing shoe covers to protecting your floors, to providing clear communication about what needs to be done and why, we go the extra mile to ensure you feel comfortable and confident in our work.
              </p>
              <p>
                We believe in upfront, honest pricing with no hidden fees. You'll know exactly what to expect before we start, and we'll never try to sell you services you don't need. Our goal is simple: solve the problem before it has a chance to hound you, and leave you with peace of mind that the job was done right.
              </p>
            </div>
          </div>
        </LazyLoad>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <LazyLoad key={index} animation="fadeSlideUp" delay={200 + index * 100} duration={600}>
                <div
                  className="relative bg-gradient-to-br from-white/95 via-blue-50/90 to-slate-50/95 backdrop-blur-sm border-2 border-white/60 rounded-3xl p-8 text-center shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-200/80 group"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#0056A4] via-blue-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-blue-100/50 group-hover:ring-blue-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="relative text-gray-800 leading-relaxed font-semibold">
                  {reason.description}
                </p>
                </div>
              </LazyLoad>
            );
          })}
        </div>
      </div>
    </section>
  );
}
