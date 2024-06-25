import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import ramiLogo from '../../assets/rami-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">
            <p>RAMI</p>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-red-500">Home</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/recent-projects">Recent Projects</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/news">News</Link></li>
          {/* <li><Link to="/more">More</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
