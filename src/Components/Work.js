import React from 'react';
import "./DynamicCardstyles.css";
import DynamicCard from './DynamicCard';
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {WorkCardData.map((val, ind) => (
          <DynamicCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            viewLink={val.view}
            sourceLink={val.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
