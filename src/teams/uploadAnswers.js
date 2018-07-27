import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newAnswers, reset } from '../actions/question';

class UploadAnswers extends Component {
    constructor(props) {
        super(props);

        this.uploadData = this.uploadData.bind(this);
        this.reset = this.reset.bind(this);
    }
    uploadData(e) {
        let reader = new FileReader();
        reader.onload = (event) => {
            try {
                const newAnswers = JSON.parse(event.target.result);
                if (newAnswers.length === 6) {
                    this.props.newAnswers(newAnswers);
                } else {
                    alert('Invalid file');
                }
            } catch (error) {
                alert('Invalid file');
            }
        }
        if (e.target.files && e.target.files.length) {
            reader.readAsText(e.target.files[0]);
        }
    }
    reset() {
        document.querySelector("input[type='file']").value = '';
        this.props.reset();
    }
    render() {
        return (
            <div className='upload-answers'>
                <input type='button' className='btn btn-link' onClick={this.reset} value='Reset All' />
                <div>
                    Upload your own answers (<a href='./sampleGame.json' download>Sample Game</a>)
                </div>
                <input type='file' accept='.json' onChange={this.uploadData} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    newAnswers,
    reset
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadAnswers);