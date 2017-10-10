import React from 'react';

import noteProps from './Note.props';
import DropdownMenu from './components/DropdownMenu';

const Note = props => (
  <div className={props.note.color + ' note'}>
    <span className="glyphicon glyphicon-option-vertical" />
    <DropdownMenu titles={['edit', 'remove', 'change color']} colors={['primary', 'secondary', 'tertiary', 'quaternary']} note={props.note} onEdit={props.onEdit} onRemove={props.onRemove} onChangeColor={props.onChangeColor} />
    <h3>
      {props.note.title}
    </h3>
    <ul>
      {props.note.infoList.map(info => (
        <li key={info}>
          {info}
        </li>))}
    </ul>
  </div>
);

Note.propTypes = noteProps;

export default Note;
