import './App.css';
import React, { Fragment } from "react";

import InputTodo from './components/InputToDo';

function App() {


  return (
    <Fragment>
      <div className = "container">
        <InputTodo />
      </div>
    </Fragment> 
    
  );
}

export default App;
