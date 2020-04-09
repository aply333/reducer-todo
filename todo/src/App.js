import React, {useState, useReducer} from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list/list';
import InputForm from './components/inputForm/inputForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <InputForm/>
    </div>
  );
}

export default App;
