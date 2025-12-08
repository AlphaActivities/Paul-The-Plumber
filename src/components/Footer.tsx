import React from "react";
import { Phone, Facebook, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Strip */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs md:text-sm">
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/60 bg-slate-900/70 px-3 py-1">
              <span className="text-yellow-400 text-sm">⭐</span>
              <span className="uppercase tracking-[0.14em]">
                Omaha's Trusted Plumbing Team
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/60 bg-slate-900/70 px-3 py-1">
              <span className="text-sky-400 text-sm">🔒</span>
              <span className="uppercase tracking-[0.14em]">
                Licensed • Insured • Bonded
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/60 bg-slate-900/70 px-3 py-1">
              <span className="text-sky-400 text-sm">🚚</span>
              <span className="uppercase tracking-[0.14em]">
                Same-Day & Emergency Service Available
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand / Authority Column */}
          <div className="space-y-6">
            <div className="space-y-3 text-center flex flex-col items-center">
              <img
                src="/images/paul-white-logo.png"
                alt="Paul The Plumber"
                className="h-20 sm:h-24 w-auto"
              />
              <p className="text-sm text-gray-400 max-w-md">
                Fast, friendly, expert plumbing service for Omaha families,
                with honest pricing and clean, respectful techs in your home.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <div className="text-yellow-400 text-lg leading-none">
                ★★★★★
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                <span className="font-semibold text-white">5.0</span>{" "}
                <span className="text-gray-400">
                  rating on Google Maps
                </span>
              </div>
            </div>

            {/* Find Us Online */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.16em] text-gray-400 text-center">
                Find Us Online
              </div>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://www.facebook.com/1paultheplumber/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80 hover:scale-105 transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.yelp.com/biz/paul-the-plumber-omaha"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 hover:scale-105 transition-all duration-300"
                  title="Yelp"
                >
                  <div className="text-white font-black text-2xl leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    y
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.bbb.org/us/ne/omaha/profile/plumber/paul-the-plumber-0714-300007279"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 shadow-lg shadow-blue-950/60 hover:shadow-blue-950/90 hover:scale-105 transition-all duration-300"
                  title="BBB Accredited"
                >
                  <div className="text-white font-black text-[10px] leading-none tracking-tighter" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    BBB
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-4 text-base">
              <a
                href="#home"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Services
              </a>
              <a
                href="#coupons"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Coupons
              </a>
              <a
                href="#reviews"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Reviews
              </a>
              <a
                href="#areas"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Service Areas
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white hover:translate-x-1 transition-all relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-400/90 hover:after:w-full after:transition-all"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-base text-gray-300">
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Omaha, NE
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Papillion, NE
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Bellevue, NE
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                La Vista, NE
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Elkhorn, NE
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Gretna, NE
              </span>
            </div>
            <a
              href="https://www.google.com/maps/place/Paul+The+Plumber/@41.2229,-96.1422599,17z/data=!3m1!4b1!4m6!3m5!1s0x8793f3c47e6ef9d9:0xa3759d352444721d!8m2!3d41.222896!4d-96.139685!16s%2Fg%2F11sf619nx2?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="block relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform group"
            >
              <img
                src="/images/map-service-area.png"
                alt="Service Area Map - Click to view on Google Maps"
                className="w-full h-auto"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 rounded-lg shadow-xl shadow-emerald-900/60 group-hover:shadow-emerald-900/80 group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                <div className="relative flex items-center justify-center w-6 h-6">
                  <MapPin className="w-5 h-5 text-white drop-shadow-lg" fill="white" />
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                </div>
                <span className="text-white font-semibold text-sm tracking-wide drop-shadow-md">
                  Google Maps
                </span>
              </div>
            </a>
          </div>

          {/* Contact + Social / 4th Column */}
          <div className="space-y-5">
            <div className="space-y-3 flex flex-col items-center text-center">
              <h4 className="font-bold text-lg">Contact Us</h4>
              <div className="space-y-1">
                <a
                  href="tel:14025960200"
                  className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-400 hover:text-red-500 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  402-596-0200
                </a>
                <div className="text-sm text-gray-300">
                  Fast response for urgent leaks, backups, and no-hot-water calls.
                </div>
              </div>

              <div className="text-sm text-gray-300 space-y-1">
                <div>Serving Omaha & surrounding communities</div>
                <div>Same-day and emergency service available</div>
              </div>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-red-500/40 hover:shadow-red-500/60 hover:translate-y-[1px] transition-all"
              >
                Request Service
              </button>
            </div>

            {/* Payments */}
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-1">
                Accepted Payment Methods
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-[11px] text-gray-300">
                <span className="rounded-full border border-gray-600 px-2.5 py-1">
                  Visa
                </span>
                <span className="rounded-full border border-gray-600 px-2.5 py-1">
                  Mastercard
                </span>
                <span className="rounded-full border border-gray-600 px-2.5 py-1">
                  Discover
                </span>
                <span className="rounded-full border border-gray-600 px-2.5 py-1">
                  AmEx
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400">
            <div>
              © {new Date().getFullYear()} Paul The Plumber. All rights
              reserved.
            </div>
            <div className="text-gray-400">
              Licensed, Insured & Bonded • Serving Omaha & Surrounding Areas
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
