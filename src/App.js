
import React, {useState, useEffect} from "react";
import { Questionaire } from './components'

// eslint-disable-next-line
const API_URL = 'https://opentdb.com/api.php?amount=25&category=12&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  

useEffect(() => {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const questions = data.results.map((question) => 
    ({
      ...question,
      answers: [
        question.correct_answer,
        ...question.incorrect_answers,
      ].sort(() => Math.random() - 0.5),
    }));
    setQuestions(questions)
  })

}, [])


const handleAnswer = (answer) => {
  if (!showAnswers) { 
    if (answer === questions[currentQuestionIndex].correct_answer) {
    setScore(score + 4)
  }}

  setShowAnswers(true)
}

const handleNextQuestion = () => {
  setShowAnswers(false);
  setCurrentQuestionIndex(currentQuestionIndex + 1)

}
  return questions.length > 0 ? (
    <div className="container">
      {currentQuestionIndex >= questions.length ? (
    <h1 className="text-3xl text-white font-bold">Game Ended! Your score was {score}</h1>
  ) : (
    <Questionaire data={questions[currentQuestionIndex]} handleNextQuestion={handleNextQuestion} showAnswers={showAnswers} handleAnswer={handleAnswer}/>

  )}
    </div>
  ) : (
    <h1 className="text-white text-3xl font-bold">Loading...</h1>
  );
  }

export default App;


