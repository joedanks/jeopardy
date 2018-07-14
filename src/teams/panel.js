import React, {Component} from 'react';
import { connect } from 'react-redux';
import Team from './team';

import './panel.css';

class Panel extends Component {
    buildTeams() {
        return Object.keys(this.props.teams).map((name) => {
            const score = this.props.teams[name];

            return (<Team name={name} score={score} />);
        })
    }
    render() {
        return (
            <div className='panel'>
                <div className='title'>Teams</div>
                {this.buildTeams()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);