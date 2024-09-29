import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './css/layout.css';
import CoreFeatuer from './components/CoreFeatuer';
import Timelines from './components/Timelines';
import SectionWords from './components/SectionWords';
import AboutUs from './components/AboutUs';
import Customer from './components/Customer';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Hero />
      <CoreFeatuer />
      <SectionWords />
      <Timelines />
      <AboutUs />
      <Customer />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
