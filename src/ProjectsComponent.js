import React from 'react';
import './App.css';

function ProjectsComponent({ handleLinkClick }) {
  return (
    <div>
      <h2>Projects Component</h2>
      <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
    </div>
  );
}

export default ProjectsComponent;
