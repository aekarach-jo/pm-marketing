import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './css/layout.css';
import CoreFeatuer from './components/CoreFeatuer';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Hero />
      <CoreFeatuer />
    </div>
  );
};

export default LandingPage;
