import React, { useReducer} from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list/list';
import InputForm from './components/inputForm/inputForm';

import {taskReducer, initialTaskState } from "./reducers/taskReducer";

function App() {

  const [ taskState, dispatch ] = useReducer(taskReducer, initialTaskState);

  console.log("reducer Testing", taskState)

  return (
    <div className="App">
      <Header/>
      <List 
        taskState = {taskState.tasks}
        dispatch = {dispatch}/>
      <InputForm 
        dispatch={dispatch}/>
    </div>
  );
}

export default App;
