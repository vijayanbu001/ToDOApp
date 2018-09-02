import React from 'react';

const Seperator = ({ header }) =>
    <div style={{marginTop:10,marginBottom:10}}>
        <div style={{backgroundColor:'lightgrey',textAlign:'left'}}>{header}</div>
        <div className="seperator"></div>
    </div>

export default Seperator;
