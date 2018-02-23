import React from 'react';

export default function TitleRow(props) {
    return (
        <div className='title-row'>
            <Cell text={props.data[0].title} />
            <Cell text={props.data[1].title} />
            <Cell text={'Answer 3'} />
            <Cell text={'Answer 4'} />
            <Cell text={'Answer 5'} />
            <Cell text={'Answer 6'} />
        </div>
    );
}