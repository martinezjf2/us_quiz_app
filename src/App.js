import React from "react";

// eslint-disable-next-line
const API_URL = 'https://inter-questionss.herokuapp.com'

function App() {
  return (
    <div className="container">
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl"> 1. This is a question?</h2>
      </div>
      <div className="mt-4 flex flex-wrap justify-around">
        <button className="bg-white w-5/12 rounded shadow p-4 font-semibold text-blue-800">
          Answer 1
        </button>
        <button className="bg-white w-5/12 rounded shadow p-4 font-semibold text-blue-800">
          Answer 2
        </button>
        <button className="bg-white w-5/12 rounded shadow p-4 font-semibold text-blue-800 mt-4">
          Answer 3
        </button>
        <button className="bg-white w-5/12 rounded shadow p-4 font-semibold text-blue-800 mt-4">
          Answer 4
        </button>
        
      </div>
    </div>
  );
}

export default App;


