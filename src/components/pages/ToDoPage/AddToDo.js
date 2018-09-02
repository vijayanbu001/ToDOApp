import React, { Component } from 'react';
import ButtonComponent from '../../common/ButtonComponent';
import InputComponent from '../../common/InputComponent';

class AddToDo extends Component {
    state ={
        newToDo:''
    }
    handleClick = () => {
        this.props.onClick && this.state.newToDo && this.props.onClick(this.state.newToDo);
        this.setState({newToDo:''})

    }
    handleType = value => {
        this.setState({newToDo:value})
    }
    render() {
        return (
            <div className="addContainer">
                <InputComponent name="AddTodo" value={this.state.newToDo} onChange={this.handleType} />
                <ButtonComponent name="Add" onClick={this.handleClick} />
            </div>
        )
    }
}

export default AddToDo;