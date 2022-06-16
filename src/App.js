import React, {useState} from 'react'

import Counter from "./components/Counter";
import ClassCounter from "./components/classCounter";
import './style/App.css';

function App() {

  return (
    <div className="App">
      <div className="post">
        
      </div>
      <Counter/>
      {/* <ClassCounter/> */}
    </div>
  
    );
}

export default App;
{/* <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - is fine
          </div>
          <div className ="post__btns">
          <button>Delete</button>

          </div>

        </div> */}