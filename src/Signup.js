import React, { useState } from 'react';
import signup from './images/signup.jpg';
import { Link } from 'react-router-dom';
import logo from './Landing-page/images/onion.png';
import eyeIcon from './images/show-password.png';
import line from './images/or-line.png';
import google from './images/google-logo.png';

function Signup() {
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Include at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setError("Include at least one lowercase letter.");
      return false;
    }
    if (!/\d/.test(password)) {
      setError("Include at least one digit.");
      return false;
    }
    if (!/[@#!$%&*()?]/.test(password)) {
      setError("Include at least one special character.");
      return false;
    }
    setError('');
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError2("Passwords do not match.");
      return false;
    }
    setError2('');
    return true;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(password, newConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password) || !validateConfirmPassword(password, confirmPassword)) {
      return;
    }
    console.log('User type:', userType);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={signup} alt="signup" className="h-full w-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center px-8 py-10">
          <Link to="/" className="mb-4">
            <img src={logo} alt="logo" className="h-10 mx-auto" />
          </Link>

          <h4 className="text-2xl font-semibold text-green-800 mt-2">Create an account</h4>
          <p className="text-sm text-gray-500 mt-1">Sign up now and get exclusive access</p>

          <form onSubmit={handleSubmit} className="w-full max-w-xs mt-6 space-y-4">
            {/* User Type */}
            <div className="flex justify-around">
              <label className="text-sm">
                <input
                  type="radio"
                  value="employer"
                  checked={userType === 'employer'}
                  onChange={handleUserTypeChange}
                  className="mr-1"
                />
                Employer
              </label>
              <label className="text-sm">
                <input
                  type="radio"
                  value="teacher"
                  checked={userType === 'teacher'}
                  onChange={handleUserTypeChange}
                  className="mr-1"
                />
                Teacher
              </label>
            </div>

            {userType && (
              <>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <img
                    src={eyeIcon}
                    alt="Toggle Password"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                </div>
                {error && <p className="text-xs text-red-600">{error}</p>}

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <img
                    src={eyeIcon}
                    alt="Toggle Password"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                    onClick={toggleShowPassword}
                  />
                </div>
                {error2 && <p className="text-xs text-red-600">{error2}</p>}

                {userType === 'teacher' && (
                  <input
                    type="file"
                    name="resume"
                    className="text-sm"
                  />
                )}

                <button
                  type="submit"
                  className="w-full bg-green-800 text-white text-sm font-medium py-2 rounded hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </button>

                <div className="w-full flex items-center my-4">
                  <img src={line} alt="or" className="w-full" />
                </div>

                <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2 text-sm hover:bg-gray-100 transition-colors">
                  <img src={google} alt="Google" className="h-4 w-4 mr-2" />
                  Sign up with Google
                </button>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-green-800 font-medium hover:underline">
                    Login
                  </Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
