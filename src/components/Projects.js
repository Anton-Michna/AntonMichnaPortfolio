import React, { useState } from 'react';
import { Slide } from '@material-ui/core';
import ContentSquare from './ContentSquare.js';
import './Projects.css';
import App from '../App';
import SplitFinder1 from '../Images/SplitFinder1.PNG';
import SplitFinder2 from '../Images/SplitFinder2.PNG';
import VeggieEater1 from '../Images/VeggieEater1.png';
import VeggieEater2 from '../Images/VeggieEater2.png';
import Person1 from '../Images/Person1.PNG';

function Projects() {
  const [showApp, setShowApp] = useState(false);
  const [showProj, setShowProj] = useState(true);
  const [activeSquareIndex, setActiveSquareIndex] = useState(null);

  const handleGoBackClick = () => {
    setShowProj(false);
    setShowApp(true);
  };

  const handleSquareClick = (index) => {
    setActiveSquareIndex(index);
  };

  return (
    <div className="child-component">
      <Slide direction="left" in={showProj} mountOnEnter unmountOnExit>
        <div className="slide-container">
          <div className="heading-text">Personal Projects</div>

          <ContentSquare
            index={'Running Split Calculator'}
            images={[SplitFinder1, SplitFinder2]}
            description={
              'A GUI based application that calculates: How much time a user must cover a certain distance in, in order to run the user’s desired pace: What the average kilometer or mile the user ran based on a certain distance and time.'
            }
            github={'https://github.com/Anton-Michna/SplitCalculator.git'}
          />
          <ContentSquare
            index={'Veggie Eater 2'}
            images={[VeggieEater1, VeggieEater2]}
            description={
              'A Swift/SwiftUI IOS application that allows the user to feed a character in order to keep him alive. When the characters health reaches zero, the character dies and the user has the option to start again.'
            }
            github={'https://github.com/Anton-Michna/Veggie_Eater_2App.git'}
          />
          <ContentSquare
            index={'Personal Portfolio'}
            images={[Person1]}
            description={'Personal Portfolio Website created in React.'}
            github={''}
          />

          

          <div className="go-back-link">
            <button className='custom-button' onClick={handleGoBackClick}>Go Back</button>
          </div>
        </div>
      </Slide>

      {showApp && <App directionWhenCalled={'right'} />}
    </div>
  );
}

export default Projects;




