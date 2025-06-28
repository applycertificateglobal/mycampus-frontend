import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import BookingFormSection from './components/BookingFormSection';
import AmbassadorSection from './components/AmbassadorSection';
import FallbackCTASection from './components/FallbackCTASection';
import InstagramEmbedSection from './components/InstagramEmbedSection';
import FooterSection from './components/FooterSection';

import UniversityDetail from './pages/UniversityDetail'; // Dynamic page

// Homepage component wrapped for reuse
const Home = () => (
  <div className="font-sans text-gray-800">
    <HeroSection />
    <div className="max-w-6xl
