import { useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: 'Christine L.',
      city: 'Omaha, NE',
      rating: 5,
      text: 'Absolutely awesome service! Justin and Vincent were in and out in 20 minutes. They replaced the broken shut-off valve, cleaned up beautifully, and had everything working quickly. I just love these guys!',
    },
    {
      name: 'D. S.',
      city: 'Papillion, NE',
      rating: 5,
      text: 'Thank you Paul! Fast, reliable, and saved us money with the best price. I couldn\'t ask for more. Our kitchen is fully functional again! Truly a 5-star experience!',
    },
    {
      name: 'Steve G.',
      city: 'Omaha, NE',
      rating: 5,
      text: 'Paul is by far the best plumber in the area! He, his son, and the whole team are knowledgeable, straightforward, and extremely fair on pricing. I won\'t work with anyone else, period.',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="reviews" className="bg-white/70 py-20">
      <style>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient-bg {
          background: linear-gradient(
            -45deg,
            #667eea 0%,
            #764ba2 25%,
            #f093fb 50%,
            #4facfe 75%,
            #00f2fe 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="relative mb-16 overflow-hidden rounded-3xl p-1 animated-gradient-bg">
            <div className="bg-gradient-to-br from-blue-50/40 via-white to-red-50/40 rounded-3xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Neighbors Love Paul The Plumber
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A warm, family-first team that treats your home like our own.
              </p>
            </div>
          </div>
        </LazyLoad>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <LazyLoad key={index} animation="fadeSlideUp" delay={index * 150} duration={600}>
              <div
                className="group relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-300 overflow-clip"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-pink-400/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 px-6 py-3 flex items-center justify-between group-hover:brightness-110 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold text-sm tracking-wide">Google Maps Review</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Star className="w-4 h-4 fill-white text-white group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-white font-bold text-sm">{review.rating}.0</span>
                </div>
              </div>
              <div className="relative p-8">
                <div className="flex gap-1 mb-4 group-hover:gap-2 transition-all duration-300">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-black mb-6 leading-relaxed italic group-hover:text-gray-900 transition-colors duration-300">
                  "{review.text}"
                </p>
                <div className="border-t border-gray-200 pt-4 group-hover:border-blue-300 transition-colors duration-300">
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{review.name}</p>
                  <p className="text-sm text-black">{review.city}</p>
                </div>
              </div>
              </div>
            </LazyLoad>
          ))}
        </div>

        <LazyLoad animation="fadeSlideUp">
          <div className="md:hidden relative px-4">
          <div className="relative rounded-3xl shadow-2xl">
            <div className="relative min-h-[640px] overflow-hidden rounded-3xl">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-3xl h-full shadow-xl">
                    <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 px-6 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-white" />
                          <span className="text-white font-semibold text-sm tracking-wide">
                            Google Maps Review
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                          <Star className="w-5 h-5 fill-white text-white drop-shadow" />
                          <span className="text-white font-bold text-base">{review.rating}.0</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex gap-1.5 mb-6 justify-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-7 h-7 fill-yellow-400 text-yellow-400 drop-shadow-md"
                          />
                        ))}
                      </div>

                      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 mb-6 shadow-inner border border-blue-100/50">
                        <p className="text-gray-900 text-lg leading-relaxed italic font-medium">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="border-t-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200 pt-6 text-center">
                        <p className="font-bold text-gray-900 text-xl mb-1">{review.name}</p>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                          <MapPin className="w-4 h-4" />
                          <p className="text-base">{review.city}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3 rounded-full shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 z-10 border-2 border-blue-200"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" strokeWidth={3} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3 rounded-full shadow-2xl hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 z-10 border-2 border-blue-200"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" strokeWidth={3} />
            </button>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-6 text-sm text-gray-600">
            <p className="font-medium">
              Review {currentSlide + 1} of {reviews.length}
            </p>
          </div>
          </div>
        </LazyLoad>
      </div>
    </section>
  );
}
