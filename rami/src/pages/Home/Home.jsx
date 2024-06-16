import React from 'react';
// import ramiLogo from '../../assets/rami-logo.png';
import nabilImage from '../../assets/team/nabil.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';

// Import carousel images
import image1 from '../../assets/carousel/image1.png';
import image2 from '../../assets/carousel/image2.png';
import image3 from '../../assets/carousel/image3.png';

// Import grid image
import gridImage from '../../assets/grid-image.jpeg';

// Import video
import tourVideo from '../../assets/file-video.mp4';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#D3EAF7] via-[#E2E8F0] to-[#F56565] relative">
        {/* <div className="logo-container absolute top-4 left-4">
          <img src={ramiLogo} alt="RAMI Logo" className="w-24 h-24" />
        </div> */}
        <div className="hero-content">
          <h1 className="text-5xl font-bold">Robotics, Autonomy and Machine Intelligence Group</h1>
          <p className="text-red-500 mt-2 text-xl">———— A World-class Research Group</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl">
            Robotics, Autonomy and Machine Intelligence (RAMI) Group led by Prof Nabil Aouf is dedicated to fulfilling customer’s ambitious and innovative requirements. The group steadily establishes itself as a world leader in a range of applications from automatic sensing to processing and AI Autonomy for Data Processing, Robotics, and Unmanned Vehicles to platforms Navigation/Control and Cyber Physical Systems.
          </p>
          <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg">Read More</button>
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
              <p className="quote-author">———— Prof. Nabil Aouf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Profile Section */}
      <section className="research-profile py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Research Profile</h2>
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Navigation" className="carousel-image" />
            </div>
            <div>
              <img src={image2} alt="Guidance/Control" className="carousel-image" />
            </div>
            <div>
              <img src={image3} alt="Cooperation" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Facilities</h2>
          <p className="text-lg">The centre has two fully equipped research facilities. It has one of the largest indoor testing areas in London. With fitted opti-track motion tracking systems in this area, running of multi-platform tests for both drones and ground vehicles can be achieved smoothly. In addition to seven drones, the centre is in custody of two mobile ground robots equipped with the latest sensors like the Velodyne Puck lidar and Zed cameras. The centre also possesses three robotic manipulators from top sellers like: Sawyer, Kinova, and Franka. The centre engages in Virtual Reality (VR) and Augmented Reality (AR) applications with world-class goggle kits. The centre has High-Performance Computing (HPC) clusters for Artificial Intelligence (AI) applications. All these and lots more.</p>
        </div>
      </section>

      {/* Tour Section */}
      <section className="tour py-16 bg-gradient-to-r from-blue-200 via-gray-200 to-red-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-red-500">Take a Tour</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2">
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
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-lg">Call Us: +44 (0)20 7040 5168</p>
          <p className="text-lg">Email: <a href="mailto:Nabil.aouf@city.ac.uk" className="text-blue-500">Nabil.aouf@city.ac.uk</a></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
