import React from "react";

const API_URL = 'https://inter-questionss.herokuapp.com'

function App() {
  return (
    <div className="container">
      <div className="bg-white text-blue-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">This is a question</h2>
      </div>
      <div>
        <button>
          Answer 1
        </button>
        <button>
          Answer 2
        </button>
        <button>
          Answer 3
        </button>
        <button>
          Answer 4
        </button>
        
      </div>
    </div>
  );
}

export default App;


