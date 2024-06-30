// src/components/news4.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './News4.css';
import newsImage from '../../assets/news/news4.jpg'; // Ensure the path is correct
import newsExtra from '../../assets/news/news4-extra.jpg';

const News4 = () => {
  return (
    <div className="news4-page">
      <div className="back-button-container">
        {/* <Link to="/news" className="back-button">
          <span className="arrow">&larr;</span> Back
        </Link> */}
      </div>
      <h1 className="news4-title">RAMI Group launches City's Autonomous Systems and Machine Intelligence Lab (22 Sep 2021)</h1>
      <div className="news4-container">
        <img src={newsImage} alt="Drone" className="news4-image" />
        <div className="news4-content">
          {/* <div className="news4-date">22 Sep 2021</div> */}
          <h2>RAMI Group launches City's Autonomous Systems and Machine Intelligence Lab</h2>
          <p>
          Launch of City's Autonomous Systems and Machine Intelligence Lab and Arena facility took place on 21/09/21. Among those in attendance is the president of City university, Prof. Anthony Finkelstein, the dean Prof. Rajkumar Roy and others. Many exhibitions were conducted by the RAMI Group. The president commended the group for their achievements.      
          </p>
        </div>
        <div className="extra-image-container">
          <img src={newsExtra} alt="Newspaper Article" className="extra-image" />
        </div>
      </div>
    </div>
  );
};

export default News4;
