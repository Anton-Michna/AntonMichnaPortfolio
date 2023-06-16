import React, { useState } from 'react';
import './Skills.css';
import App from '../App';
import { Slide } from '@material-ui/core';
import AntonMichnaResume from '../Images/AntonMichnaResume.pdf';

function Skills() {
    const [showApp, setShowApp] = useState(false);
    const [showSkills, setShowSkills] = useState(true);
    const [showResume, setShowResume] = useState(false);
    

    const handleGoBackClick = () => {
        setShowSkills(false);
        setShowApp(true);
      };
    const handleShowSkills = () => {
        setShowApp(false);
      };

      const handleOpenResume = () => {
        setShowResume(true);
      };
    
      const handleCloseResume = () => {
        setShowResume(false);
      };
      

  return (

    <div className='skills-component'>
      <Slide direction='up' in={showSkills} mountOnEnter unmountOnExit>
          <div className='skills-to-contain'>
            <div className='skills-first-heading'>
              Skills
            </div>

            <div className='skills-text-description'>
              Throughout my career and education I have acquired many different skills pertaining to programming languages and technologies. Below is a list describing my experience in each:
            </div>


        <div className="skills-lists-container">
            <div className='skills-list-desription'>
            <ul className="bulleted-list">
              <li>Python - Over 10,000 lines of code</li>
              <li>Java - Over 10,000 lines of code</li>
              <li>Java Script - Over 10,000 lines of code</li>
              <li>Swift - Over 3,000 lines of code</li>
              <li>Ruby - Over 5,000 lines of code</li>
              <li>C/C++ - Over 3,000 lines of code</li>
              <li>HTML - Over 7,000 lines of code</li>
              <li>CSS - Over 7,000 lines of code</li>
            </ul>             
            </div>

            <div className='skills-list-desription'>
            <ul className="bulleted-list">
              <li>Git - 4 years of experience</li>
              <li>Azure Devops - 2 years of experience</li>
              <li>React - 3 years of experience</li>
              <li>Ruby on Rails - 2 years of experience</li>
              <li>PowerBI - 1 year of experience</li>
              <li>Kubernetes - 1 year of experience</li>
              <li>Node.js - 3 years of experience</li>
            </ul>             
            </div>

        </div>

              <div className='skills-text-description'>
                My complete resume can be viewed below.
              </div>

              <div className='skills-middle-link-button'>
                <button className='custom-button' onClick={handleOpenResume}>
                  Open Resume
                </button>
              </div>




              <div className='skills-middle-link-button'>
                <button className='custom-button' onClick={handleGoBackClick}>Go Back</button>
              </div>

          </div>
      </Slide>

      {showApp && <App directionWhenCalled={'down'} />}

      {showResume && (
        <div className="resume-popup">
          <embed className="resume-pdf" src={AntonMichnaResume} type="application/pdf" />
          <button className="close-button" onClick={handleCloseResume}>
            Close Resume
          </button>
        </div>
      )}

    </div>

  );
}

export default Skills;