"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
  <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image src="/trulu-logo.png" alt="Trulu Logo" width={40} height={40} />
              <span className="ml-2 text-2xl font-bold text-green-500">Trulu</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link href="/reviews" className="text-gray-300 hover:text-white">Reviews</Link>
              <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Generate Game
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-green-500">Generate</span> personalized <span className="text-green-500">educational games</span> in seconds
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Customized for your child&apos;s age, grade, and subject. Interactive learning made easy!
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors">
              Create Your First Game FREE
            </button>
          </div>

          <div className="lg:w-5/12 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-500 mb-6">Create Your Educational Game</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-300 mb-1">Child&apos;s Age</label>
                <input
                  id="childAge"
                  type="number"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter age"
                  required
                />
              </div>

              <div>
                <label htmlFor="schoolGrade" className="block text-sm font-medium text-gray-300 mb-1">School Grade</label>
                <select
                  id="schoolGrade"
                  value={schoolGrade}
                  onChange={(e) => setSchoolGrade(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>Grade {i + 1}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="math">Math</option>
                  <option value="language">Language</option>
                  <option value="science">Science</option>
                </select>
              </div>

              <div>
                <label htmlFor="questionCount" className="block text-sm font-medium text-gray-300 mb-1">Number of Questions</label>
                <select
                  id="questionCount"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Number of Questions</option>
                  <option value="5">5 Questions</option>
                  <option value="10">10 Questions</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors"
              >
                Generate Interactive Game
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TruluGameGenerator;