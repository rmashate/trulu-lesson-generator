import React from 'react';
import Layout from '../components/Layout';
import TruluGameGenerator from '../components/TruluGameGenerator';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="bg-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Trulu Lesson Generator</h1>
            <p className="mb-8">Create engaging and educational games for your children in just a few clicks.</p>
            <a href="#generate-game" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Get Started</a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Trulu?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-green-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-gray-400">Create games with just a few clicks using our user-friendly interface.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-green-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m0 0l-4-4m4 4H5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Engaging Content</h3>
                <p className="text-gray-400">Our games are designed to keep children engaged while they learn.</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-green-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c.634-1.333 2-3 5-3 3 0 5 1.667 5 4s-2 4-5 4c-1.733 0-3.5-.667-5-2 0 0-3 1-5 5 0 0 1-5 5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-gray-400">Monitor your child's learning journey with detailed insights.</p>
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
                <p className="mb-4">"Trulu has made learning fun for my kids. They look forward to their daily educational games!"</p>
                <p className="font-semibold">- Sarah J., Parent of two</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="mb-4">"I've seen a significant improvement in my child's math skills since we started using Trulu. Highly recommended!"</p>
                <p className="font-semibold">- Michael T., Father</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
