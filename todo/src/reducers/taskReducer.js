
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
            return{
                state
            }
        case "REMOVE_TASK":
            return{
                state
            }
        default:
            return state;
    }
}