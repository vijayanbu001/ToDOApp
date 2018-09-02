import React, { Component } from 'react';
import ButtonComponent from '../../common/ButtonComponent';
import CheckBoxComponent from '../../common/CheckBoxComponent';
import InputComponent from '../../common/InputComponent';
// import './style.css'

class ListToDo extends Component {
    state = {
        isSave: [],
        editToDo: {}
    }
    handleEdit = (item) => {
        this.state.isSave.includes(item.id) ? this.handleSave(item) : this.setState({ isSave: [item.id] })
    }

    handleDelete = (item) => {
        this.state.isSave.includes(item.id) ? this.setState({ isSave: [] }):this.props.onDelete && this.props.onDelete(item); 
    }

    handleSave = (item) => {
        item.name = this.state.editToDo[item.id] || item.name;
        this.props.onSave && this.props.onSave(item);
        this.setState({ isSave: [] })
    }
    handleType = (value,id) => {
        var obj = this.state.editToDo;
        obj[id]=value;
        this.setState({ editToDo: obj })
    }

    handleCheck = (value,status) =>{
        
    }

    render() {

        let { todo } = this.props;

        return (

            <div>
                {
                    todo.map((item, index) =>  !item.completed &&
                         <div className="listItem">
                            <div className ="listContent">
                                <CheckBoxComponent name="todocheck" key={item.id} value={item.id} onChange={this.handleCheck} />
                                {this.state.isSave.includes(item.id) ? <InputComponent key={item.id} name="editTodo" value={this.state.editToDo[item.id] || item.name} onChange={(val)=>this.handleType(val,item.id)} /> : <div key={index} >{item.name}</div>}
                            </div>
                            <div className="listAction" key={index} >
                                <ButtonComponent key={item.id} name={this.state.isSave.includes(item.id) ? "save" : "edit"} onClick={() => this.handleEdit(item)} />
                                <ButtonComponent key={index} name={this.state.isSave.includes(item.id) ? "cancel" : "delete"}  onClick={() => this.handleDelete(item)}  />
                            </div>
                        </div>
                        
                    )
                }
            </div>
        )
    }
}

export default ListToDo;