// components/Layout.js
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/trulu-logo.png" alt="Trulu Logo" width={40} height={40} />
                <span className="ml-2 text-2xl font-bold text-green-500">Trulu</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/my-games" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                My Games
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}