import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import HeroImg3 from '../components/AboutComponent';

export const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg3 heading="ABOUT ME" />

      <Footer/>
    </div>
  )
}

export default About;
