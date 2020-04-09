import React from "react";

const Task = props =>{
    return(
        <li><input type="checkbox"/>{props.task.item}</li>
    )
}

export default Task;