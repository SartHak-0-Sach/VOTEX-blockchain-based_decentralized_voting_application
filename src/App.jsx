import React from 'react';
import CustomNavbar from './Navbar';
import image from '/image.png';
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
          <img src={image} alt="Vote using Votex" className="image" />
        </div>
      </div>
    </>
  );
}

export default App;