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
        this.props.awardPoints(this.props.name, this.props.questionValue);
    }    
    getAddScoreButton() {
        return (
            <ion-icon name="add-circle-outline" onClick={this.addPoints}></ion-icon>
        );
    }
    render() {
        return (
            <div className='team'>
                <div className='button'>{this.props.questionSelected ? this.getAddScoreButton() : null}</div>
                <div className='name'>{this.props.name}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    questionSelected: state.question.selected,
    questionValue: state.question.value
})

const mapDispatchToProps = {
    awardPoints
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);