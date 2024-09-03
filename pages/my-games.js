import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { generateQuestions } from '../services/questionGenerator';

const MyGames = () => {
  const [gameParams, setGameParams] = useState(null);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const router = useRouter();

  const generateNewQuestions = useCallback(() => {
    if (gameParams) {
      const questions = generateQuestions({
        ...gameParams,
        streak,
        score,
        totalQuestions,
      });
      setGeneratedQuestions(questions);
      setCurrentDifficulty(questions[0].difficulty);
    }
  }, [gameParams, streak, score, totalQuestions]);

  useEffect(() => {
    const storedParams = localStorage.getItem('gameParams');
    if (storedParams) {
      setGameParams(JSON.parse(storedParams));
    } else {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    if (gameParams) {
      generateNewQuestions();
    }
  }, [gameParams, generateNewQuestions]);

  const handleNextQuestion = useCallback((timeout = false) => {
    if (!timeout && selectedAnswer === generatedQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);
    setTimeLeft(30);
    setFeedback(null);
    if (currentQuestion + 1 < generatedQuestions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      generateNewQuestions();
      setCurrentQuestion(0);
    }
  }, [currentQuestion, selectedAnswer, generatedQuestions, generateNewQuestions]);

  useEffect(() => {
    if (!showResults && generatedQuestions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleNextQuestion(true);
            return 30;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, showResults, generatedQuestions, handleNextQuestion]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === generatedQuestions[currentQuestion].correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect!');
    if (isCorrect) {
      setStreak((prevStreak) => prevStreak + 1);
      setScore((prevScore) => prevScore + 1);
    } else {
      setStreak(0);
    }
    setTotalQuestions((prevTotal) => prevTotal + 1);
    setTimeout(() => handleNextQuestion(), 1500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setStreak(0);
    setFeedback(null);
    setTotalQuestions(0);
    setCurrentDifficulty('easy');
    generateNewQuestions();
  };

  if (!gameParams || generatedQuestions.length === 0) {
    return <div className="min-h-screen bg-gray-900 text-white p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Your Educational Game</h1>
      {!showResults ? (
        <div>
          <div className="mb-6">
            <p>Child&apos;s Age: {gameParams.childAge}</p>
            <p>School Grade: {gameParams.schoolGrade}</p>
            <p>Subject: {gameParams.subject}</p>
            <p>Question {currentQuestion + 1} of {gameParams.questionCount}</p>
            <p className="text-xl font-bold mt-2">Time Left: {timeLeft} seconds</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
            </div>
            <p className="text-lg font-bold mt-2">Streak: {streak}</p>
            <p className="text-lg font-bold mt-2">Current Difficulty: {currentDifficulty}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">{generatedQuestions[currentQuestion].question}</h2>
            <ul className="space-y-3">
              {generatedQuestions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswerSelect(option)}
                    disabled={!!feedback}
                    className={`w-full text-left p-3 rounded ${
                      selectedAnswer === option
                        ? feedback === 'Correct!'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            {feedback && (
              <div className={`mt-4 p-2 rounded ${feedback === 'Correct!' ? 'bg-green-500' : 'bg-red-500'}`}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Game Results</h2>
          <p className="text-xl mb-4">Your score: {score} out of {totalQuestions}</p>
          <button
            onClick={restartGame}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mr-4"
          >
            Play Again
          </button>
          <Link href="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 inline-block">
            Generate New Game
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyGames;