import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './team';
import { newTeam } from '../actions/teams';
import UploadAnswers from './uploadAnswers';

import './panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTeam: false
        }
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
    addTeam() {
        this.setState((prevState) => {
            this.props.newTeam(prevState.teamName);
            return {
                addTeam: false,
                teamName: ''
            }
        })
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
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Team Name" onChange={this.updateTeam} />
                    <div className="input-group-append">
                        <button type="button" onClick={this.addTeam} className="btn btn-outline-default">Add</button>
                    </div>
                    <div className="input-group-append">
                        <button type="button" onClick={this.cancelTeam} className="btn btn-outline-default">Canel</button>
                    </div>
                </div>
            );
        }
        return (
            <div className='add-team' onClick={this.showAddTeam}>
                <ion-icon name="person-add" />
                &nbsp;
                Add Team
            </div>
        );
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
                </div>
                <UploadAnswers/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams
})

const mapDispatchToProps = {
    newTeam
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);