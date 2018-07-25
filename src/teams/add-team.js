import React, { Component } from 'react';

export default class AddTeam extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
    }
    componentDidMount() {
        if (this.textInput.current) {
            this.textInput.current.focus();
        }
    }
    render() {
        return (
            <form className='input-group mb-3' onSubmit={this.props.addTeam} onAbort={this.props.cancelTeam}>
                <input id='teamInput' type='text' className='form-control' placeholder='Team Name' onChange={this.props.updateTeam} ref={this.textInput} autoFocus/>
                <div className='input-group-append'>
                    <button type='button' onClick={this.props.addTeam} className='btn btn-outline-default'>Add</button>
                </div>
                <div className='input-group-append'>
                    <button type='button' onClick={this.props.cancelTeam} className='btn btn-outline-default'>Canel</button>
                </div>
            </form>
        );
    }
}