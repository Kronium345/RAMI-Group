// src/components/News1.jsx
import React from 'react';
import './News1.css';
import news1 from '../../assets/news/news1.jpg';


const News1 = () => {
  return (
    <div className="news1-page">
      <div className="news1-container">
        <img src={news1} alt="Drone" className="news1-image" />
        <div className="news1-content">
          <div className="news1-date">18 Sept 2023</div>
          <p>
            City, University of London’s Professor of Autonomous Systems and Machine Intelligence, Professor Nabil Aouf, 
            is the lead academic on the SAPIENCE project, which is funded through the Science for Peace and Security (SPS) 
            programme of the North Atlantic Treaty Organisation (NATO)
          </p>
          <a href="https://www.city.ac.uk/news-and-events/news/2023/09/citys-professor-nabil-aouf-leads-on-the-nato-science-for-peace-and-security-programmes-sapience-drone-competition-project" className="news1-link">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default News1;
