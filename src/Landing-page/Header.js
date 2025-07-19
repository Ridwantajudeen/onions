import React, { useState, useEffect } from 'react';
import onionlogo from './images/onion.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
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
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center h-16 px-4 md:px-8 bg-white z-50 shadow-sm transform transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <a href="#home">
          <img src={onionlogo} alt="logo" className="w-[120px] h-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="cursor-pointer hover:text-green-800">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-green-800">
            About us
          </a>
          <a href="#faq" className="cursor-pointer hover:text-green-800">
            FAQ
          </a>
          <a href="#contact" className="cursor-pointer hover:text-green-800">
            Contact us
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-green-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown (Animated) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="md:hidden fixed top-16 right-4 w-48 bg-white shadow-lg rounded-lg z-40 px-4 py-4 space-y-3 text-sm"
          >
            <a
              href="#home"
              className="block hover:text-green-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-green-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="#faq"
              className="block hover:text-green-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block hover:text-green-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </a>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 rounded-md bg-green-800 text-white text-sm py-2">
                Sign up
              </button>
            </Link>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 rounded-md border border-green-800 text-green-800 text-sm py-2">
                Sign in
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
