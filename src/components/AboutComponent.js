import React from 'react'
import './css/About.css'
import { Component } from 'react'
import { Link } from 'react-router-dom';
import MyImg1 from "../assets/person-profile-icon.png"

class HeroImg3 extends Component {
    render() {
      return(  
        <div className='about'>  

          <div className='main'>
            <div className='img-container'>
            <img src={MyImg1}></img>
            </div>
            
            <div className='about-text'>
              <h1>Bryan H,</h1>
              <h1>About Me</h1>
              <h5>Student of <span>IT Engineer</span></h5>
              <p>
              The U.S. is a country of 50 states covering a vast 
              swath of North America, with Alaska in the northwest
              and Hawaii extending the nation's presence into the 
              Pacific Ocean. Major Atlantic Coast cities are New 
              York, a global finance and culture center, 
              and capital Washington, DC. Midwestern metropolis 
              Chicago is known for influential architecture and 
              on the west coast, Los Angeles' Hollywood is famed 
              for filmmaking. ― Google
              </p>
              <br></br>
              <Link to="/Contact">
                 <button className='btn2'>Contact</button>
              </Link>
            </div>
          </div>

        </div>
    );
   }
  }
     
  
  
  export default HeroImg3;