import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './cell';

const cellValues = [200, 400, 600, 800, 1000];

class Column extends Component {
    renderCells(columnInfo) {
        return columnInfo.answers.map((answer, i) => {
            return (<Cell key={i} value={cellValues[i]} text={answer} x={this.props.index} y={i}/>);
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

const mapStateToProps = (state, props) => ({
    columnInfo: state.question.data[props.index]
})

export default connect(
    mapStateToProps
)(Column);