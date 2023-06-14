import React, { useState } from 'react';
import EducationComponent from './EducationComponent';
import ProjectsComponent from './ProjectsComponent';
import InterestsComponent from './InterestsComponent';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'education':
        return <EducationComponent handleLinkClick={handleLinkClick} />;
      case 'projects':
        return <ProjectsComponent handleLinkClick={handleLinkClick} />;
      case 'interests':
        return <InterestsComponent handleLinkClick={handleLinkClick} />;
      default:
        return (
          <div>
            <div className="animated-background"></div>
            <div className="profile-picture"></div>
            <div className="header-text">
              <h1>
                Anton Michna
              </h1>
            </div>

            <div className="left-link">
              {activeComponent !== 'education' ? (
                <a href="#" onClick={() => handleLinkClick('education')}>Education</a>
              ) : (
                <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
              )}
            </div>

            <div className="middle-link">
              {activeComponent !== 'projects' ? (
                <a href="#" onClick={() => handleLinkClick('projects')}>Projects</a>
              ) : (
                <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
              )}
            </div>

            <div className="right-link">
              {activeComponent !== 'interests' ? (
                <a href="#" onClick={() => handleLinkClick('interests')}>Interests</a>
              ) : (
                <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
              )}
            </div>
          </div>
        );
    }
  };

  return <body>{renderComponent()}</body>;
}

export default App;


