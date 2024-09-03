import React from 'react';
import Link from 'next/link';

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      content: "Trulu has been a game-changer for my kids' education. They actually look forward to their daily learning sessions!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Teacher",
      content: "As an educator, I'm impressed with the quality and variety of questions. It's a great supplementary tool for my students.",
      rating: 4,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Student",
      content: "I love how Trulu makes learning fun! The adaptive difficulty keeps me challenged but not overwhelmed.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Parent",
      content: "The progress tracking feature is fantastic. I can easily see where my children need more support.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <nav className="mb-8">
        <Link href="/" className="text-green-500 hover:text-green-400">
          Back to Home
        </Link>
      </nav>
      <h1 className="text-4xl font-bold mb-8">User Reviews</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                {review.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{review.name}</h2>
                <p className="text-gray-400">{review.role}</p>
              </div>
            </div>
            <p className="mb-4">{review.content}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;