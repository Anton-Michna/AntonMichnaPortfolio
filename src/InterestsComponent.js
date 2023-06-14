import React from 'react';
import './App.css';

function InterestsComponent({ handleLinkClick }) {
  return (
    <div>
      <h2>Interests Component</h2>
      <a href="#" onClick={() => handleLinkClick(null)}>Go Back</a>
    </div>
  );
}

export default InterestsComponent;
