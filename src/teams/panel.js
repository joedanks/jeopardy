import React, {Component} from 'react';
import { connect } from 'react-redux';
import Team from './team';

import './panel.css';

export default class Panel extends Component {
    render() {
        return (
            <div className='panel'>
                <div className='title'>Teams</div>
                <Team name={'Awesomeness'} score={300}/>
            </div>
        );
    }

}