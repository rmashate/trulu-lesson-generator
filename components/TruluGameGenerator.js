

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const TruluGameGenerator = () => {
  const [childAge, setChildAge] = useState('');
  const [schoolGrade, setSchoolGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [questionCount, setQuestionCount] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameParams = { childAge, schoolGrade, subject, questionCount };
    localStorage.setItem('gameParams', JSON.stringify(gameParams));
    router.push('/my-games');
  };

  const inputClass = "w-full px-3 py-2 text-gray-200 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const selectClass = inputClass;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-500 mb-6">Create Your Educational Game</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="childAge" className={labelClass}>Child&apos; s Age</label>
            <input
              id="childAge"
              type="number"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className={inputClass}
              min="5"
              max="18"
              required
              placeholder="Enter age"
            />
          </div>

          <div>
            <label htmlFor="schoolGrade" className={labelClass}>School Grade</label>
            <select
              id="schoolGrade"
              value={schoolGrade}
              onChange={(e) => setSchoolGrade(e.target.value)}
              className={selectClass}
              required
            >
              <option value="">Select Grade</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>Grade {i + 1}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>Subject</label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={selectClass}
              required
            >
              <option value="">Select Subject</option>
              <option value="math">Math</option>
              <option value="language">Language</option>
              <option value="science">Science</option>
            </select>
          </div>

          <div>
            <label htmlFor="questionCount" className={labelClass}>Number of Questions</label>
            <select
              id="questionCount"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              className={selectClass}
              required
            >
              <option value="">Select Number of Questions</option>
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Generate Interactive Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default TruluGameGenerator;