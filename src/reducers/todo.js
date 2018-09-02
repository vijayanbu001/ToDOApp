
const initialState = {
    todoList: [
        {
            id: 1,
            name: "Pay bills",
            completed: false
        },
        {
            id: 2,
            name: "Go To Shopping",
            completed: false
        },{
            id: 3,
            name: "See the Doctor",
            completed: true
        }

    ],
    completedToDoList: [{
        id: 3,
        name: "See the Doctor",
        completed: true
    }]
}
const todo = (state = initialState, action) => {
    let { todoList, completedToDoList } = state
    switch (action.type) {
        case "SHOW_TODO":
            return {
                ...state
            }
        case "ADD_TODO":

            return {
                ...state,
                todoList: [...todoList, { id: todoList.length + 1, name: action.payload, completed: false }]
            }
        case "DELETE_TODO":
            var commontodo = [...todoList].map(({ id, name, completed }) => id === action.payload.id ? { ...action.payload, completed: true } : { id, name, completed });
            return {
                ...state,
                todoList: commontodo,
                completedToDoList: commontodo.filter(({ completed }) => completed)
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todoList: [...todoList].filter(({ id }) => id !== action.payload.id),
                completedToDoList: [...completedToDoList.filter(({ id }) => id !== action.payload.id)]
            }
        case "UPDATE_TODO":
            var todo = [...todoList].map(({ id, name, completed }) => id === action.payload.id ? { ...action.payload, completed: false } : { id, name, completed })
            return {
                ...state,
                todoList: [...todo],
                completedToDoList: todo.filter(({ completed }) => completed),
            }
        case "RESTORE_TODO":
            var restoreTodo = [...todoList].map(({ id, name, completed }) => id === action.payload.id ? { ...action.payload, completed: false } : { id, name, completed })
            return {
                ...state,
                completedToDoList:[...restoreTodo].filter(({ completed }) => completed),
                todoList: [...restoreTodo],
            }
        default:
            return state
    }
}
export default todo;