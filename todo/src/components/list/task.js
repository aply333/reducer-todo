import React,{ useState } from "react";
import "./Direct.css";

const Task = props =>{

    const [ done, setDone ] = useState(false);

    // const checkboxHandler = () =>{
    //     // setDone(!done);
    //     // console.log("Task Status",done)
    //     props.dispatch({
    //         type:"TOGGLE_COMPLETED",
    //         payload: props.task.id
    //     });
    //     console.log(props.task)
    // }

    const clickHandler = e => {
        e.preventDefault()
        setDone(!done)
        props.dispatch({
            type:"TOGGLE_COMPLETE",
            payload: props.task.id
        })
    };

   

    return(
        <li onClick={clickHandler} 
            className={done === true ? "done": "notDone" }>
            {props.task.item}</li>
    )
}

export default Task;