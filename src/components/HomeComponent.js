// import css 
import './css/Home.css';

import IntroImg from '../assets/intro-bg.jpg';

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
          <p>HI, I'M Bryan Herrera EST.</p>
          <h1> Lorem ipsum </h1>
          <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
