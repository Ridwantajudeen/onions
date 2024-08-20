import React, { useState } from 'react';
import signup from './images/signup.jpg';
import { Link } from 'react-router-dom';
import logo from './Landing-page/images/onion.png';
import eyeIcon from './images/show-password.png';
import line from './images/or-line.png'; // Ensure this path is correct
import google from './images/google-logo.png'; // Ensure this path is correct

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
      setError("Password must be at least 8 characters long.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (!/\d/.test(password)) {
      setError("Password must contain at least one digit.");
      return false;
    }
    if (!/[@#!$%&*()?]/.test(password)) {
      setError("Password must contain at least one special character.");
      return false;
    }

    setError(''); // Clear error if all conditions are met
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError2("Passwords do not match.");
      return false;
    }

    setError2(''); // Clear error if passwords match
    return true;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validate as the user types
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(password, newConfirmPassword); // Validate as the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === 'employer' && (!validatePassword(password) || !validateConfirmPassword(password, confirmPassword))) {
      return; // Stop form submission if validation fails
    }

    // Handle form submission here
    console.log('User type:', userType);
  };

  return (
    <div className="signup-container">
      <div className='signup-content'>
        <div className='signup-img'>
          <img src={signup} className='signup-image' alt='signup-image' />
        </div>
        <div className='signup-right'>
        <Link to="/">
          <img src={logo} className='signup-logo' alt='logo' />
          </Link>
          <h4>Create an account</h4>
          <p>Sign Up now and get exclusive access</p>
          <form onSubmit={handleSubmit}>
            <div className="user-type-selection">
              <label>
                <input
                  type="radio"
                  value="employer"
                  checked={userType === 'employer'}
                  onChange={handleUserTypeChange}
                />
                Employer
              </label>
              <label>
                <input
                  type="radio"
                  value="teacher"
                  checked={userType === 'teacher'}
                  onChange={handleUserTypeChange}
                />
                Teacher
              </label>
            </div>

            {userType === 'employer' && (
              <div className="employer-form">
                <h3>Employer Signup</h3>
                <div className='signup-form'>
                  <label>
                    Full Name:<br />
                    <input type="text" name="fullName" required />
                  </label><br />
                  <label>
                    Email: <br />
                    <input type="email" name="Email" required />
                  </label><br />
                  <div className="password-input-container">
                    <label>
                      Password: <br />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      <img
                        src={eyeIcon}
                        alt="Show Password"
                        className="toggle-password-icon"
                        onClick={toggleShowPassword}
                      />
                    </label>
                  </div>
                  {error && <div className="error-message">{error}</div>}<br />
                  <div className="password-input-container">
                    <label>
                      Confirm Password: <br />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      <img
                        src={eyeIcon} 
                        alt="Show Password"
                        className="toggle-password-icon"
                        onClick={toggleShowPassword}
                      />
                    </label>
                  </div>{error2 && <div className="error-message">{error2}</div>}
                  <br />
                </div>
              </div>
            )}

            {userType === 'teacher' && (
              <div className="teacher-form">
                <h3>Teacher Signup</h3>
                <div className='signup-form'>
                  <label>
                    Full Name:<br />
                    <input type="text" name="fullName" required />
                  </label><br />
                  <label>
                    Email: <br />
                    <input type="email" name="Email" required />
                  </label><br />
                  <div className="password-input-container">
                    <label>
                      Password: <br />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      <img
                        src={eyeIcon}
                        alt="Show Password"
                        className="toggle-password-icon"
                        onClick={toggleShowPassword}
                      />
                    </label>
                  </div>
                  {error && <div className="error-message">{error}</div>}<br />
                  <div className="password-input-container">
                    <label>
                      Confirm Password: <br />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="ConfirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      <img
                        src={eyeIcon} 
                        alt="Show Password"
                        className="toggle-password-icon"
                        onClick={toggleShowPassword}
                      />
                    </label>
                  </div>{error2 && <div className="error-message">{error2}</div>}
                  <br />
                  <label>
                  Resume: <br />
                  <input type="file" name="resume" />
                </label><br />
                </div>
              </div>
            )}

            {userType && (
              <>
                <button className='signup-submit' type="submit">Sign Up</button>
                <div className='signup-bottom'>
                  <img src={line} className='signup-line' alt='line'/><br />
                  <button className='google-button'><img src={google} className='google-logo' alt='google'/>Sign up with Google</button><br />
                  <p>Already have an account? <a className='signup-login' href='/login'>Login</a></p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
