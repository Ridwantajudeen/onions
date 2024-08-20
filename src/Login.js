import React, { useState } from 'react';
import login from './images/login-img.jpg';
import logo from './Landing-page/images/onion.png';
import eyeIcon from './images/show-password.png';
import { Link } from 'react-router-dom';
import line from './images/or-line.png'; // Ensure this path is correct
import google from './images/google-logo.png'; // Ensure this path is correct

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
    <div className="login-container">
      <div className='login-content'>
        <div className='login-img'>
          <img src={login} className='login-image' alt='login-image' />
        </div>
        <div className='login-right'>
        <Link to="/">
          <img src={logo} className='login-logo' alt='logo' />
          </Link>
          <h4>Welcome Back</h4>
          <p>Login to Continue your Journey</p>
          <div className='login-form'>
          <form onSubmit={handleSubmit}>
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
            <button className='login-submit' type="submit">Login</button>
          </form>
          </div>
          <div className='login-bottom'>
            <img src={line} className='login-line' alt='line'/><br />
            <button className='google-button'><img src={google} className='google-logo' alt='google'/>Login with Google</button><br />
            <p>Don’t have an account? <a className='login-login' href='/signup'>sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

