import React from 'react';
import "./DynamicCardstyles.css";


const DynamicCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <a href={props.viewLink} target='_blank' rel="noopener noreferrer" className="btn">View</a>
          <a href={props.sourceLink} target='_blank' rel="noopener noreferrer" className="btn">Source</a>
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
