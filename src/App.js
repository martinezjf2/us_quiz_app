import React, {useState, useEffect} from "react";
import { Questionaire } from './components'

// eslint-disable-next-line
const API_URL = 'https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])

useEffect(() => {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => setQuestions(data.results))
  
  
}, [])

const handleAnswer = (answer) => {

}


  return questions.length > 0 ? (
    <div className="container">
      <Questionaire data={questions[0]} handleAnswer={handleAnswer}/>
    </div>
  ) : (
    <h1 className="text-white text-3xl font-bold">Loading...</h1>
  );
}

export default App;


