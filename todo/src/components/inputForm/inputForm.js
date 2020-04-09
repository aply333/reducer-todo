import React, { useState } from "react";

const InputForm = (props) => {
  const [input, setInput] = useState("");
  const dispatch = props.dispatch;

  const newTask =
    {
      item: input,
      completed: false,
      id: (Math.random() * Math.random()).toString(9).substr(2, 9),
    };

  const buttonHandler = (e) => {
    e.preventDefault();
    console.log("newTaskLog", newTask);
    dispatch({type: "ADD_TASK", payload: newTask})
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={buttonHandler}>
        <input type="text" placeholder="new task" onChange={changeHandler} />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default InputForm;
