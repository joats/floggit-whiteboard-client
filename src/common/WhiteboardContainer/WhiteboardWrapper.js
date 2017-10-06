import React from 'react';

import NoteList from '../components/NoteList';
import WhiteboardWrapperProps from './WhiteboardWrapper.props';
import InfoComponent from '../components/Info';
import AddComponent from '../components/Add';

const WhiteboardWrapper = props => (
  <div className="NoteContainer-wrapper">
    <InfoComponent logo="../img/logo.svg" />
    <NoteList
      notes={props.notes}
      handleRemove={props.handleRemove}
    />
    <AddComponent onAdd={props.handleAdd} />
  </div>
);

WhiteboardWrapper.propTypes = WhiteboardWrapperProps;

export default WhiteboardWrapper;
