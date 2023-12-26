import React, { useState } from 'react';

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form signup">
      <header>Signup</header>
      <form>
        <div className="field input-field">
          <input type="email" placeholder="Email" className="input" />
        </div>

        <div className="field input-field">
          <input
            type="password"
            placeholder="Create password"
            className="password"
          />
          <input
            type="password"
            placeholder="Create password"
            className="password"
          />
        </div>

        <div className="field input-field">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Confirm password"
            className="password"
          />
          <i onClick={togglePasswordVisibility} className='bx bx-hide eye-icon'></i>
        </div>

        {/* Other form fields and buttons */}
      </form>
    </div>
  );
};

export default Signup;
