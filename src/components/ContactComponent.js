import './css/Contact.css'
import React from 'react'
import { Component } from 'react'


// Contact Component
class HeroImg4 extends Component {
    render() {
      return(

        <div class="contenido">

          

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>

        <h1 class="logo">Contact <span>Me</span></h1>

        <br></br>
        <br></br>

        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <h3>Contact Me</h3>
                <form action="https://formsubmit.co/bryanherreraestrada2@gmail.com" method="POST">
                    <p>
                        <label>Name</label>
                        <input type="text" name="name" required></input>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" required></input>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="tel" name="phone"></input>
                    </p>
                    <p>
                        <label>Subject</label>
                        <input type="text" name="subject"></input>
                    </p>
                    <p class="block">
                       <label>Message</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                    <button type="submit">Send</button>
                    </p>
                </form>
            </div>
            

            <div class="contact-info">
                <h4>More Info</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> bryanherreraestrada2@gmail.com</li>
                    <br></br>
                    <li><i class="fas fa-phone"></i> (506) 85557504</li>
                    <br></br>
                    <li> Esparza, Puntarenas, Costa Rica</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
            </div>
        </div>
        </div>

  );
    
}
}

export default HeroImg4