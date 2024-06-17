import React from 'react';
import './News.css';
import news1 from '../../assets/news/news1.jpg';
import news2 from '../../assets/news/news2.png';
import news3 from '../../assets/news/news3.png';
import news4 from '../../assets/news/news4.jpg';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    date: "18 Sept 2023",
    title: "City’s Professor Nabil Aouf leads on the NATO Science for Peace and Security Programme’s SAPIENCE drone (AI based) competition project",
    description: "City, University of London’s Professor of Autonomous Systems and Machine Intelligence, Professor Nabil Aouf, is the lead academic on the SAPIENCE project, which is funded through the Science for Peace and Security (SPS) programme of the North Atlantic Treaty Organisation (NATO)",
    image: news1,
    link: "/first-news"
  },
  {
    date: "25 Jun 2023",
    title: "Prof. Nabil Aouf and RAMI Group features on Islington Tribune Newspaper",
    description: "Prof. Nabil Aouf and RAMI Group features on Islington Tribune Newspaper",
    image: news2,
    link: "/second-news"
  },
  {
    date: "22 Jun 2022",
    title: "RAMI Group hosted at ESA GSTP conference",
    description: "RAMI group hosted at the ESA GSTP conference organized by European Space Agency - ESA and the Austrian Space Agency (FFG)",
    image: news3,
    link: "/third-news"
  },
  {
    date: "22 Sept 2021",
    title: "RAMI Group launches City's Autonomous Systems and Machine Intelligence Lab",
    description: "RAMI Group launches City's Autonomous Systems and Machine Intelligence Lab",
    image: news4,
    link: "/fourth-news"
  },
];

const News = () => {
  return (
    <div className="news-page project-section py-16 bg-gradient-to-r from-blue-200 via-gray-200 to-red-200">
      <h1 className="news-title">Latest News</h1>
      <div className="news-container">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <div className="news-date">{item.date}</div>
              <h2 className="news-item-title">{item.title}</h2>
              <p className="news-description">{item.description}</p>
              <Link to={item.link} className="news-link">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
