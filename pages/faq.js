import React, { useState } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 px-4 py-2 bg-gray-700 rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Trulu?",
      answer: "Trulu is an interactive educational platform that generates personalized learning games for children across various subjects and difficulty levels."
    },
    {
      question: "How does Trulu adapt to my child's learning needs?",
      answer: "Trulu uses adaptive algorithms to adjust question difficulty based on your child's age, grade level, and performance, ensuring an optimal learning experience."
    },
    {
      question: "What subjects does Trulu cover?",
      answer: "Currently, Trulu covers Math, Language, and Science. We're continuously working on expanding our subject offerings."
    },
    {
      question: "Is Trulu suitable for all ages?",
      answer: "Yes, Trulu is designed for learners of all ages, from elementary school through high school. Our system adapts the content difficulty accordingly."
    },
    {
      question: "How can I track my child's progress?",
      answer: "Trulu provides detailed progress tracking features, allowing you to monitor your child's performance across different subjects and topics."
    },
    {
      question: "Can multiple children use the same account?",
      answer: "Yes, our Family Plan allows up to 5 child accounts, each with their own personalized learning experience."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <nav className="mb-8">
        <Link href="/" className="text-green-500 hover:text-green-400">
          Back to Home
        </Link>
      </nav>
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;