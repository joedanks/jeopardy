import React, {Component} from 'react';
import { connect } from 'react-redux';
import { awardPoints } from '../actions/points';

import './panel.css';

class Team extends Component {
    constructor(props) {
        super(props);

        this.addPoints = this.addPoints.bind(this);
    }
    addPoints() {
        this.props.awardPoints(this.props.name, this.props.selectedAnswer.value);
    }    
    getAddScoreButton() {
        return (
            <ion-icon name='add-circle-outline' onClick={this.addPoints}></ion-icon>
        );
    }
    render() {
        return (
            <div className='team'>
                <div className='button'>{this.props.selectedAnswer ? this.getAddScoreButton() : null}</div>
                <div className='name'>{this.props.name}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    selectedAnswer: state.question.selectedAnswer
})

const mapDispatchToProps = {
    awardPoints
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);