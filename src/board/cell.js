import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleQuestionSelected } from '../actions/question';

const NUMBER = 'NUMBER';
const ANSWER = 'ANSWER';
const EMPTY = 'EMPTY';
const TEXT = 'TEXT';


class Cell extends Component {

    constructor(props) {
        super();

        const initialState = props.value ? NUMBER : TEXT;
        this.state = {
            state: initialState
        }
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
        switch (currentState) {
            case NUMBER:
                return !this.props.questionSelected;
            case ANSWER:
                return true;
            case TEXT:
                return true;
            case EMPTY:
            default:
                return false;
        }
    }

    cycleState() {
        this.setState(prevState => {
            if (this.nextStateAvailable(prevState.state)) {
                this.props.toggleQuestionSelected();
                return {
                    state: this.getNextState(prevState.state)
                };
            }
        });
    }

    renderContent() {
        switch (this.state.state) {
            case NUMBER:
                return (<div className='number'>{this.props.value}</div>);
            case ANSWER:
                return (<div className='answer'>{this.props.text}</div>);
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

const mapStateToProps = (state) => ({
    questionSelected: state.question.selected
})

const mapDispatchToProps = (dispatch) => ({
    toggleQuestionSelected: () => dispatch(toggleQuestionSelected())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);