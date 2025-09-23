import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustRow from './components/TrustRow';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Compare from './components/Compare';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import StickyCTA from './components/StickyCTA';
import CaseStudyDetail from './pages/CaseStudyDetail';

function HomePage() {
  const [activeSection, setActiveSection] = useState('start');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['start', 'benefits', 'process', 'compare', 'pricing', 'faqs'];
      const offsets = sections.map(id => {
        const element = document.getElementById(id);
        return element ? element.offsetTop - 100 : 0;
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (window.scrollY >= offsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        openBooking={openBooking}
        isScrolled={scrollY > 64}
      />
      
      <main>
        <Hero openBooking={openBooking} />
        <TrustRow />
        <Benefits />
        <Process />
        <Compare />
        <Founder />
        <Pricing openBooking={openBooking} />
        <FAQs />
      </main>
      
      <Footer />
      <StickyCTA openBooking={openBooking} />
      
      {isBookingOpen && (
        <BookingModal onClose={closeBooking} />
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
    </Routes>
  );
}

export default App;