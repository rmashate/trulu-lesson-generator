import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/trulu-logo.png" alt="Trulu Logo" width={40} height={40} />
                <span className="ml-2 text-2xl font-bold text-green-500">Trulu</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link href="/reviews" className="text-gray-300 hover:text-white">Reviews</Link>
              <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Generate Game
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Trulu. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;