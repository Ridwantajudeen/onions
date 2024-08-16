import React from 'react'
import onionlogo from './images/onion.png'
 
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
            <button className="sign-up">Sign up</button>
            <button className="sign-in">Sign in</button>
            </div>
        </div>
    )
}

export default Header;