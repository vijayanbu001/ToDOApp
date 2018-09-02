import React, { Component } from 'react'

class ButtonComponent extends Component {
    handleClick = (event) =>{
        return this.props.onClick && this.props.onClick(event)
    }
    render() {
        let { name } = this.props;
        return (
            <button onClick={this.handleClick}>
                {name}
            </button>
        )
    }
} 
export default ButtonComponent;