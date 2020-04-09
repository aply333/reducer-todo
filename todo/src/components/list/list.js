import React from "react";
import Task from "./task";
import "./Direct.css"

const List = props => {
    return(
        <div className="taskContainer">
            <p>Place Holder -- List Container</p>
            <ol className="taskList">
                <Task/>
            </ol>
            <button>Clear Completed</button>
        </div>
    )
}

export default List;