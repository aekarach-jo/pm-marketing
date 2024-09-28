import React from 'react';
import '../css/hero.css';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section">
      <img className="cover img-fluid" src="/img/assets/cover.png" alt="cover" />
      <div className="group-text">
        <div>
          Create your Ads <br /> with our banned and detection keyword
        </div>
        <div>
          สร้างโฆษณาของคุณให้ถูกต้อง <br /> ด้วยบริการค้นหา และ ตรวจจับ คำต้องห้าม
          <br /> จากสุดยอดบริการของเรา
        </div>
        <Button
          className="btn text-white font-weight-bold py-2 d-flex justify-content-center align-items-center"
          style={{
            background: 'rgba(203, 12, 159, 1)',
            borderRadius: '10px',
            width: '299px',
            height: '80px',
          }}
          size="lg"
          type="submit"
        >
          Get Started
          <img src="/img/icons/arrow.png" alt="arrow" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
