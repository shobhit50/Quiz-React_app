import React from 'react';
import './QuizProgress.css'; // Import the QuizProgress.css file

function QuizProgress() {
    // Retrieve the saved quiz progress from the local storage
    const savedScore = localStorage.getItem('quizScore');
    const savedIndex = parseInt(localStorage.getItem('currentQuestionIndex')) + 1 | 0; // Add 1 here
    const savedQuizStarted = localStorage.getItem('quizStarted');

    return (
        <div className="quiz-progress">
            <h2>Quiz Progress</h2>
            {/* <p>Current Question Number: {savedIndex}</p> */}
            <p className={savedQuizStarted ? 'started' : 'not-started'}>Quiz Started: {savedQuizStarted}</p>
        </div>
    );
}

export default QuizProgress;
