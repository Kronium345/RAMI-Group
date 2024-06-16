import React from 'react';
import './Team.css';

// Import team member images
import nabilImage from '../../assets/team/nabil.png';
import leoImage from '../../assets/team/leopauly.jpg';
import zakariaImage from '../../assets/team/zakaria.png';
import wangImage from '../../assets/team/wang.png';
import duarteImage from '../../assets/team/duarte.png';
import jianingImage from '../../assets/team/jianing.png';
import maxwellImage from '../../assets/team/max.png';
import chuyaoImage from '../../assets/team/chuyao.png';
import burakImage from '../../assets/team/burak.png';
import amarImage from '../../assets/team/amar.png';
import abdullaImage from '../../assets/team/abdulla.png';
import thomasImage from '../../assets/team/tom.png';
import mariaImage from '../../assets/team/maria.png';
import davidImage from '../../assets/team/david.png';
import stathisImage from '../../assets/team/stathis.png';
import tomImage from '../../assets/team/tom.png';
import veselinImage from '../../assets/team/veselin.png';
// import alaaImage from '../../assets/team/alaa.png'; // Placeholder for Alaa's image

const Team = () => {
  return (
    <div className="team-page">
      <section className="hero-team bg-gray-200 text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-gray-800">Team</h1>
        </div>
      </section>
      
      <section className="team-section py-16 bg-gradient-to-r from-blue-200 via-gray-200 to-red-200 text-center">
        <div className="container mx-auto px-4">
          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8">Postdoctoral Researchers</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
                <p className="team-name">Prof. Nabil Aouf</p>
              </div>
              <div className="team-member">
                <img src={leoImage} alt="Leo Pauli" className="team-img" />
                <p className="team-name">Leo Pauli</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8">Research Fellows</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={zakariaImage} alt="Zakaria Chekatta" className="team-img" />
                <p className="team-name">Zakaria Chekatta</p>
              </div>
              <div className="team-member">
                <img src={wangImage} alt="Wang Ziwei" className="team-img" />
                <p className="team-name">Wang Ziwei</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8">PhD Researchers</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={duarteImage} alt="Duarte Rondao" className="team-img" />
                <p className="team-name">Duarte Rondao</p>
              </div>
              <div className="team-member">
                <img src={jianingImage} alt="Jianing Song" className="team-img" />
                <p className="team-name">Jianing Song</p>
              </div>
              {/* <div className="team-member">
                <img src={alaaImage} alt="Alaa" className="team-img" />
                <p className="team-name">Alaa</p>
              </div> */}
              <div className="team-member">
                <img src={maxwellImage} alt="Maxwell Hogan" className="team-img" />
                <p className="team-name">Maxwell Hogan</p>
              </div>
              <div className="team-member">
                <img src={chuyaoImage} alt="Chuyao Wang" className="team-img" />
                <p className="team-name">Chuyao Wang</p>
              </div>
              <div className="team-member">
                <img src={abdullaImage} alt="Abdulla Tammam" className="team-img" />
                <p className="team-name">Abdulla Tammam</p>
              </div>
              <div className="team-member">
                <div className="team-placeholder"></div>
                <p className="team-name">Willy Jamoous</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8">Associate Members</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={mariaImage} alt="Dr. Maria Tomas-Rodriguez" className="team-img" />
                <p className="team-name">Dr. Maria Tomas-Rodriguez</p>
              </div>
              <div className="team-member">
                <img src={davidImage} alt="Prof. David Stupples" className="team-img" />
                <p className="team-name">Prof. David Stupples</p>
              </div>
              <div className="team-member">
                <img src={stathisImage} alt="Dr. Stathis Milonidis" className="team-img" />
                <p className="team-name">Dr. Stathis Milonidis</p>
              </div>
              <div className="team-member">
                <img src={tomImage} alt="Prof. Tom Chen" className="team-img" />
                <p className="team-name">Prof. Tom Chen</p>
              </div>
              <div className="team-member">
                <img src={veselinImage} alt="Dr. Veselin Rakocevic" className="team-img" />
                <p className="team-name">Dr. Veselin Rakocevic</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
