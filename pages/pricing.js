import React from 'react';
import Link from 'next/link';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <nav className="mb-8">
        <Link href="/" className="text-green-500 hover:text-green-400">
          Back to Home
        </Link>
      </nav>
      <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-3xl font-bold mb-4">$9.99<span className="text-xl font-normal">/month</span></p>
          <ul className="list-disc list-inside mb-6">
            <li>Access to all subjects</li>
            <li>100 questions per day</li>
            <li>Basic progress tracking</li>
          </ul>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border-2 border-green-500">
          <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
          <p className="text-3xl font-bold mb-4">$19.99<span className="text-xl font-normal">/month</span></p>
          <ul className="list-disc list-inside mb-6">
            <li>Access to all subjects</li>
            <li>Unlimited questions</li>
            <li>Advanced progress tracking</li>
            <li>Personalized learning paths</li>
          </ul>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Family Plan</h2>
          <p className="text-3xl font-bold mb-4">$29.99<span className="text-xl font-normal">/month</span></p>
          <ul className="list-disc list-inside mb-6">
            <li>Access to all subjects</li>
            <li>Unlimited questions</li>
            <li>Advanced progress tracking</li>
            <li>Personalized learning paths</li>
            <li>Up to 5 child accounts</li>
          </ul>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;