import './css/heroimg4.css'
import React from 'react'
import { Component } from 'react'

class HeroImg4 extends Component {
    render() {
      return(
        
        <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
          Don't hesitate to reach out with the contact information below, 
          or send a message using the form.
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>Esparza, Puntarenas, Costa Rica</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p>bryanherrera2@gmail.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p>+506-8555 7504</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with Me:</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <form action="" >
            <h3 class="title">Contact Me</h3>
            <div class="input-container">
              <input type="text" name="name" id='name' placeholder='Your Name' class="input" />
              
          
            </div>
            <div class="input-container">
              <input type="email" name="email" id='email' placeholder='Your Email' class="input" />

            </div>
            <div class="input-container">
              <input type="tel" name="phone" id='phone' placeholder='Your Phone Number' class="input" />

            </div>
            <div class="input-container textarea">
              <textarea name="message" id='message' placeholder='Your Message' class="input"></textarea>


            </div>
            <button className='btn' type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>

  );
    
}
}

export default HeroImg4