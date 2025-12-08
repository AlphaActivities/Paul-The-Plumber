import WallpaperRotator from './components/WallpaperRotator';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WaterHeaters from './components/WaterHeaters';
import Coupons from './components/Coupons';
import Reviews from './components/Reviews';
import ServiceAreas from './components/ServiceAreas';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-x-hidden">
      <WallpaperRotator />

      <div className="relative z-10 overflow-x-hidden">
        <Navbar />
        <Hero />
        <TrustBar />
        <Services />
        <WaterHeaters />
        <Coupons />
        <Reviews />
        <ServiceAreas />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
