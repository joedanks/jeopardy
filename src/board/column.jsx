import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

export default function Column(props) {
  const columnInfo = props.data[props.index];

  return (
    <div className="column">
      <Cell text={columnInfo.title} />
      <div className="split" />
      <Cell value={200} text={columnInfo.values[0].answer} />
      <Cell value={400} text={columnInfo.values[1].answer} />
      <Cell value={600} text={columnInfo.values[2].answer} />
      <Cell value={800} text={columnInfo.values[3].answer} />
      <Cell value={1000} text={columnInfo.values[4].answer} />
    </div>
  );
}

Column.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};
