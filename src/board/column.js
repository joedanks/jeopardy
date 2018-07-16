import React, { Component } from 'react';
import Cell from './cell';

const cellValues = [200, 400, 600, 800, 1000];

export default class Column extends Component {
    renderCells(columnInfo) {
        return columnInfo.values.map((info, i) => {
            return (<Cell key={i} value={cellValues[i]} text={info.answer} />);
        });
    }
    render() {
        return (
            <div className='column'>
                <Cell text={this.props.columnInfo.title} />
                <div className='split' />
                {this.renderCells(this.props.columnInfo)}
            </div>
        );
    };
}