import './css/WorkCard.css'
import ProjectCardData from './WorkCardData'

import React from 'react'

const WorkCard = (props) => {
  return (
    <div>
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
                <a
                  href={props.link}
                  target="_blank"
                  className="Work-Btn">{props.linkText01}
                </a>
                <a
                  href={props.link}
                  target="_blank"
                  className="Work-Btn">{props.linkText02}
                  
                </a>
              
            </div>
          </div>
        </div> 
      </div>
          
  </div>
  )
}

export default WorkCard