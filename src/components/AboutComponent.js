import React from 'react'
import './css/About.css'
import { Component } from 'react'
import { Link } from 'react-router-dom';
import MyImg1 from "../assets/person-profile-icon.png"
// import MyImg1 from "../assets/Me3.jpg"
import BackgroundIMG from "../assets/homeImg.jpg"

class HeroImg3 extends Component {
    render() {
      return(
        
        <div className='container'>
           <img className='backgroundAbout' src={BackgroundIMG} alt="Background" /> 
          
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>


           
        <div className='container-about'>
          <br></br><br></br>
          <h1 className='title'>About <span> Me</span></h1>
          <div className='about-content'>
          <div className='image'>
            <img src={MyImg1}></img>
          </div>

          <div className='content'>
            <h2> <span>I'm </span>Bryan Steward Herrera Est,</h2>
            <br></br>
            <p>
              The U.S. is a country of 50 states covering a vast swath of North America, 
              with Alaska in the northwest and Hawaii extending the nation's presence into 
              the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance 
              the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance 
              the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance 
              the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance 
            </p>
            <a href='' className='CV'>Download CV</a>
            
            </div>
            
          </div>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          </div>
          </div>
    );
   }
  }
     
  
  
  export default HeroImg3;