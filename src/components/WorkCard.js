import './css/WorkCard.css'

import React from 'react'
import pro1 from "../assets/ProjectImg1.png"
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={pro1} alt="image"/>
                <br></br>
                <h2 className='project-title'>My Personal Web</h2>
                <div className='pro-details'>
                    <p>
                        Podcast Thriving Facebook community and top-
                        ranked, Amy inspires a grounded, tangible and
                        self-affirming sense of "Wow! I really can do this" for over 100,000 online entrepreneurs
                        .best-selling marketting courses
                   </p>
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