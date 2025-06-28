import React from 'react';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import AmbassadorSection from './components/AmbassadorSection';
import FallbackCTA from './components/FallbackCTA';
import InstagramEmbed from './components/InstagramEmbed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
        <BookingForm />
        <AmbassadorSection />
        <FallbackCTA />
        <InstagramEmbed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
