import React from "react";

const InputForm = props =>{

    const buttonHandler = e => {
        e.preventDefault()
    }


    return(
        <div>
            <form>
                <input type="text" placeholder="new task"/>
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default InputForm;