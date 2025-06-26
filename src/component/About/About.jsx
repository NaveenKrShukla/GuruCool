import React from 'react'
import './About.css'
import about_img from '../../assets/img/about.png'
import play_icon from '../../assets/img/play-icon.png'


const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} onClick={() => { setPlayState(true) }} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>
          ABOUT UNIVERSITY
        </h3>
        <h2>We Ensure better education for a better world</h2>
        <p>
          At GuruCool, we are committed to providing high-quality education that empowers individuals to achieve their full potential. Join us in our mission to transform lives through education. Our dedicated faculty, innovative programs, and supportive community create an environment where students can thrive and succeed.
        </p>
        <p>
          Our university is dedicated to fostering a culture of excellence, inclusivity, and lifelong learning. We believe that education is the key to unlocking opportunities and creating a brighter future for all. Join us in our journey to make a positive impact on society through education.
        </p>
      </div>
    </div >
  )
}

export default About
