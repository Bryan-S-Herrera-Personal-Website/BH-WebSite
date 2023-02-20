import React from 'react'
import './css/heroimg3.css'
import { Component } from 'react'

class HeroImg3 extends Component {
    render() {
      return(  
        <div className='hero-img3'>
        <div className='heading3'>
          <h1>{this.props.heading}</h1>
          <br></br>
          <p>I'm a student of IT Engineer</p>
        </div>
    </div>
    );
   }
  }
     
  
  
  export default HeroImg3;