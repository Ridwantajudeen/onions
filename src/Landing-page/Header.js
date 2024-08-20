import React from 'react'
import onionlogo from './images/onion.png'
import { Link } from 'react-router-dom';
 
function Header(){
    return(
        <div className='header'>
            <img src={onionlogo} alt="logo" className='onion-logo'/>
            <div className="top-texts"> 
                <p>Home</p>
                <p>About us</p>
                <p> FAQ</p>
                <p>Contact us</p>
            </div>
            <div className="top-btn">
                <Link to="/signup">
            <button className="sign-up">Sign up</button>
            </Link>
            <Link to="/login">
            <button className="sign-in">Sign in</button>
            </Link>
            </div>
        </div>
    )
}

export default Header;