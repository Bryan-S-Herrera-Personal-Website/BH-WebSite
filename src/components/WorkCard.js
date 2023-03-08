import './css/WorkCard.css'

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

            <div className='pro-btns'>
              <button class="glow-on-hover" type="button">View</button>
              <button class="glow-on-hover" type="button">Source</button>
      
             </div>
    

            </div>
            </div>
            
            </div> 
            </div>
  )
}

export default WorkCard