// Define difficulty levels based on age, grade, and performance
const getDifficulty = (age, grade, streak = 0, score = 0, totalQuestions = 0) => {
  let baseDifficulty = 'easy';
  if (age > 12 || grade > 6) baseDifficulty = 'hard';
  else if (age > 7 || grade > 2) baseDifficulty = 'medium';

  // Adjust difficulty based on performance
  const performanceRatio = totalQuestions > 0 ? score / totalQuestions : 0;
  if (streak >= 3 || performanceRatio > 0.7) {
    return increaseDifficulty(baseDifficulty);
  } else if (streak <= -3 || performanceRatio < 0.3) {
    return decreaseDifficulty(baseDifficulty);
  }
  return baseDifficulty;
};

const increaseDifficulty = (currentDifficulty) => {
  if (currentDifficulty === 'easy') return 'medium';
  if (currentDifficulty === 'medium') return 'hard';
  return 'hard';
};

const decreaseDifficulty = (currentDifficulty) => {
  if (currentDifficulty === 'hard') return 'medium';
  if (currentDifficulty === 'medium') return 'easy';
  return 'easy';
};

// Generate math questions
const generateMathQuestion = (difficulty) => {
  let num1, num2, operation;

  switch (difficulty) {
    case 'easy':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      operation = Math.random() < 0.5 ? '+' : '-';
      break;
    case 'medium':
      num1 = Math.floor(Math.random() * 50) + 1;
      num2 = Math.floor(Math.random() * 50) + 1;
      operation = ['*', '+', '-'][Math.floor(Math.random() * 3)];
      break;
    case 'hard':
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      operation = ['*', '/', '+', '-'][Math.floor(Math.random() * 4)];
      break;
  }

  let question = `What is ${num1} ${operation} ${num2}?`;
  let answer = eval(`${num1} ${operation} ${num2}`);

  // Generate wrong options
  let options = [answer];
  while (options.length < 4) {
    let wrongAnswer = answer + Math.floor(Math.random() * 10) - 5;
    if (!options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }

  // Shuffle options
  options = options.sort(() => Math.random() - 0.5);

  return {
    question,
    options: options.map(String),
    correctAnswer: String(answer)
  };
};

// Generate language questions
const generateLanguageQuestion = (difficulty) => {
  const easyWords = ['cat', 'dog', 'run', 'jump', 'play'];
  const mediumWords = ['beautiful', 'fantastic', 'adventure', 'challenge', 'experience'];
  const hardWords = ['exquisite', 'benevolent', 'eloquent', 'clandestine', 'ubiquitous'];

  let word;
  switch (difficulty) {
    case 'easy':
      word = easyWords[Math.floor(Math.random() * easyWords.length)];
      break;
    case 'medium':
      word = mediumWords[Math.floor(Math.random() * mediumWords.length)];
      break;
    case 'hard':
      word = hardWords[Math.floor(Math.random() * hardWords.length)];
      break;
  }

  const question = `What is the correct spelling of the word pronounced: "${word}"?`;
  const options = [
    word,
    word.replace(/[aeiou]/i, 'x'),
    word.split('').sort(() => Math.random() - 0.5).join(''),
    word.slice(0, -1) + (word.slice(-1) === 's' ? '' : 's')
  ];

  return {
    question,
    options,
    correctAnswer: word
  };
};

// Generate science questions
const generateScienceQuestion = (difficulty) => {
  const questions = {
    easy: [
      {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Earth", "Saturn"],
        correctAnswer: "Jupiter"
      },
      {
        question: "What is the process by which plants make their own food?",
        options: ["Photosynthesis", "Respiration", "Digestion", "Excretion"],
        correctAnswer: "Photosynthesis"
      }
    ],
    medium: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
      },
      {
        question: "What type of energy does a moving object have?",
        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
        correctAnswer: "Kinetic energy"
      }
    ],
    hard: [
      {
        question: "What is the process by which a solid changes directly into a gas?",
        options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
        correctAnswer: "Sublimation"
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Ohm", "Volt", "Ampere", "Watt"],
        correctAnswer: "Ohm"
      }
    ]
  };

  return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
};

export const generateQuestions = (params) => {
  const { childAge, schoolGrade, subject, questionCount, streak = 0, score = 0, totalQuestions = 0 } = params;
  const difficulty = getDifficulty(parseInt(childAge), parseInt(schoolGrade), streak, score, totalQuestions);
  const questions = [];

  for (let i = 0; i < parseInt(questionCount); i++) {
    let question;
    switch (subject) {
      case 'math':
        question = generateMathQuestion(difficulty);
        break;
      case 'language':
        question = generateLanguageQuestion(difficulty);
        break;
      case 'science':
        question = generateScienceQuestion(difficulty);
        break;
      default:
        throw new Error('Invalid subject');
    }
    questions.push({ id: i + 1, ...question, difficulty });
  }

  return questions;
};