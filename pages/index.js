import React from 'react';
import TruluGameGenerator from '../components/TruluGameGenerator';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-green-500">Learn</span> through <span className="text-green-500">play</span> with Trulu
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Generate personalized educational games tailored to your child&apos;s age, grade, and interests. Make learning an adventure!
            </p>
            <a href="#generate-game" className="bg-green-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition-colors">
              Start Learning Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <Image src="/hero-image.jpg" alt="Children learning with Trulu" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Trulu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-400">Adaptive games that grow with your child&apos;s progress.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Subjects</h3>
              <p className="text-gray-400">Cover various topics from math to science and language.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-400">Monitor your child&apos;s learning journey with detailed insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Generator Section */}
      <section id="generate-game" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Create Your Educational Game</h2>
          <TruluGameGenerator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="mb-4">&quot;Trulu has made learning fun for my kids. They look forward to their daily educational games!&quot;</p>
              <p className="font-semibold">- Sarah J., Parent of two</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="mb-4">&quot;I&apos;ve seen a significant improvement in my child&apos;s math skills since we started using Trulu. Highly recommended!&quot;</p>
              <p className="font-semibold">- Michael T., Father</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}