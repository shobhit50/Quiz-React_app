import React from 'react';
import './Results.css'; // Import the Results.css file

const Results = ({ score, totalQuestions }) => {
    return (
        <div className="results"> {/* Apply class name */}
            <h2>Quiz Results</h2>
            <p>Your score: {score}/{totalQuestions}</p>
        </div>
    );
};

export default Results;
