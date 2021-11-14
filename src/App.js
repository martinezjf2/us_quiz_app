import React from "react";

const API_URL = 'https://inter-questionss.herokuapp.com'

function App() {
  return (
    <div className="container">
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">This is a question</h2>
      </div>
      <div>
        <button className="bg-white w-1/2 p-4 text-blue-800">
          Answer 1
        </button>
        <button className="bg-white w-1/2 p-4 text-blue-800">
          Answer 2
        </button>
        <button className="bg-white w-1/2 p-4 text-blue-800">
          Answer 3
        </button>
        <button className="bg-white w-1/2 p-4 text-blue-800">
          Answer 4
        </button>
        
      </div>
    </div>
  );
}

export default App;


