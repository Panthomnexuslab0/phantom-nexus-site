import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PremiumFeatures from '../components/PremiumFeatures';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-phantom-darker">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <PremiumFeatures />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
