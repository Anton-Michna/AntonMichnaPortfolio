import React from 'react';
import './App.css';

function EducationComponent({ handleLinkClick }) {
  return (
    <div>
      <h2>Education Component</h2>
      <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
    </div>
  );
}

export default EducationComponent;
