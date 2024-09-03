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
              <Link href="/pricing" className="text-gray-300 hover:text-white">
                <a>Pricing</a>
              </Link>
              <Link href="/reviews" className="text-gray-300 hover:text-white">
                <a>Reviews</a>
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white">
                <a>FAQ</a>
              </Link>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Generate Game
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Rest of the component remains the same */}
      </main>
    </div>
  );
};

export default TruluGameGenerator;