import React, { useState } from 'react';
import './Education.css';
import App from '../App';
import { Slide } from '@material-ui/core';

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

    <div className='child-component'>
      <Slide direction='right' in={showEdd} mountOnEnter unmountOnExit>
          <div className='slide-container'>
              <div className='heading-text'>
                <h1>bonjour</h1>
              </div>

              
              <div className='middle-link'>
                <button className='custom-button' onClick={handleGoBackClick}>Go Back</button>
              </div>
            </div>
      </Slide>

      {showApp && <App directionWhenCalled={'left'} />}
    </div>

  );
}

export default Education;


