import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/trulu-logo.png" alt="Trulu Logo" width={40} height={40} />
                <span className="ml-2 text-2xl font-bold text-green-500">Trulu</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-gray-300 hover:text-white">
                Pricing
              </Link>
              <Link href="/reviews" className="text-gray-300 hover:text-white">
                Reviews
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;