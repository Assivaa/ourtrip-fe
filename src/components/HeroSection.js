import React from 'react';
import '../App.css';
import './HeroSection.css';
import Button from 'react-bootstrap/Button';

function HeroSection() {



  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1> OurTrip </h1>
      <p>Let's explore the world</p>
      <div className='hero-btns'>
      {/* Link to component Cards */}
        <Button className='btns' variant="outline-light" size="lg" href="#content">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection


