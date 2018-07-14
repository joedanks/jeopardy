import React, {Component} from 'react';
import { connect } from 'react-redux';

import './panel.css';

class Team extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {};
    // }
    getAddScoreButton() {
        return (
            <ion-icon name="add-circle-outline"></ion-icon>
        );
    }
    render() {
        return (
            <div className='team'>
                <div>{this.props.questionSelected ? this.getAddScoreButton() : null}</div>
                <div className='name'>{this.props.name}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    questionSelected: state.question.selected
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Team);