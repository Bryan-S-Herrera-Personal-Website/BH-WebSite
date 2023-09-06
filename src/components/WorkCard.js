import './css/WorkCard.css'
import ProjectCardData from './WorkCardData'

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='work-container'>
        <div className='project-container'>
          
            <div className='project-card'>
                <img src={props.imgsrc} alt="image"/>
                <br></br>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>

                   <br></br>
                   <hr></hr>  
                   <br></br>

           
             <div className='work-links'>
              <p>
                <span>Github Link:</span>
                <p>{props.link}</p>
              </p>
              
              </div>
    

            </div>
            </div>
            
            </div> 
            </div>
  )
}

export default WorkCard