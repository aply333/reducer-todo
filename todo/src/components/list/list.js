import React from "react";
import Task from "./task";
import "./Direct.css"

const List = props => {

    console.log("From List.js:", props.taskState)

    return(
        <div className="taskContainer">
            <p>Place Holder -- List Container</p>
            <ol className="taskList">
                {props.taskState.map(task=>(
                    <Task task={task} key={task.id} dispatch = {props.dispatch}/>
                ))}
            </ol>
            <button>Clear Completed</button>
        </div>
    )
}

export default List;