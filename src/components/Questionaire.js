import React from "react";
// eslint-disable-next-line
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function Questionaire({ showAnswers, handleAnswer, data: {question, correct_answer, incorrect_answers}}) {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md" >
        <h2 className="text-2xl" >{ReactHtmlParser(question)}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            {shuffledAnswers.map(answer => {
                const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-white';

                const textColor = showAnswers ? 'text-white' : 'text-blue-800'

                return (
                    
            <button key={answer} className={`${bgColor} rounded shadow p-4 font-semibold ${textColor}` } answer={answer} onClick={() => handleAnswer(answer)}>{ReactHtmlParser(answer)}</button>
            )})}    

            <button className={'bg-white p-4 font-semibold rounded shadow'}>Next Question</button>        
        </div>
        </div>   
        )
    } 

    export default Questionaire

   