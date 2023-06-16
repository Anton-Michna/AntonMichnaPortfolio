import React, { useState } from 'react';
import './testapp.css';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Slide } from '@material-ui/core';
import Anton from './anton.jpg';

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

    <div className='app-component'>
    <Slide direction={slideDirection} in={!isActive} mountOnEnter unmountOnExit>
      <div className='app-to-contain'>
        <div className='image-for-app'>
          <img 
            src={Anton}
            alt='s'
            style={{ width: 'auto', height: '55vh', borderRadius: '50%' }}
          />
        </div>

        
        <div className='app-first-heading'>
              Anton Michna
        </div>


        <div className='buttons-to-contain'>

            <div className='right-link'>
              <button className="custom-button" onClick={handleEducationClick}>Education</button>
            </div>

            <div className='middle-link'>
              <button className="custom-button" onClick={handleSkillsClick}>Skills</button>
            </div>

            <div className='left-link'>
              <button className="custom-button" onClick={handleProjectsClick}>Projects</button>
            </div>


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





















