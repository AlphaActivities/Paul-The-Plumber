import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Mail, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Coupons', href: '#coupons' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Areas', href: '#areas' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = ['home', 'services', 'water-heaters', 'coupons', 'reviews', 'areas', 'about', 'contact'];
    const navbarHeight = 114;
    const detectionPoint = navbarHeight + 50;

    const handleScroll = () => {
      let currentSection = 'home';
      let closestDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceFromDetectionPoint = Math.abs(rect.top - detectionPoint);

          if (rect.top <= detectionPoint && rect.bottom >= detectionPoint) {
            if (distanceFromDetectionPoint < closestDistance) {
              closestDistance = distanceFromDetectionPoint;
              currentSection = sectionId;
            }
          } else if (rect.top > 0 && rect.top < detectionPoint) {
            if (rect.top < closestDistance) {
              closestDistance = rect.top;
              currentSection = sectionId;
            }
          }
        }
      });

      const scrollPosition = window.scrollY;
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollPosition + rect.top;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop - navbarHeight - 100 && scrollPosition < elementBottom - navbarHeight - 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .mobile-menu-container {
          top: 7.125rem;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#0056A4] text-white px-4 leading-none h-10 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-nowrap items-center justify-center lg:justify-between text-xs md:text-sm gap-3 md:gap-4 w-full">
          <span className="hidden lg:inline whitespace-nowrap">Family-Owned • Licensed, Insured & Bonded</span>
          <span className="hidden lg:inline whitespace-nowrap">Serving Omaha & Surrounding Areas</span>
          <span className="flex items-center gap-2 whitespace-nowrap min-w-0">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Same-Day & Emergency Service Available, Call Now</span>
          </span>
        </div>
      </div>

      <nav className={`navbar-shine bg-white ${isOpen ? 'shadow-none' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center h-[4.625rem]">
            <div className="flex-1 flex items-center">
              <a href="#home" className="flex items-center">
                <img
                  src="/images/Paultheplumber-logo.PNG"
                  alt="Paul The Plumber"
                  className="h-12 w-auto md:h-16"
                />
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const linkSection = link.href.replace('#', '');
                const isActive = linkSection === activeSection ||
                  (linkSection === 'services' && activeSection === 'water-heaters');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-base font-bold text-black hover:text-[#0056A4] transition-colors whitespace-nowrap ${
                      isActive ? 'border-b-4 border-red-600' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex-1 flex items-center justify-center md:flex-initial md:justify-end lg:flex-1 lg:justify-end gap-2">
              <a
                href="tel:4025960200"
                className="px-5 py-2.5 md:px-4 md:py-2 bg-[#E42313] text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4 md:w-3.5 md:h-3.5" />
                <span className="md:hidden">Call Now</span>
                <span className="hidden md:inline">402-596-0200</span>
              </a>
            </div>

            <div className="lg:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-[#0056A4] p-2 transition-all duration-300 relative z-50"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mobile-menu-container lg:hidden fixed left-0 right-0 bottom-0 z-40 transition-all duration-500 ease-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div
            className="absolute inset-0 bg-white"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative h-full overflow-y-auto">
            <div className="min-h-full flex flex-col px-8 py-12">
              <div className="flex-1 flex flex-col justify-center space-y-2">
                {navLinks.map((link, index) => {
                  const linkSection = link.href.replace('#', '');
                  const isActive = linkSection === activeSection ||
                    (linkSection === 'services' && activeSection === 'water-heaters');
                  return (
                    <div
                      key={link.label}
                      className={`transform transition-all duration-700 ease-out ${
                        isOpen
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-12 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group block py-4 relative"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-0.5 transition-all duration-500 ${
                              isActive
                                ? 'bg-gradient-to-r from-[#E42313] to-red-400'
                                : 'bg-gray-300 group-hover:bg-black group-hover:w-16'
                            }`}
                          />
                          <span
                            className={`text-3xl font-light tracking-wide transition-all duration-300 ${
                              isActive
                                ? 'text-black font-semibold'
                                : 'text-gray-700 group-hover:text-black group-hover:translate-x-2'
                            }`}
                          >
                            {link.label}
                          </span>
                        </div>
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-[#E42313] to-transparent rounded-full" />
                        )}
                      </a>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-12 space-y-8 transform transition-all duration-700 delay-300 ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-black">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-[#E42313]" />
                    <div className="flex flex-col">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Call Us
                      </div>
                      <a
                        href="tel:4025960200"
                        className="text-lg font-light hover:text-[#E42313] transition-all duration-300 inline-block hover:scale-105 origin-left will-change-transform"
                        style={{ WebkitFontSmoothing: 'antialiased' }}
                      >
                        402-596-0200
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-black">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-[#E42313]" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Availability
                      </div>
                      <div className="text-sm font-light">
                        Same-Day & Emergency Service
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-black">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#E42313]" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                        Service Area
                      </div>
                      <div className="text-sm font-light">
                        Omaha & Surrounding Areas
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:4025960200"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-[#E42313] to-red-600 text-white rounded-full text-center font-semibold shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>Call Now for Service</span>
                  </div>
                </a>

                <div className="pt-4 text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-full border-2 border-emerald-200 shadow-lg">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                    <span className="text-sm text-gray-800 font-medium">
                      Licensed, Insured & Bonded
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
