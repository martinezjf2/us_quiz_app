import React from "react";

function Button({answer}) {
    return (
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          {answer}
        </button>
    )

}

function Questionaire({ handleAnswer, data: {question, correct_answer, incorrect_answers}}) {

    const shuffledAnswer = [correct_answer, ...incorrect_answers]

    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            <Button answer={shuffledAnswer[0]} onClick={() => handleAnswer(shuffledAnswer[0])} />
            <Button answer={shuffledAnswer[1]} onClick={() => handleAnswer(shuffledAnswer[1])} />
            <Button answer={shuffledAnswer[2]} onClick={() => handleAnswer(shuffledAnswer[2])}  />
            <Button answer={shuffledAnswer[3]} onClick={() => handleAnswer(shuffledAnswer[3])}  />
        </div>
        </div>   
        )
    } 
    export default Questionaire