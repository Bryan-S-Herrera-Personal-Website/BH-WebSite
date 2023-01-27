// import css
import './css/NavbarStyles.css';

// react stuff
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars} from 'react-icons/fa';
import { FaTimes} from 'react-icons/fa';
// Navbar Component
const Navbar = () => {

    const [click, setClick] = useState();
    const handleClick = () => setClick(!click);


  return (
    <div className='header'>
        <Link to="/">
           <h1>Bryan's Website</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}> 
            <li>
                <Link to="/Home">
                    Home
                </Link>
            </li>

            <li>
                <Link to="/About">
                    About
                </Link>
            </li>

            <li>
                <Link to="/Project">
                    Projects
                </Link>
            </li>

            <li>
                <Link to="/Contact">
                    Contact
                </Link>
            </li>

        </ul>
        
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                 <FaTimes size={20} style={{ color: "#fff" } } />
            ) : (
                <FaBars size={20} style={{ color: "#fff" } } />
            )
            
            } 
           
            
        </div>
    </div>
  )
}

export default Navbar