import React from 'react';
import './Question.css'; // Import the Question.css file

const Question = ({ question }) => {
    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
        </div>
    );
};

export default Question;
