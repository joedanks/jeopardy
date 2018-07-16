import React, {Component} from 'react';
import Column from './column';
import {data} from '../data/sampleGame1';

import './board.css';

export default class Board extends Component {
    renderColumns(data) {
        return data.map((columnInfo, i) => {
            return (<Column key={i} columnInfo={columnInfo}/>);
        })
    }
    render() {
        return (
            <div className='board'>
                {this.renderColumns(data)}
            </div>
        );
    }

}