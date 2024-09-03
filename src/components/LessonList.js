import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { formatDate } from '../utils/dateUtils';

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch('/api/lessons');
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div key={lesson.id} className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
          <p className="text-gray-600 mb-2">{lesson.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Created on {formatDate(lesson.createdAt)}
            </span>
            <Button variant="secondary">View Lesson</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonList;