import React from 'react';
import CustomNavbar from './Navbar';
import hiveLogo from '/hive-logo.png';
import './App.css';

function App()
{
  return (
    <>
      <CustomNavbar />
      <div className="homepage">
        <div className="text-section">
          <h1>Easy Online Voting</h1>
          <p>
            Cast your vote in seconds anonymously and securely with our modern decentralized voting application powered by Hive Blockchain technology
          </p>
        </div>
        <div className="image-section">
          <img src={hiveLogo} alt="Hive Logo" className="hive-logo" />
        </div>
      </div>
    </>
  );
}

export default App;