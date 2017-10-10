import React from 'react';

import noteListProps from './NoteList.props';
import Note from './components/Note';

const NoteList = props => (
  <ul className="notes">
    {
      props.notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onRemove={props.onRemove}
          onEdit={props.onEdit}
          onChangeColor={props.onChangeColor}
        />
      ))
    }
  </ul>
);
NoteList.propTypes = noteListProps;


export default NoteList;
