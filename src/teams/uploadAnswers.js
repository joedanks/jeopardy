import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newAnswers } from '../actions/question';

class UploadAnswers extends Component {
    constructor(props) {
        super(props);

        this.uploadData = this.uploadData.bind(this);
    }
    uploadData(e) {
        let reader = new FileReader();
        reader.onload = (event) => {
            // console.log(event.target.result);
            this.props.newAnswers(JSON.parse(event.target.result))
        }
        reader.readAsText(e.target.files[0]);
    }
    render() {
        return (
            <div className='upload-answers'>
                Upload your own answers
                <a href='./sampleGame.json' download>Sample Game</a>
                <input type='file' accept='.json' onChange={this.uploadData} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    newAnswers
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadAnswers);