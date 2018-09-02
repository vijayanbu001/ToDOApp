import React, { Component } from 'react'

class InputComponent extends Component {
    handleChange = (event) => {
        return this.props.onChange && this.props.onChange(event.target.value)
    }
    render() {
        let { name,value,Key } = this.props;
        return (
            <input type="text" key={Key} name={name} value={value} onChange={this.handleChange} />
        )
    }
}
export default InputComponent;