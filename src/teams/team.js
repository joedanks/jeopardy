import React, {Component} from 'react';
import { connect } from 'react-redux';
import { awardPoints, revokePoints } from '../actions/points';

import './panel.css';

class Team extends Component {
    constructor(props) {
        super(props);

        this.addPoints = this.addPoints.bind(this);
        this.revokePoints = this.revokePoints.bind(this);
    }
    addPoints() {
        this.props.awardPoints(this.props.name, this.props.selectedAnswer.value);
    }    
    revokePoints() {
        this.props.revokePoints(this.props.name, this.props.selectedAnswer.value);
    }    
    getAddScoreButton() {
        return (
            <ion-icon name='add-circle-outline' onClick={this.addPoints}></ion-icon>
        );
    }
    getMinusScoreButton() {
        return (
            <ion-icon name='remove-circle-outline' onClick={this.revokePoints}></ion-icon>
        );
    }
    render() {
        return (
            <div className='team'>
                <div className='button'>{this.props.selectedAnswer ? this.getAddScoreButton() : null}</div>
                <div className='name'>{this.props.name}</div>
                <div className='button'>{this.props.selectedAnswer ? this.getMinusScoreButton() : null}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    selectedAnswer: state.question.selectedAnswer
})

const mapDispatchToProps = {
    awardPoints,
    revokePoints
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);