import './css/footer.css'

// Footer component

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <p className='getInTouch' style={{color:"#fff", marginRight: "4rem"}}><b>Get In Touch</b></p>
            <br></br>
            <div className='location'>
               
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <div>
                    <p>Esparza, Puntarenas,</p>
                    <p>Costa Rica</p>
                </div>
            </div>
                

                <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    506-85557504
                </h4>
                </div>

                <div className='email'>
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    bryanherreraestrada2@gmail.com
                </h4>
                </div>

            </div>

            <div className='right'>
                <h4>About the Website</h4>
                <p>
                   I built this website when i was 14 years old Because 
                   i wanted to have a portfolio with my skills
                </p>   
                <div className='social'>
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer