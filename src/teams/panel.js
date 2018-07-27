import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './team';
import { newTeam } from '../actions/teams';
import { noPoints } from '../actions/points';
import UploadAnswers from './uploadAnswers';
import AddTeam from './add-team';

import './panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTeam: false
        }
        this.inputRef = React.createRef();
        this.addTeam = this.addTeam.bind(this);
        this.showAddTeam = this.showAddTeam.bind(this);
        this.updateTeam = this.updateTeam.bind(this);
        this.cancelTeam = this.cancelTeam.bind(this);
    }
    buildTeams() {
        return Object.keys(this.props.teams).map((name, i) => {
            const score = this.props.teams[name];

            return (<Team key={i} name={name} score={score} />);
        })
    }
    buildNoWinner() {
        return (
            <button type='button' className='btn btn-outline-light' onClick={this.props.noPoints}>No Points</button>
        );
    }
    addTeam() {
        if (!this.props.teams.hasOwnProperty(this.state.teamName)) {
            this.setState((prevState) => {
                this.props.newTeam(prevState.teamName);
                return {
                    addTeam: false,
                    teamName: ''
                }
            })
        }
    }
    updateTeam(e) {
        this.setState({
            teamName: e.target.value
        })
    }
    cancelTeam() {
        this.setState({
            addTeam: false,
            teamName: ''
        })
    }
    showAddTeam() {
        this.setState({
            addTeam: true
        })
    }
    displayNewTeam() {
        if (this.state.addTeam) {
            return (
                <AddTeam updateTeam={this.updateTeam} addTeam={this.addTeam} cancelTeam={this.cancelTeam} />
            );
        }
        return (
            <div className='add-team' onClick={this.showAddTeam}>
                <ion-icon name='person-add' />
                &nbsp;
                Add Team
            </div>
        );
    }
    componentDidUpdate() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }
    render() {
        return (
            <div className='panel'>
                <div className='game-info'>
                    <div className='title'>
                        <div>Teams</div>
                        {this.displayNewTeam()}
                    </div>
                    {this.buildTeams()}
                    {this.props.selectedAnswer ? this.buildNoWinner() : null}
                </div>
                <UploadAnswers />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams,
    selectedAnswer: state.question.selectedAnswer
})

const mapDispatchToProps = {
    newTeam,
    noPoints
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);