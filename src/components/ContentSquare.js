import React, { useState } from 'react';
import './ContentSquare.css';
import SplitFinder1 from '../Images/SplitFinder1.PNG';
import SplitFinder2 from '../Images/SplitFinder2.PNG';
import VeggieEater1 from '../Images/VeggieEater1.png';
import VeggieEater2 from '../Images/VeggieEater2.png';
import Person1 from '../Images/Person1.PNG';

const ContentSquare = ({ index, images, description, github }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`content-square ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content-square-index">{index}</div>
      <div className="content-square-images">

      {index === 'Running Split Calculator' && (
          <>
            <img
              src={SplitFinder1}
              alt="s"
              style={{ width: '50%', height: 'auto' }}
            />
            <img
              src={SplitFinder2}
              alt="s"
              style={{ width: '50%', height: 'auto' }}
            />
          </>
        )}

        {index === 'Veggie Eater 2' && (
          <>
          <div className='image-container'>
            <img
              src={VeggieEater1}
              alt="s"
              style={{ width: '30%', height: 'auto' }}
            />
            <img
              src={VeggieEater2}
              alt="s"
              style={{ width: '30%', height: 'auto'  }}
            />
          </div>
          
          </>
        )}

        {index === 'Personal Portfolio' && (
                  <>
                  <div className='image-container'>
                    <img
                      src={Person1}
                      alt="s"
                      style={{ width: '85%', height: 'auto' }}
                    />
                    </div>
                  </>
                )}

      </div>
      <div className="content-square-description">{description}</div>
      <div className="content-square-github">{github}</div>
    </div>
  );
};

export default ContentSquare;



