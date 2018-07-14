import React, {Component} from 'react';

import './panel.css';

export default class Team extends Component {
    render() {
        return (
            <div className='team'>
                <div className='name'>{this.props.name}</div>
                <div className='score'>{this.props.score}</div>
            </div>
        );
    }

}