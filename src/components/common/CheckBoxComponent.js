import React, { Component } from 'react'

class CheckBoxComponent extends Component {
    handleChange = (event) => {
        return this.props.onChange && this.props.onChange(event.target.value,event.target.checked)
    }
    render() {
        let { name,value } = this.props;
        return (
            <input type="checkbox" style={{backgroundColor:'blue'}} name={name} value={value} onChange={this.handleChange} />
        )
    }
}
export default CheckBoxComponent;