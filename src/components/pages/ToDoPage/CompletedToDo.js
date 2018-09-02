import React, { Component } from 'react';
import ButtonComponent from '../../common/ButtonComponent';
import CheckBoxComponent from '../../common/CheckBoxComponent';
// import InputComponent from '../../common/InputComponent';
// import './style.css'

class CompletedToDo extends Component {
   
    handleRestore = (item) => {
        item.completed = false;
        this.props.onRestore && this.props.onRestore(item);
    }
    handleDelete = (item) => {
        this.props.onDelete && this.props.onDelete(item); 
    }
   
    render() {

        let { completedTodo } = this.props;

        return (

            <div>
                {
                    completedTodo.map((item, index) => {
                            return <div className="listItem">
                                <div className="listContent">
                                    <CheckBoxComponent name="todocheck" key={item.id} value={item.id}  />
                                    <div key={index} style={{textDecoration:'line-through'}} >{item.name}</div>
                                </div>
                                <div className="listAction" key={index} >
                                    <ButtonComponent key={item.id} name={"Restore"} onClick={() => this.handleRestore(item)} />
                                    <ButtonComponent key={index} name={"delete"}  onClick={() => this.handleDelete(item)}   />
                                </div>
                            </div>
                    })
                }
            </div>
        )
    }
}

export default CompletedToDo;