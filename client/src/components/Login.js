import React, { useState } from 'react';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form login">
      <header>Login</header>
      <form>
        <div className="field input-field">
          <input type="email" placeholder="Email" className="input" />
        </div>

        <div className="field input-field">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            className="password"
          />
          <i onClick={togglePasswordVisibility} className='bx bx-hide eye-icon'></i>
        </div>

        {/* Other form fields and buttons */}
      </form>
    </div>
  );
};

export default Login;
