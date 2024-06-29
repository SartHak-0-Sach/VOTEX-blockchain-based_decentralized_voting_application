import React from 'react';
import CustomNavbar from './Navbar';
import image from '/image.png';
import './App.css';
import TextContainer from './TextContainer';
import CustomButton from './customButton';

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
          <br />
          <CustomButton title= 'Get Started'
          handleClick={() => {}}
          style = {
            {height: '100px',
          width: '400px'}
          } />
        </div>
        <div className="image-section">
          <img src={image} alt="Vote using Votex" className="image" />
        </div>

      </div>
      <div className='containers'>
        <TextContainer heading="Security Risks:" text="Current physical voting methods using EVMs are susceptible to hacking and tampering in remote areas of our nation.
EVMs can be physically tampered with or destroyed, compromising the integrity of elections.
"></TextContainer>
        <TextContainer heading="Privacy Concerns:" text="Users' personal information is at risk of being leaked in physical voting methods.
Anonymous votes may not remain truly anonymous due to manual counting methods, especially in office polls."></TextContainer>
        <TextContainer heading="Accessibility Issues:" text="Physically challenged individuals face difficulties in reaching voting centers.
Elderly and ill individuals may find it challenging to participate in voting due to mobility issues."></TextContainer>
        <TextContainer heading="Logistical Problems:" text="Organizing physical voting requires substantial resources, including staffing, transportation, and security.
Voting centers can be inconveniently located, making it difficult for some voters to participate.
"></TextContainer>
        <TextContainer heading="Fraud & Manipulation:" text="Physical ballots can be easily lost, stolen, or manipulated.
Manual counting of votes is prone to human error and fraud.
Voter impersonation and ballot stuffing can occur in physical voting setups.
"></TextContainer>
        <TextContainer heading="Time Consuming:" text="Physical voting and counting processes are time-consuming and can delay the announcement of results.
Long lines and wait times at polling stations discourage voter turnout."></TextContainer>
      </div>
      <div className='sample'>
        <CustomButton title='Get Started'
          handleClick={() => { }}
          style={
            {
              height: '100px',
              width: '400px'
            }
          } />
      </div>
      <br /><br /><br />
    </>
  );
}

export default App;