import React, { Component } from 'react';
import ToDoPage from '../src/containers/TodoPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="App-title">TO-DO APP</div>
        </header>
        <ToDoPage/>
      </div>
    );
  }
}

export default App;
