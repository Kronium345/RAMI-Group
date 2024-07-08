import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './Team.css';

// Import team member images
import nabilImage from '../../assets/team/nabil.png';
import abdelhafidImage from '../../assets/team/abdelhafid.png';
import leoImage from '../../assets/team/leopauly.jpg';
import zakariaImage from '../../assets/team/zakaria.png';
import wangImage from '../../assets/team/wang.png';
import duarteImage from '../../assets/team/duarte.png';
import jianingImage from '../../assets/team/jianing.png';
import maxwellImage from '../../assets/team/max.jpg';
import chuyaoImage from '../../assets/team/chuyao.png';
import burakImage from '../../assets/team/burak.png';
import amarImage from '../../assets/team/amar.png';
import abdullaImage from '../../assets/team/abdulla.png';
import mariaImage from '../../assets/team/maria.png';
import davidImage from '../../assets/team/david.png';
import stathisImage from '../../assets/team/stathis.png';
import tomImage from '../../assets/team/tom.png';
import tomChenImage from '../../assets/team/tom-chen.png';
import veselinImage from '../../assets/team/veselin.png';
import alaaImage from '../../assets/team/alaa.jpg'; // Placeholder for Alaa's image
import teamBanner from '../../assets/team/team-banner-new.jpg';

const Team = () => {
  return (
    <div className="team-page">
      <section className="team-hero text-center" style={{ backgroundImage: `url(${teamBanner})` }}>
        <div className="team-container mx-auto">
          <h3 className="text-5xl font-bold py-4 px-8 inline-block mt-12">Team</h3>
        </div>
      </section>

      <section className="team-section py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8 team-heading">Academics</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
                <p className="team-name">Prof. Nabil Aouf</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <div className="team-grid">
              <div className="team-member">
                <img src={abdelhafidImage} alt="Dr. Abdelhafid Zenati" className="team-img ml-1" />
                <p className="team-name">
                  Dr. Abdelhafid Zenati
                  <span className="team-name-break">(Lecturer)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8 team-heading">Research Fellows</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={zakariaImage} alt="Zakaria Chekatta" className="team-img" />
                <p className="team-name">Dr. Zakaria</p>
                <span className="team-name-break">Chekatta</span>
              </div>
              <div className="team-member">
                <img src={wangImage} alt="Wang Ziwei" className="team-img" />
                <p className="team-name">Dr. Wang Ziwei</p>
              </div>
              <div className="team-member">
                <img src={leoImage} alt="Leo Pauly" className="team-img" />
                <p className="team-name">Dr. Leo Pauly</p>
              </div>
              <div className="team-member">
                <img src={duarteImage} alt="Duarte Rondao" className="team-img" />
                <p className="team-name">Dr. Duarte</p>
                <span className="team-name-break">Rondao</span>
              </div>
              <div className="team-member">
                <img src={jianingImage} alt="Jianing Song" className="team-img" />
                <p className="team-name">Dr. Jianing Song</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8 team-heading">PhD Researchers</h2>
            <div className="team-grid">
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
                <p className="team-name">Abdulla</p>
                <span className="team-name-break">Tammam</span>
              </div>
              <div className="team-member">
                <img src={tomImage} alt="Thomas Hickling" className="team-img" />
                <p className="team-name">Thomas Hickling</p>
              </div>
              <div className="team-member">
                <img src={alaaImage} alt="Alaa" className="team-img" />
                <p className="team-name">Alaa Afeneh</p>
              </div>
              <div className="team-member">
                <img src={burakImage} alt="Burak H" className="team-img" />
                <p className="team-name">Burak Inan</p>
              </div>
              <div className="team-member">
                <img src={amarImage} alt="Amar M" className="team-img" />
                <p className="team-name">Amar Khan</p>
              </div>
              <div className="team-member">
                <div className="fa-user-alt-wrapper">
                  <FaUserAlt size={110} color="#" />
                </div>
                <p className="team-name-user">Will Jamous</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h2 className="text-3xl font-bold mb-8 team-heading">Associate Members</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={mariaImage} alt="Dr. Maria Tomas-Rodriguez" className="team-img" />
                <p className="team-name">
                  Dr. Maria Tomas-
                  <span className="team-name-break">Rodriguez</span>
                </p>
              </div>
              <div className="team-member">
                <img src={davidImage} alt="Prof. David Stupples" className="team-img" />
                <p className="team-name">Prof. David</p>
                <span className="team-name-break">Stupples</span>
              </div>
              <div className="team-member">
                <img src={tomChenImage} alt="Prof. Tom Chen" className="team-img" />
                <p className="team-name">Prof. Tom Chen</p>
              </div>
              <div className="team-member">
                <img src={veselinImage} alt="Dr. Veselin Rakocevic" className="team-img" />
                <p className="team-name">Dr. Veselin</p>
                <span className="team-name-break">Rakocevic</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
