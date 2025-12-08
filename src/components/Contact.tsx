import { useState, FormEvent } from 'react';
import { Phone, CheckCircle, Loader2 } from 'lucide-react';
import LazyLoad from './LazyLoad';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setHasSubmitted(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.serviceType,
          message: formData.message,
        }),
      });

      setSubmitted(true);

      // Reset form after a short delay so the success state is visible
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting Netlify form', error);
      // Roll back "hasSubmitted" if there was an error
      setHasSubmitted(false);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyLoad animation="fadeSlideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Schedule Service?
            </h2>
          </div>
        </LazyLoad>

        <div className="grid lg:grid-cols-2 gap-12">
          <LazyLoad animation="fadeSlideUp" delay={100}>
            <div>
            <p className="text-xl text-black mb-8 leading-relaxed font-bold">
              Call, text, or send us a quick message. We'll respond as soon as possible during business hours.
            </p>

            <div className="bg-gradient-to-br from-[#0056A4] to-blue-700 text-white rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="text-center">
                <Phone className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg mb-2">Call or Text Anytime</p>
                <a href="tel:4025960200" className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold hover:text-red-300 hover:scale-110 transition-all duration-300">
                  402-596-0200
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group flex items-start gap-4 p-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-green-100/50 group-hover:ring-green-200 transition-all duration-500 group-hover:scale-110 flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <div className="relative">
                  <p className="font-bold text-gray-900 text-lg mb-1">Same-Day Service Available</p>
                  <p className="text-gray-700 font-semibold">We understand plumbing emergencies can't wait</p>
                </div>
              </div>
              <div className="relative group flex items-start gap-4 p-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-blue-100/50 group-hover:ring-blue-200 transition-all duration-500 group-hover:scale-110 flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <div className="relative">
                  <p className="font-bold text-gray-900 text-lg mb-1">Upfront Pricing</p>
                  <p className="text-gray-700 font-semibold">Know the cost before we start the work</p>
                </div>
              </div>
              <div className="relative group flex items-start gap-4 p-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-amber-100/50 group-hover:ring-amber-200 transition-all duration-500 group-hover:scale-110 flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <div className="relative">
                  <p className="font-bold text-gray-900 text-lg mb-1">Background-Checked Techs</p>
                  <p className="text-gray-700 font-semibold">Trustworthy professionals in your home</p>
                </div>
              </div>
            </div>
            </div>
          </LazyLoad>

          <LazyLoad animation="fadeSlideUp" delay={200}>
            <div className="bg-gradient-to-br from-[#0056A4] to-blue-700 rounded-2xl shadow-2xl p-8 border-2 border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-white/20 bg-white/95 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-white/20 bg-white/95 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-white/20 bg-white/95 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-white mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-white/20 bg-white/95 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="water-heater">Water Heater</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="toilet">Toilet Repair</option>
                      <option value="faucet">Faucet Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-white/20 bg-white/95 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending || submitted}
                    className={`w-full px-4 py-2 text-white rounded-full font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                      sending
                        ? 'bg-gray-500 hover:bg-gray-500 cursor-wait'
                        : submitted
                          ? 'bg-green-600 hover:bg-green-600'
                          : 'bg-[#E42313] hover:bg-red-700 hover:scale-105'
                    }`}
                  >
                    {sending && <Loader2 className="w-4 h-4 animate-spin" />}
                    {sending
                      ? 'Sending...'
                      : submitted
                        ? 'Message Sent Successfully!'
                        : hasSubmitted
                          ? 'Send Another Message'
                          : 'Send Message'
                    }
                  </button>
                </form>
            </div>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}
