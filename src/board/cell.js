import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleQuestionSelected, setQuestionValue } from '../actions/question';

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
        if (currentState === NUMBER) {
            return !this.props.questionSelected;
        }
        return false;
    }

    cycleState() {
        if (this.nextStateAvailable(this.state.state)) {
            this.setState(prevState => {
                this.props.toggleQuestionSelected();
                this.props.setQuestionValue(this.props.value);
                return {
                    state: this.getNextState(prevState.state)
                };
            });
        }
    }

    renderContent() {
        switch (this.state.state) {
            case NUMBER:
                return (<div className='number clickable'>{this.props.value}</div>);
            case ANSWER:
                if (this.props.questionSelected) {
                    return (<div className='answer'>{this.props.text}</div>);
                }
                return null;
            case TEXT:
                return (<div className='text'>{this.props.text}</div>);
            case EMPTY:
            default:
                return null;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questionSelected && !this.props.questionSelected && prevState.state === ANSWER) {
            this.setState({
                state: this.getNextState(prevState.state)
            });
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

const mapDispatchToProps = {
    toggleQuestionSelected,
    setQuestionValue
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);