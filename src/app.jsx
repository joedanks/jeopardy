import React from 'react';
import Board from './board/board';

export default class App extends React.Component {
  render() {
    return (<div style={{ height: '100%' }}>
      <Board />
    </div>);
  }
}
