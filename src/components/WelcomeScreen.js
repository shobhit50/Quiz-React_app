import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="welcome-screen">
            <h1>Welcome to the Quiz!</h1>
            <button className="welcome-screen button" onClick={onStart}>Start</button>
        </div>
    );
};

export default WelcomeScreen;
