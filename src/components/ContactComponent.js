import './css/Contact.css'
import React from 'react'
import { Component } from 'react'


// Contact Component
class HeroImg4 extends Component {
    render() {
      return(


          <div class="container-contact">
              <br></br><br></br>
              
             <h1>Connect With Me</h1>
             <p>
             Don't hesitate to reach out with the contact information below, 
             or send a message using the form.
             </p>
             <div className='contact-box'>
              <div className='contact-left'>
                  <h3>Contact Form</h3>
                  <br></br>

                  <form action="https://formsubmit.co/bryanherreraestrada2@gmail.com" method="POST">
                  <label>Name</label>
                  <input type="text" name="name"placeholder="Your Name" required></input>

                  <label>Email</label>
                  <input type="email" name="email"placeholder="Your Email" required></input>

                  <label>Phone</label>
                  <input type="text" name="phone" placeholder="Your Phone Number" required></input>

                  <label>Message</label>
                  <textarea name="message" rows="4" placeholder='How can I help you?'></textarea>
                  <br></br>
                  <button className='btn3' id='Submit-btn' type="submit">Send</button>
                  </form>
                  
              </div>
              
              <div className='contact-right'>
                <h3>Personal Information</h3>
                <table>
                  <tr>
                    <td>Email:</td>
                    <td>bryanherreraestrada2@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>506-85557504</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Esparza, Puntarenas, Costa Rica</td>
                  </tr>
                </table>
              </div>
             </div>
             
          </div>
  );
    
}
}

export default HeroImg4