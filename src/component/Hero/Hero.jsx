import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/img/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          At GuruCool, we are committed to providing high-quality education that empowers individuals to achieve their full potential. Join us in our mission to transform lives through education.
        </p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
