import React, { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Slide } from '@material-ui/core';

function App( {directionWhenCalled} ) {
  const [showEducation, setShowEducation] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [slideDirection, setSlideDirection] = useState(directionWhenCalled); // Lifted state for slide direction



  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleEducationClick = () => {
    setSlideDirection('left'); // Update slide direction
    setShowEducation(true);
    setIsActive(true);
  };

  const handleProjectsClick = () => {
    setSlideDirection('right'); // Update slide direction
    setShowProjects(true);
    setIsActive(true);
  };

  const handleSkillsClick = () => {
    setSlideDirection('down'); // Update slide direction
    setShowSkills(true);
    setIsActive(true);
  };

  return (
    <div className='child-component'>
      <Slide direction={slideDirection} in={!isActive} mountOnEnter unmountOnExit>
        <div className='slide-container'>
          <div className={`profile-picture ${isActive ? 'slide-out' : ''}`}></div>

          
          <h1 style={{ fontSize: '60px', marginTop: '50px' }}>Anton Michna</h1>


          

          <div className='right-link'>
            <button className="custom-button" onClick={handleEducationClick}>Education</button>
          </div>

          <div className='left-link'>
            <button className="custom-button" onClick={handleProjectsClick}>Projects</button>
          </div>

          <div className='middle-link'>
            <button className="custom-button" onClick={handleSkillsClick}>Skills</button>
          </div>

        </div>
      </Slide>

      {showEducation && <Education />}
      {showProjects && <Projects />}
      {showSkills && <Skills />}
    </div>
  );
}

export default App;





















