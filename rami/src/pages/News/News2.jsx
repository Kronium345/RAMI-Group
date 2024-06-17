// src/components/News2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './News2.css';
import newsImage from '../../assets/news/news2.png'; // Ensure the path is correct
import articleImage from '../../assets/news/news2-zoom.png'; // Add the correct path for the article image

const News2 = () => {
  return (
    <div className="news2-page">
      <Link to="/news" className="back-button">
        <span className="arrow">&larr;</span> Back
      </Link>
      <h1 className="news2-title">Prof. Nabil Aouf and RAMI Group features on Islington Tribune Newspaper</h1>
      <div className="news2-container">
        <img src={newsImage} alt="Drone" className="news2-image" />
        <div className="news2-content">
          <div className="news2-date">25 Jun 2023</div>
          <h2>Prof. Nabil Aouf and RAMI Group features on Islington Tribune Newspaper</h2>
          <p>
            RAMI Group is gaining popularity in the media. The latest of this is an article by Izzy Rowley on page 9 of the Islington tribune published on Friday, 16th of June 2023.
          </p>
          <a href="https://tinyurl.com/RamiGroupFeaturesonNewspaper" className="news2-link">Read More</a>
        </div>
        <div className="article-image-container">
          <img src={articleImage} alt="Newspaper Article" className="article-image" />
        </div>
      </div>
    </div>
  );
};

export default News2;
