import React from "react";
import logo from './images/onion-logo-white.png';
import fb from './images/fb.png';
import x from './images/x.png';
import linkedin from './images/in.png';
import ig from './images/ig.png';
import call from './images/call.png';
import location from './images/location.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 px-4 py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        
        {/* Left */}
        <div className="md:w-1/3">
          <img src={logo} alt="onion-logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Onion is a platform that bridges the gap between teaching graduates and individuals aspiring to start careers in education with potential employers.
          </p>
          <div className="flex mt-4 gap-3">
            <img src={fb} alt="facebook" className="w-6 h-6 cursor-pointer" />
            <img src={ig} alt="instagram" className="w-6 h-6 cursor-pointer" />
            <img src={x} alt="x" className="w-6 h-6 cursor-pointer" />
            <img src={linkedin} alt="linkedin" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Middle */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Quick Contact</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <img src={location} alt="location" className="w-5 h-5 mt-1" />
              <p>Nigeria</p>
            </li>
            <li className="flex gap-2">
              <img src={call} alt="call" className="w-5 h-5 mt-1" />
              <p>+234 816 3422 787</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {currentYear} Onion Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
