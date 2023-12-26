import React from 'react';
import '../styles/homepage.scss'
import HomepageGif from '../assets/homepage.gif';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate('/loginandregister');
  };
 
    return (
      <div className="homepagecontainer">
        <div className="text-content">
          <h1>Welcome to Cashehe</h1>
          <h2>Manage Your Finances with Ease</h2>
          <button onClick={navigateToAuth}>LOGIN/REGISTER</button>
        </div>
        <div className="image-content">
        <img src={HomepageGif} alt="Homepage" />
        </div>
      </div>
    );
  };

export default HomePage;
