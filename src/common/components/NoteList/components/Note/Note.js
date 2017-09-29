import React from 'react';

import noteProps from './Note.props';

const Note = props => (
  <div className={props.color}>
    <h1>
      {props.title}
    </h1>
    <ul>
      {props.infoList.map(info => (
        <li key={info.value}>
          {info.value}
        </li>))}
    </ul>
  </div>
);

Note.propTypes = noteProps;

export default Note;
