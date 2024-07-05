import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">
            <p>RAMI</p>
          </Link>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''} flex space-x-6`}>
          <li><Link to="/" className="text-red-500">Home</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/recent-projects">Recent Projects</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <div className="menu-bar md:hidden" onClick={toggleMenu}>
          <div className="menu-icon">{menuOpen ? 'X' : <>&#9776;</>}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
