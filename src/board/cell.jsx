import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NUMBER = 'NUMBER';
const ANSWER = 'ANSWER';
const EMPTY = 'EMPTY';
const TEXT = 'TEXT';


function getNextState(currentState) {
  switch (currentState) {
    case NUMBER:
      return ANSWER;
    case ANSWER:
      return EMPTY;
    case TEXT:
      return TEXT;
    case EMPTY:
    default:
      return EMPTY;
  }
}

export default class Cell extends Component {

  constructor(props) {
    super();

    const initialState = props.value ? NUMBER : TEXT;
    this.state = {
      state: initialState,
    };
  }

  cycleState() {
    this.setState(prevState => ({
      state: getNextState(prevState.state),
    }));
  }

  renderContent() {
    switch (this.state.state) {
      case NUMBER:
        return (<div className="number">{this.props.value}</div>);
      case ANSWER:
        return (<div className="answer">{this.props.text}</div>);
      case TEXT:
        return (<div className="text">{this.props.text}</div>);
      case EMPTY:
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="cell" onClick={this.cycleState.bind(this)}>
        {this.renderContent()}
      </div>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
};
