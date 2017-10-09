import React from 'react';

import noteListProps from './NoteList.props';

const NoteList = props => (
  <ul>
    {
      props.notes.map(notes => (
        <li key={notes.id}>
            key={notes.id}
          {notes.id}
          {notes.title}
          {notes.infoList.map(info => info)}
          {notes.color}
        </li>
      ))
    }
  </ul>
);
NoteList.propTypes = noteListProps;


export default NoteList;
