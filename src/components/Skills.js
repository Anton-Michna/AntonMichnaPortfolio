import React, { useState } from 'react';
import './Education.css';
import App from '../App';
import { Slide } from '@material-ui/core';

function Skills() {
    const [showApp, setShowApp] = useState(false);
    const [showSkills, setShowSkills] = useState(true);
    

    const handleGoBackClick = () => {
        setShowSkills(false);
        setShowApp(true);
      };
    const handleShowSkills = () => {
        setShowApp(false);
      };

  return (

    <div className='child-component'>
      <Slide direction='up' in={showSkills} mountOnEnter unmountOnExit>
          <div className='slide-container'>
              <div className='header-text'>
                <h1>Hello</h1>
              </div>
              <div className='middle-link'>
                <button className='custom-button' onClick={handleGoBackClick}>Go Back</button>
              </div>
            </div>
      </Slide>

      {showApp && <App directionWhenCalled={'down'} />}
    </div>

  );
}

export default Skills;