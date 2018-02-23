import React, { Component } from 'react';
import './App.css';
import Board from './board/board';
import Cell from './board/cell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
