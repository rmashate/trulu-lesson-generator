"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TruluGameGenerator = () => {
  const [childAge, setChildAge] = useState('');
  const [schoolGrade, setSchoolGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [questionCount, setQuestionCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const inputClass = "w-full px-3 py-2 text-gray-200 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
  const labelClass = "block text-sm font-medium text-gray-300 mb-1";
  const selectClass = inputClass;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/trulu-logo.png" alt="Trulu Logo" width={40} height={40} />
              <span className="ml-2 text-2xl font-bold text-green-500">Trulu</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/reviews" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Reviews
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </Link>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                Generate Game
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Headline */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-green-500">Generate</span> personalized <span className="text-green-500">educational games</span> in seconds
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Customized for your child&apos age, grade, and subject. Interactive learning made easy!
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors">
              Create Your First Game FREE
            </button>
          </div>

          {/* Right side - Game Generator */}
          <div className="lg:w-5/12 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-500 mb-6">Create Your Educational Game</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="childAge" className={labelClass}>Child&apos Age</label>
                <input
                  id="childAge"
                  type="number"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className={inputClass}
                  min="5"
                  max="18"
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
      </div>
    </div>
  );
};

export default TruluGameGenerator;
