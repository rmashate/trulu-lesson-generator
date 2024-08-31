"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const TruluGameGenerator = () => {
  const [childAge, setChildAge] = useState('');
  const [schoolGrade, setSchoolGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [questionCount, setQuestionCount] = useState('');
  const [errors, setErrors] = useState({});
  const [gameData, setGameData] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!childAge) newErrors.childAge = 'Please enter your childs age';
    if (!schoolGrade) newErrors.schoolGrade = 'Please select a school grade';
    if (!subject) newErrors.subject = 'Please select a subject';
    if (!questionCount) newErrors.questionCount = 'Please select the number of questions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Your handleSubmit logic here
    }
  };

  const resetGame = () => {
    setGameData(null);
    setChildAge('');
    setSchoolGrade('');
    setSubject('');
    setQuestionCount('');
    setErrors({});
  };

  const inputClass = (field) => `mt-1 block w-full rounded-md shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ${
    errors[field] ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <Image src="/trulu-logo.png" alt="Trulu Logo" width={48} height={48} className="mr-2" />
          <h1 className="text-3xl font-bold text-green-700">Trulu</h1>
        </div>
        <p className="text-xl text-green-600 mb-4 text-center">Get ahead during the school year!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Child's Age</label>
            <input
              type="number"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className={inputClass('childAge')}
            />
            {errors.childAge && <p className="mt-1 text-sm text-red-500">{errors.childAge}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">School Grade</label>
            <select
              value={schoolGrade}
              onChange={(e) => setSchoolGrade(e.target.value)}
              className={inputClass('schoolGrade')}
            >
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
            </select>
            {errors.schoolGrade && <p className="mt-1 text-sm text-red-500">{errors.schoolGrade}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass('subject')}
            >
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="language">Language</option>
            </select>
            {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              className={inputClass('questionCount')}
            >
              <option value="">Select Number of Questions</option>
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
            </select>
            {errors.questionCount && <p className="mt-1 text-sm text-red-500">{errors.questionCount}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Generate Interactive Game
          </button>
        </form>
        {gameData && (
          <div className="mt-6">
            {/* Render your game data here */}
            <button
              onClick={resetGame}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reset Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TruluGameGenerator;
