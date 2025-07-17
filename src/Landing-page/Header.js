import React from 'react';
import onionlogo from './images/onion.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-4 md:px-8">
      <img
        src={onionlogo}
        alt="logo"
        className="w-[120px] h-auto"
      />

      <nav className="hidden md:flex gap-6 text-sm">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About us</p>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Contact us</p>
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
