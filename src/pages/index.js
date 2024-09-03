import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import LessonForm from '../components/forms/LessonForm';
import LessonList from '../components/LessonList';
import useForm from '../hooks/useForm';

const HomePage = () => {
  const [formValues, handleChange, handleSubmit] = useForm({
    title: '',
    description: '',
  });
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

  const handleLessonCreated = (newLesson) => {
    setLessons([newLesson, ...lessons]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Trulu Lesson Generator</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create a New Lesson</h2>
          <LessonForm
            values={formValues}
            onChange={handleChange}
            onSubmit={(e) => handleSubmit(e, handleLessonCreated)}
          />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Lessons</h2>
          <LessonList lessons={lessons} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;