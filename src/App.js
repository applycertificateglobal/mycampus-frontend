import React from 'react';

import HeroSection from './components/HeroSection';
import BookingFormSection from './components/BookingFormSection';
import AmbassadorSection from './components/AmbassadorSection';
import FallbackCTASection from './components/FallbackCTASection';
import InstagramEmbedSection from './components/InstagramEmbedSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4">
        <BookingFormSection />
        <AmbassadorSection />
        <FallbackCTASection />
        <InstagramEmbedSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
