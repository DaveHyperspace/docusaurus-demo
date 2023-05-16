import React from 'react';
import './showcase.css'; // For custom styling

const ShowcaseCard = (props) => {
  return (
    <div className="showcase-card">
      <img src={props.imageSrc} alt={props.name} className="showcase-image" />
      <h2 className="showcase-name">{props.name}</h2>
    </div>
  );
};

export default ShowcaseCard;
