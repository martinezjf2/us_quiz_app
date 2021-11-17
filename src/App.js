import React, {useState, useEffect} from "react";

// eslint-disable-next-line
const API_URL = 'https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])

useEffect(() => {
  console.log(API_URL)
  fetch(API_URL)
  .then(response => response.json())
  .then(data => setQuestions(data.results))
  
  
}, [])


  return questions.length > 0 ? (
    <div className="container">
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl"> {questions[0].question} </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {questions[0].correct_answer}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {questions[0].incorrect_answers[0]}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {questions[0].incorrect_answers[1]}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {questions[0].incorrect_answers[2]}
        </button>
        
      </div>
    </div>
  ) : (
    <h1 className="text-white text-3xl">Loading...</h1>
  );
}

export default App;


