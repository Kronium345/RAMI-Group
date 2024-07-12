import React from 'react';
import nabilImage from '../../assets/team/nabil.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import { FaRoute, FaCamera, FaProjectDiagram, FaDatabase, FaVrCardboard, FaRobot, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Import carousel images
import image1 from '../../assets/carousel/image1.png';
import image2 from '../../assets/carousel/image2.png';
import image3 from '../../assets/carousel/image3.png';

// Import grid image
import gridImage from '../../assets/grid-image.jpeg';

// Import video
import tourVideo from '../../assets/file-video.mp4';

const Home = () => {
  const NextArrow = ({ onClick }) => (
    <FaArrowRight className="arrow-icon arrow-right" onClick={onClick} />
  );

  const PrevArrow = ({ onClick }) => (
    <FaArrowLeft className="arrow-icon arrow-left" onClick={onClick} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero h-screen flex flex-col items-center justify-center text-center">
        <div className="hero-content">
          <h2 className="intro-title">Robotics, Autonomy & Machine <br /></h2>
          <h2 className="intro-title2"> Intelligence Group (RAMI)</h2>
          <h2 className="intro-line">━━━━━━━ </h2>
          <p className="intro-subtitle">A World-class Research Group</p>
          
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro py-16 bg-customLightGrey text-center">
        <div className="intro-container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Robotics, Autonomy and Machine Intelligence Group</h2>
          <p className="text-xl intro-text mb-20">
            Robotics, Autonomy and Machine Intelligence (RAMI) Group led by Prof Nabil Aouf is dedicated to fulfilling customer’s ambitious and innovative requirements. The group steadily establishes itself as a world leader in a range of applications from automatic sensing to processing and AI Autonomy for Data Processing, Robotics, and Unmanned Vehicles to platforms Navigation/Control and Cyber Physical Systems.
          </p>
          <p className="text-3xl intro-subtext text-black-500 font-bold mt-2">
            Research areas include
          </p>
          <div className="research-areas-grid">
            <div className="research-area-tile">
              <FaRoute size={48} className="icon" />
              <p className="mt-4 font-bold">Navigation, Guidance and Control</p>
              <p className="description">Techniques for accurate localization and control of autonomous vehicles.</p>
            </div>
            <div className="research-area-tile">
              <FaCamera size={48} className="icon" />
              <p className="mt-4 font-bold">Real time Imaging and Embedded Vision based systems</p>
              <p className="description">Developing advanced imaging systems for real-time applications.</p>
            </div>
            <div className="research-area-tile">
              <FaProjectDiagram size={48} className="icon" />
              <p className="mt-4 font-bold">Planning and Re-planning (Decision Making)</p>
              <p className="description">Algorithms for efficient planning and re-planning in dynamic environments.</p>
            </div>
            <div className="research-area-tile">
              <FaDatabase size={48} className="icon" />
              <p className="mt-4 font-bold">Data Fusion and Mining</p>
              <p className="description">Techniques for integrating and analyzing data from multiple sources.</p>
            </div>
            <div className="research-area-tile">
              <FaVrCardboard size={48} className="icon" />
              <p className="mt-4 font-bold">Human-Machine Interface/Augmented-Virtual Reality</p>
              <p className="description">Enhancing human interaction with machines through AR/VR technologies.</p>
            </div>
            <div className="research-area-tile">
              <FaRobot size={48} className="icon" />
              <p className="mt-4 font-bold">Autonomous Cyber (Cyber Soft/Cyber Physical)</p>
              <p className="description">Developing autonomous systems for cyber-physical applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="quote-container flex flex-col md:flex-row justify-center items-center space-x-4 max-w-2xl mx-auto">
            <a href="https://www.city.ac.uk/about/people/academics/nabil-aouf" target="_blank" rel="noopener noreferrer">
              <img src={nabilImage} alt="Prof. Nabil Aouf" className="profile-img w-80 h-24 rounded-full mb-4 md:mb-0" />
            </a>
            <div className="quote-details">
              <p className="text-xl quote-text">
                "I'd like to welcome you to my group webpage. You can navigate through the tabs to check out our exciting projects and read more about RAMI. You can find my research profile and facilities below."
              </p>
              <p className="quote-author">—— Prof. Nabil Aouf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Profile Section */}
      <section className="research-profile py-16 bg-gradient-to-r text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Research Profile</h2>
          <Slider {...settings} className="slider">
            <div className="carousel-item">
              <img src={image1} alt="Navigation" className="carousel-image" />
            </div>
            <div className="carousel-item">
              <img src={image2} alt="Guidance/Control" className="carousel-image" />
            </div>
            <div className="carousel-item">
              <img src={image3} alt="Cooperation" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities py-16 bg-gray-100 text-center">
        <div className="facilities-container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Facilities</h2>
          <p className="intro-text text-lg">
            The centre has two fully equipped research facilities. It has one of the largest indoor testing areas in London. With fitted opti-track motion tracking systems in this area, running of multi-platform tests for both drones and ground vehicles can be achieved smoothly. In addition to seven drones, the centre is in custody of two mobile ground robots equipped with the latest sensors like the Velodyne Puck lidar and Zed cameras. The centre also possesses three robotic manipulators from top sellers like: Sawyer, Kinova, and Franka. The centre engages in Virtual Reality (VR) and Augmented Reality (AR) applications with world-class goggle kits. The centre has High-Performance Computing (HPC) clusters for Artificial Intelligence (AI) applications. All these and lots more.
          </p>
        </div>
      </section>

      {/* Tour Section */}
      <section className="tour py-16 bg-gradient-to-r text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-black-500">Take a Tour</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
            <div className="tour-video-container w-full md:w-4/5">
              <video controls className="w-full h-full object-cover rounded-lg shadow-lg">
                <source src={tourVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <img src={gridImage} alt="Tour Images" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-10xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1954330252393!2d-0.10503732387117895!3d51.527975209200655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca7b1d83351%3A0x570d19c20ab22a83!2sCity%2C%20University%20of%20London!5e0!3m2!1sen!2suk!4v1715594705860!5m2!1sen!2suk"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map"
            ></iframe>
            <form action="https://getform.io/f/pamqzkna" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="ce0afc39-f0e3-49d2-889d-abacd15b3ffa" />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
