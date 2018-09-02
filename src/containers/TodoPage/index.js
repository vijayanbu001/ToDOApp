import { connect } from 'react-redux';
import ToDoPage from '../../components/pages/ToDoPage';
import { showToDo, addToDo, updateToDo, deleteToDo, removeToDo, restoreToDo } from '../../actions'

const mapStateToProps = ({ todo }) => {
    return {
        todoList: todo.todoList,
        completedToDoList: todo.completedToDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showToDo: () => dispatch(showToDo()),
        addToDo: (value) => dispatch(addToDo(value)),
        updateToDo: (value) => dispatch(updateToDo(value)),
        deleteToDo: (value) => dispatch(deleteToDo(value)),
        removeToDo: (value) => dispatch(removeToDo(value)),
        restoreToDo: (value) => dispatch(restoreToDo(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoPage)