import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import menu_icon from '../../assets/img/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} role="navigation" aria-label="Main Navigation">
      <img src={logo} alt="GuruCool Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hiode-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
