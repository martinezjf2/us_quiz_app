import React from "react";

function Button({answer, className}) {
    return (
        <button className={`bg-white rounded shadow p-4 font-semibold text-blue-800 ${className}`}>
          {answer}
        </button>
    )

}

function Questionaire({ handleAnswer, data: {question, correct_answer, incorrect_answers}}) {

    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">{question}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            <Button className={correct_answer === shuffledAnswer[0] ? 'bg-blue-300' : '' } answer={shuffledAnswer[0]} onClick={() => handleAnswer(shuffledAnswer[0])} />
            <Button className={correct_answer === shuffledAnswer[1] ? 'bg-blue-300' : '' } answer={shuffledAnswer[1]} onClick={() => handleAnswer(shuffledAnswer[1])} />
            <Button className={correct_answer === shuffledAnswer[2] ? 'bg-blue-300' : '' } answer={shuffledAnswer[2]} onClick={() => handleAnswer(shuffledAnswer[2])}  />
            <Button className={correct_answer === shuffledAnswer[3] ? 'bg-blue-300' : '' } answer={shuffledAnswer[3]} onClick={() => handleAnswer(shuffledAnswer[3])}  />
        </div>
        </div>   
        )
    } 

    

    export default Questionaire

   