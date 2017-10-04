import React from 'react';

import NoteInput from '../components/NoteList/components/NoteInput';
import NoteList from '../components/NoteList';
import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = props => (
  <div className="NoteContainer-wrapper">
    <NoteInput onAdd={props.handleAdd} />
    <NoteList
      notes={props.notes}
      handleRemove={props.handleRemove}
    />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
