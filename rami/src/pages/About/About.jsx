import React from 'react';
import './About.css';
import ramiLogo from '../../assets/rami-logo.png';

const About = () => {
  return (
    <div className="about-us">
      <main>
        <section className="hero">
          {/* <div className="logo">
            <img src={ramiLogo} alt="RAMI Group Logo" />
          </div> */}
          <h2 className="text-5xl font-bold text-black">Robotics, Autonomy and Machine Intelligence Group</h2>
        </section>
        <section className="content">
          <p>
            Robotics, Autonomy and Machine Intelligence (RAMI) Group led by Prof Nabil Aouf is dedicated to fulfilling customer’s ambitious and innovative requirements. The group steadily establishes itself as a world leader in a range of applications from automatic sensing to processing and AI Autonomy for Data Processing, Robotics and Unmanned Vehicles to platforms Navigation/Control and Cyber Physical Systems.
          </p>
          <h2>Research areas include:</h2>
          <ul>
            <li>Navigation, Guidance and Control</li>
            <li>Real time Imaging and Embedded Vision based systems</li>
            <li>Planning and Re-planning (Decision Making)</li>
            <li>Data Fusion and Mining (for Detection, Recognition and Tracking)</li>
            <li>Human-Machine Interface/Augmented-Virtual Reality</li>
            <li>Autonomous Cyber (Cyber Soft/Cyber Physical)</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
