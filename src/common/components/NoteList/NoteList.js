import React from 'react';

import noteListProps from './NoteList.props';
import Note from './components/Note';

const NoteList = props => (
  <ul>
    {
      props.notes.map(note => (
        <Note
          key={note.id}
          note={note}
          onRemove={props.onRemove}
          onSave={props.onSave}
          onChangeColor={props.onChangeColor}
          onAddInfoListItem={props.onAddInfoListItem}
        />
      ))
    }
  </ul>
);
NoteList.propTypes = noteListProps;


export default NoteList;
