import {
    SHOW_TODO,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    REMOVE_TODO,
    RESTORE_TODO
} from '../types';


export const showToDo = () => {
    return {

        type: SHOW_TODO
    }
}
export const addToDo = newToDo => {
    return {

        type: ADD_TODO,
        payload: newToDo
    }
}
export const updateToDo = editToDo => {
    return {

        type: UPDATE_TODO,
        payload: editToDo
    }
}
export const deleteToDo = todo => {
    return {

        type: DELETE_TODO,
        payload: todo
    }
}
export const removeToDo = todo => {
    return {

        type: REMOVE_TODO,
        payload: todo
    }
}
export const restoreToDo = todo => {
    return {

        type: RESTORE_TODO,
        payload: todo
    }
}

