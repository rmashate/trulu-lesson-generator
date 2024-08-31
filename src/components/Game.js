// components/Game.js
export default function Game({ game }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-500 mb-4">{game.title}</h2>
      <p className="text-gray-300 mb-4">{game.description}</p>
      <div className="space-y-4">
        {game.questions.map((question, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-md">
            <p className="font-medium mb-2">{question.text}</p>
            <ul className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    id={`q${index}_o${optionIndex}`}
                    name={`question_${index}`}
                    className="mr-2"
                  />
                  <label htmlFor={`q${index}_o${optionIndex}`}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
