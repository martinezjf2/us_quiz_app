import React from "react";



function Questionaire({ handleAnswer, data: {question, correct_answer, incorrect_answers}}) {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            {shuffledAnswers.map(answer => (
            <button key={answer} className={`${correct_answer === answer ? 'bg-blue-300' : 'bg-white'} rounded shadow p-4 font-semibold text-blue-800` } answer={answer} onClick={() => handleAnswer(answer)}>
             {answer}
            </button>
            ))}            
        </div>
        </div>   
        )
    } 

    

    export default Questionaire

   