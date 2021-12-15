import React from "react";
// eslint-disable-next-line
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

function Questionaire({ handleNextQuestion, showAnswers, handleAnswer, data: {question, correct_answer, answers}}) {

   

    return (
        <div className='flex flex-col'>
        <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md" >
        <h2 className="text-2xl" >{ReactHtmlParser(question)}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
            {answers.map((answer) => {
                const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-white';

                const textColor = showAnswers ? 'text-white' : 'text-blue-800'

                return (
                    
            <button key={answer} className={`${bgColor} rounded shadow p-4 font-semibold ${textColor}` } answer={answer} onClick={() => handleAnswer(answer)}>{ReactHtmlParser(answer)}</button>
            )})}    

                
        </div>
        {showAnswers && (
             <button className={'ml-auto bg-blue-700 text-white p-4 font-semibold rounded shadow mt-6'} onClick={handleNextQuestion} >Next Question</button>   
        )}
       
       
        </div>   
        )
    } 

    export default Questionaire

   