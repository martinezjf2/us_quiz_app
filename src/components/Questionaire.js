import React from "react";

function Button({answer}) {
    return (
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {answer}
        </button>
    )

}

function Questionaire({data: {question, correct_answer, incorrect_answers}}) {
    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Button answer={correct_answer}/>
        <Button answer={incorrect_answers[0]}/>
        <Button answer={incorrect_answers[1]}/>
        <Button answer={incorrect_answers[2]}/>

      </div>
      </div>
    )
}

export default Questionaire