import './css/WorkCard.css'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData'

import React from 'react'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {WorkCardData.map((val, ind) =>{
                // this funcion is for show the projects cards
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    />
                );
            })}
    
        </div>
    </div>
  );
};

export default Work