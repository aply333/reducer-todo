
export const initialTaskState = {
    tasks:[
        {item: 'Learn about reducers',
         completed: false,
         id: 3892987589
        }]
}

export const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            return{
                ...state,
                tasks:[...state.tasks, action.payload]
            }
        case "TOGGLE_COMPLETE":
            const updatedTasks = state.tasks.map( task =>{
                if(task.id === action.payload){
                    return{...task, completed: !task.completed};
                }return task;
            })
            return {
                ...state,
                tasks:updatedTasks
            }           
        case "REMOVE_TASK":
            const filteredTasks = state.tasks.filter(task => {
                return !task.completed;
            })
            return{
                ...state,
                tasks:filteredTasks
            }
        default:
            return state;
    }
}