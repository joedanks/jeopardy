import React, { Component } from 'react';
import Column from './column';
import data from '../../data/sampleGame1';

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <Column data={data} index={0} />
        <Column data={data} index={1} />
        <Column data={data} index={0} />
        <Column data={data} index={0} />
        <Column data={data} index={0} />
        <Column data={data} index={0} />
      </div>
    );
  }

}
