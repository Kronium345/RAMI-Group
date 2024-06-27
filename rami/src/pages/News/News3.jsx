// src/components/News3.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './News3.css';
import newsImage from '../../assets/news/news3.png'; // Ensure the path is correct

const News3 = () => {
  return (
    <div className="news3-page">
      <div className="back-button-container">
        {/* <Link to="/news" className="back-button">
          <span className="arrow">&larr;</span> Back
        </Link> */}
      </div>
      <h1 className="news3-title">Prof. Nabil Aouf and RAMI Group features on Islington Tribune Newspaper</h1>
      <div className="news3-container">
        <img src={newsImage} alt="Drone" className="news3-image" />
        <div className="news3-content">
          <div className="news3-date">22 Jun 2022</div>
          <h2>RAMI group hosted at the ESA GSTP conference organized by European Space Agency - ESA and the Austrian Space Agency (FFG)</h2>
          <p>
          RAMI Group at City, University of London, led by Prof Nabil Aouf, who was honored, and personally invited to give a talk about a research program related to AI and GNC and named AITIVE-GNC, at the ESA GSTP conference organized by European Space Agency - ESA and the Austrian Space Agency (FFG). We were the only university in Europe that got this privilege and presented our work in front of the best Space industries in Europe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News3;
