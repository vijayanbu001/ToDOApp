import React, { Component } from 'react';
import ListToDo from './ListToDo'
import AddToDo from './AddToDo';
import './style.css'
import CompletedToDo from './CompletedToDo';
import Seperator from '../../common/Seperator';
class ToDoPage extends Component {
    componentDidMount = () => {
        this.props.showToDo();
    }

    render() {
        let { todoList, addToDo, deleteToDo, updateToDo, completedToDoList, removeToDo, restoreToDo } = this.props;
        return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <Seperator header='ADD NEW' />
                <AddToDo onClick={addToDo} />
                <Seperator header='TODO' />
                <ListToDo todo={todoList} onSave={updateToDo} onDelete={deleteToDo} />
                <Seperator header="COMPLETED" />
                <CompletedToDo completedTodo={completedToDoList} onSave={updateToDo} onRestore={restoreToDo} onDelete={removeToDo} />
            </div>
        </div>)
    }
}

export default ToDoPage;