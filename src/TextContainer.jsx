import React from 'react';
import './TextContainer.css';

const TextContainer = ({ heading, text }) =>
{
  return (
    <div className="text-container">
      <div className="heading">{heading}</div>
      <div className="body-text">{text}</div>
    </div>
  );
}

export default TextContainer;
