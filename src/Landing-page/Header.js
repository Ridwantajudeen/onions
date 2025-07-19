import React, { useState, useEffect } from 'react';
import onionlogo from './images/onion.png';
import { Link } from 'react-router-dom';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolled past 150px & scrolling down
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center h-16 px-4 md:px-8 bg-white z-50 shadow-sm transform transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <a href="#home">
        <img
          src={onionlogo}
          alt="logo"
          className="w-[120px] h-auto"
        />
      </a>

      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#home" className="cursor-pointer hover:text-green-800">Home</a>
        <a href="#about" className="cursor-pointer hover:text-green-800">About us</a>
        <a href="#faq" className="cursor-pointer hover:text-green-800">FAQ</a>
        <a href="#contact" className="cursor-pointer hover:text-green-800">Contact us</a>
      </nav>

      <div className="flex gap-2">
        <Link to="/signup">
          <button className="w-20 h-9 rounded-md bg-green-800 text-white text-sm">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-20 h-9 rounded-md border border-green-800 text-green-800 text-sm">
            Sign in
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
