import React, { useState } from 'react';
import login from './images/login-img.jpg';
import logo from './Landing-page/images/onion.png';
import eyeIcon from './images/show-password.png';
import { Link } from 'react-router-dom';
import line from './images/or-line.png';
import google from './images/google-logo.png';

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={login} alt="login" className="h-full w-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center px-8 py-10">
          <Link to="/" className="mb-4">
            <img src={logo} alt="logo" className="h-10 mx-auto" />
          </Link>

          <h4 className="text-2xl font-semibold text-green-800 mt-2">Welcome Back</h4>
          <p className="text-sm text-gray-500 mt-1">Login to continue your journey</p>

          <form onSubmit={handleSubmit} className="w-full max-w-xs mt-6 space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <img
                  src={eyeIcon}
                  alt="Show Password"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  onClick={toggleShowPassword}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white text-sm font-medium py-2 rounded hover:bg-green-700 transition-colors"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="w-full max-w-xs flex items-center my-4">
            <img src={line} alt="or" className="w-full" />
          </div>

          {/* Google Login */}
          <button className="w-full max-w-xs flex items-center justify-center border border-gray-300 rounded py-2 text-sm hover:bg-gray-100 transition-colors">
            <img src={google} alt="Google" className="h-4 w-4 mr-2" />
            Login with Google
          </button>

          <p className="text-xs text-gray-600 mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-green-800 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
