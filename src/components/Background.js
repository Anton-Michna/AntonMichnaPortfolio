import React, { useState } from 'react';
import './Background.css';
import App from '../App';

const Background = () => {
  //const slideDirection = 'up'; // Specify the desired slide direction

  return (
    <div>
      <div className="animated-background"></div>
      <div className='holder'>
        <App directionWhenCalled={'down'}/>
      </div>
    </div>
  );
};

export default Background;



