import React, {useState, useEffect} from "react";

// eslint-disable-next-line
const API_URL = 'https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple'

function App() {
  const [questions, setQuestions] = useState([])

useEffect(() => {
  console.log(API_URL)
  fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data.results))
  
  
}, [])


  return (
    <div className="container">
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl"> 1. This is a question? kjdcnv di j iodv isnv ojnvo in sv n ov onsv oinvo inos fj j jg jfsgbkjngbjnsf osfg of sfg oimsg oimsfg if oimsg o oimg of oif oimid oih oijgd </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          Answer 1
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          Answer 2
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          Answer 3
        </button>
        <button className="bg-white rounded shadow p-4 font-semibold text-blue-800">
          Answer 4
        </button>
        
      </div>
    </div>
  );
}

export default App;


