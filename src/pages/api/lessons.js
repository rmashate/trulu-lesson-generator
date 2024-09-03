import { v4 as uuidv4 } from 'uuid';

const lessons = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description } = req.body;
    const newLesson = {
      id: uuidv4(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    lessons.push(newLesson);
    res.status(201).json(newLesson);
  } else if (req.method === 'GET') {
    res.status(200).json(lessons);
  } else {
    res.status(404).json({ message: 'Route not found' });
  }
}