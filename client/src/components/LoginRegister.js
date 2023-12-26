import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/loginregister.scss'; 
import walletIcon from '../assets/wallet_09.jpg'


const LoginRegister = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState({ login: false, signup: false });
  const navigate = useNavigate(); // Hook for navigation

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const togglePasswordVisibility = (formType) => {
    setShowPassword({ ...showPassword, [formType]: !showPassword[formType] });
  };

  const navigateToHome = () => {
    navigate('/'); 
  };

  return (
    <div>
    <section className="container forms">

    <div className={`form ${isSignup ? 'signup' : 'login'}`}>
      <div className="form-content">
        <header>{isSignup ? 'Signup' : 'Login'}</header>
        <form>
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type={showPassword[isSignup ? 'signup' : 'login'] ? 'text' : 'password'}
              placeholder={isSignup ? 'Create password' : 'Password'}
              className="password"
            />
            <i
              className={`bx ${showPassword[isSignup ? 'signup' : 'login'] ? 'bx-show' : 'bx-hide'} eye-icon`}
              onClick={() => togglePasswordVisibility(isSignup ? 'signup' : 'login')}
            ></i>
          </div>
          {!isSignup && (
            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>
          )}
          <div className="field button-field">
            <button>{isSignup ? 'Signup' : 'Login'}</button>
          </div>
          <div className="form-link">
            <span>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <a onClick={toggleForm} className="link">{isSignup ? 'Login' : 'Signup'}</a>
            </span>
          </div>
        </form>
      </div>
      {/* ...Rest of your component (social media options)... */}
    </div>
  </section>
  </div>
    
  );
};

export default LoginRegister;
