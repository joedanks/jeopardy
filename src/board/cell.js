import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions/question';

const NUMBER = 'NUMBER';
const ANSWER = 'ANSWER';
const EMPTY = 'EMPTY';
const TEXT = 'TEXT';


class Cell extends Component {

    constructor(props) {
        super();
    }

    getNextState(currentState) {
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

    nextStateAvailable(currentState) {
        if (currentState === NUMBER) {
            return !this.props.selectedAnswer;
        }
        return false;
    }

    cycleState() {
        if (this.nextStateAvailable(this.props.status)) {
            this.props.selectAnswer(this.getNextState(this.props.status), this.props.x, this.props.y, this.props.value);
        }
    }

    renderContent() {
        switch (this.props.status) {
            case NUMBER:
                return (<div className='number clickable'>{this.props.value}</div>);
            case ANSWER:
                // if (this.props.questionSelected) {
                return (<div className='answer'>{this.props.text}</div>);
                // }
                // return null;
            case TEXT:
                return (<div className='text'>{this.props.text}</div>);
            case EMPTY:
            default:
                return null;
        }
    }

    render() {
        return (
            <div className='cell' onClick={this.cycleState.bind(this)}>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    let status = TEXT;
    if (props.value) {
        status = state.question.board[props.x][props.y]
    }
    return {
        questionSelected: state.question.selectedAnswer,
        status
    }
}

const mapDispatchToProps = {
    selectAnswer
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);