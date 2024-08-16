import React from "react";
import logo from './images/onion-logo-white.png';
import fb from './images/fb.png';
import x from './images/x.png';
import linkedin from './images/in.png';
import ig from './images/ig.png';
import call from './images/call.png';
import location from './images/location.png'


function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer">
            <div className="footer-top">
       <div className="footer-left">
        <img src={logo} className="footer-onion-logo" alt="onion-logo"/>
        <p className="footer-left-text">Onion is a platform that bridges the gap between teaching<br /> 
graduates and individuals aspiring to start careers in education <br /> 
with potential employers</p>
<div className="footer-socials">
    <img src={fb} className="footer-social" alt="footer-social"/>
    <img src={ig} className="footer-social" alt="footer-social"/>
    <img src={x} className="footer-social" alt="footer-social"/>
    <img src={linkedin} className="footer-social" alt="footer-social"/>
</div>
       </div>
       <div className="footer-middle">
        <ul>
            <h5>Quick Links</h5>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
        </ul>
       </div>
       <div className="footer-right">
        <ul>
            <h5>Quick Contact</h5>
            <li><img src={location} className="footer-right-img" alt='footer-right-img'/><p> Ugbowo,Benin City, Edo 
            State,Nigeria.</p></li>
            <li><img src={call} className="footer-right-img" alt='footer-right-img'/><p>0812576727, 0912767956</p></li>
        </ul>
       </div>
       </div>
       <div className="divider-wrap">
<div className="divider"></div>
</div>
<div className="footer-bottom">
    <p className="footer-copyright">&copy; {currentYear} Onion inc. All right reserved.</p>
</div>
        </div>
    )
}

export default Footer;