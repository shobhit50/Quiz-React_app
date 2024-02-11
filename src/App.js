import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Question from './components/Question';
import Options from './components/Options';
import Results from './components/Results';
import QuizProgress from "./components/QuizProgress";
import './App.css';

const App = () => {

  const generalKnowledgeQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      correctAnswer: 'Pacific Ocean'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'H2SO4'],
      correctAnswer: 'H2O'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Stephen King'],
      correctAnswer: 'Harper Lee'
    },
    {
      question: 'What is the tallest mammal?',
      options: ['Giraffe', 'Elephant', 'Rhino', 'Hippo'],
      correctAnswer: 'Giraffe'
    },
    {
      question: 'Which country is famous for its tulips and windmills?',
      options: ['Netherlands', 'Italy', 'France', 'Spain'],
      correctAnswer: 'Netherlands'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
      correctAnswer: 'Tokyo'
    },
    {
      question: 'What is the largest mammal?',
      options: ['Blue Whale', 'African Elephant', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'What is the currency of Brazil?',
      options: ['Real', 'Peso', 'Rupee', 'Dollar'],
      correctAnswer: 'Real'
    },
    {
      question: 'Who was the first person to step on the moon?',
      options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard'],
      correctAnswer: 'Neil Armstrong'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Skin', 'Liver', 'Heart', 'Brain'],
      correctAnswer: 'Skin'
    },
    {
      question: 'Which gas is most abundant in Earth\'s atmosphere?',
      options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswer: 'Nitrogen'
    },
    {
      question: 'Who invented the telephone?',
      options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
      correctAnswer: 'Alexander Graham Bell'
    }
  ];

  const indianGeographyQuestions = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
      correctAnswer: 'New Delhi'
    },
    {
      question: 'Which is the largest state in India by area?',
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Maharashtra'],
      correctAnswer: 'Rajasthan'
    },
    {
      question: 'Which is the largest state in India by population?',
      options: ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal'],
      correctAnswer: 'Uttar Pradesh'
    },
    {
      question: 'What is the smallest state in India by area?',
      options: ['Goa', 'Sikkim', 'Kerala', 'Haryana'],
      correctAnswer: 'Goa'
    }, {
      question: 'Which is the smallest state in India by area?',
      options: ['Goa', 'Sikkim', 'Tripura', 'Manipur'],
      correctAnswer: 'Goa'
    },
    {
      question: 'Which is the largest state in India by population?',
      options: ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal'],
      correctAnswer: 'Uttar Pradesh'
    },
    {
      question: 'Which is the smallest state in India by population?',
      options: ['Sikkim', 'Goa', 'Manipur', 'Mizoram'],
      correctAnswer: 'Sikkim'
    },
    {
      question: 'Which state has the longest coastline in India?',
      options: ['Gujarat', 'Andhra Pradesh', 'Tamil Nadu', 'Kerala'],
      correctAnswer: 'Gujarat'
    },
    {
      question: 'Which is the southernmost point of India?',
      options: ['Kanyakumari', 'Indira Point', 'Rameswaram', 'Tuticorin'],
      correctAnswer: 'Indira Point'
    },
    {
      question: 'Which is the highest peak in India?',
      options: ['K2', 'Kanchenjunga', 'Nanda Devi', 'Kamet'],
      correctAnswer: 'K2'
    },
    {
      question: 'Which is the longest river in India?',
      options: ['Ganga', 'Yamuna', 'Godavari', 'Krishna'],
      correctAnswer: 'Ganga'
    },
    {
      question: 'Which is the largest lake in India?',
      options: ['Wular Lake', 'Pulicat Lake', 'Chilika Lake', 'Dal Lake'],
      correctAnswer: 'Wular Lake'
    },
    {
      question: 'Which is the largest desert in India?',
      options: ['Thar Desert', 'Kutch Desert', 'Ladakh Desert', 'Jaisalmer Desert'],
      correctAnswer: 'Thar Desert'
    },
    {
      question: 'Which is the largest wildlife sanctuary in India?',
      options: ['Ranthambore', 'Corbett', 'Sundarbans', 'Gir Forest'],
      correctAnswer: 'Ranthambore'
    },
    {
      question: 'Which is the largest dam in India?',
      options: ['Tehri Dam', 'Bhakra Nangal Dam', 'Sardar Sarovar Dam', 'Hirakud Dam'],
      correctAnswer: 'Tehri Dam'
    },
    {
      question: 'Which is the largest city in India by area?',
      options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      correctAnswer: 'Delhi'
    },
    {
      question: 'Which is the largest city in India by population?',
      options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
      correctAnswer: 'Mumbai'
    },
    {
      question: 'Which is the largest Union Territory in India by area?',
      options: ['Andaman and Nicobar Islands', 'Ladakh', 'Delhi', 'Puducherry'],
      correctAnswer: 'Ladakh'
    },
    {
      question: 'Which is the smallest Union Territory in India by area?',
      options: ['Lakshadweep', 'Daman and Diu', 'Chandigarh', 'Puducherry'],
      correctAnswer: 'Lakshadweep'
    }

  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState(() => {
    const savedQuizCategory = localStorage.getItem('quizCategory');
    return savedQuizCategory === 'generalKnowledge' ? generalKnowledgeQuestions : indianGeographyQuestions;
  });


  const handleStart = () => {
    setQuizStarted(true);
    localStorage.setItem('quizStarted', JSON.stringify(true));
  };

  const handleAnswerSelect = (selectedOption) => {

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    const savedScore = parseInt(localStorage.getItem('quizScore')) || 0;
    const savedIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
    const savedQuizStarted = JSON.parse(localStorage.getItem('quizStarted')) || false;
    if (savedQuizStarted) {
      setScore(savedScore);
      setCurrentQuestionIndex(savedIndex);
      setQuizStarted(savedQuizStarted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizScore', score);
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('quizStarted', JSON.stringify(quizStarted));
  }, [score, currentQuestionIndex, quizStarted]);


  const switchQuiz = () => {
    if (questions === indianGeographyQuestions) {
      setQuestions(generalKnowledgeQuestions);
      localStorage.setItem('quizCategory', 'generalKnowledge');
    } else {
      setQuestions(indianGeographyQuestions);
      localStorage.setItem('quizCategory', 'indianGeography');
    }

    setCurrentQuestionIndex(0);
    setScore(0);

  };
  const switchQuiz2 = () => {
    if (questions === generalKnowledgeQuestions) {
      setQuestions(indianGeographyQuestions);
      localStorage.setItem('quizCategory', 'indianGeography');
    } else {
      setQuestions(generalKnowledgeQuestions);
      localStorage.setItem('quizCategory', 'generalKnowledge');
    }
    setCurrentQuestionIndex(0);
    setScore(0);
  }

  return (
    <div className='home-page'>
      {!quizStarted && <WelcomeScreen onStart={handleStart} />}
      {quizStarted && !showResults && (
        <div>
          <Question question={questions[currentQuestionIndex].question} />
          <Options
            options={questions[currentQuestionIndex].options}
            onSelect={handleAnswerSelect}
          />
        </div>
      )}
      {showResults && (
        <Results score={score} totalQuestions={questions.length} />
      )}
      <div className='progress-card' >
        <div >
          <QuizProgress />
          <p>Selected option: {(localStorage.getItem('quizCategory') || '').toUpperCase()}</p>
          <div className=' progress-card__left'>
            <p>Left: {questions.length - currentQuestionIndex - 1} </p>
          </div>
        </div>

        <div className="quiz-buttons">
          <button onClick={() => {
            localStorage.removeItem('quizScore');
            localStorage.removeItem('currentQuestionIndex');
            localStorage.removeItem('quizStarted');
            // Remove selected option from local storage
            window.location.reload();
          }}>Reset Progress</button>
        </div>
        {!showResults && (
          <div className="quiz-buttons">
            <button onClick={switchQuiz}>Indian Geography Quiz</button>
            <button onClick={switchQuiz2}>General Knowledge Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};




export default App;
