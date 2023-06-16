import React, { useState } from 'react';
import './Education.css';
import App from '../App';
import { Slide } from '@material-ui/core';
import UofM1 from '../Images/UofM1.jpg';

function Education() {
    const [showApp, setShowApp] = useState(false);
    const [showEdd, setShowEdd] = useState(true);
    

    const handleGoBackClick = () => {
        setShowEdd(false);
        setShowApp(true);
      };
    const handleShowEdd = () => {
        setShowApp(false);
      };

  return (

    <div className='education-child-component'>
      <Slide direction='right' in={showEdd} mountOnEnter unmountOnExit>
          <div className='education-container'>
            <div className='education-heading-one'>
              Education
            </div>

            <div className='education-heading-two'>
              The University of Memphis
            </div>

            <div className='image-for-education'>
              <img
                src={UofM1}
                alt='s'
                style={{ width: '75vw', height: 'auto' }}
              />
            </div>

            <div className='education-text-description'>
            I graduated from The University of Memphis with a Baccalaureate degree in Computer Science in May of 2023. I completed this degree in 3 years, spanning from August 2020 to May 2023, with a Grade Point Average of 3.94. Relevant courses that I took include: Software Engineering, Computer Architecture, Data Structures and Algorithms, Programming Languages, Data Visualization, Operating Systems, Artificial Intelligence, 
Data Mining, and Networking.
            </div>
         
        


              <div className='education-go-back-link'>
                <button className='custom-button' onClick={handleGoBackClick}>Go Back</button>
              </div>

          </div>
            
      </Slide>

      {showApp && <App directionWhenCalled={'left'} />}
    </div>

  );
}

export default Education;


