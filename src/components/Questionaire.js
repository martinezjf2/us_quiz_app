import React from "react";

function Questionaire({data: {question, correct_answer, incorrect_answers}}) {
    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {correct_answer}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {incorrect_answers[0]}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {incorrect_answers[1]}
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {incorrect_answers[2]}
        </button>
        
      </div>
      </div>
    )
}

export default Questionaire