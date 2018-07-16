import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from './column';

import './board.css';

class Board extends Component {
    renderColumns(data) {
        return data.map((columnInfo, i) => {
            return (<Column key={i} columnInfo={columnInfo} />);
        })
    }
    render() {
        return (
            <div className='board'>
                {this.renderColumns(this.props.data)}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    data: state.question.data
})

export default connect(
    mapStateToProps
)(Board);