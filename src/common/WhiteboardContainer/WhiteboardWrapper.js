import React from 'react';

import NoteList from '../components/NoteList';
import WhiteboardWrapperProps from './WhiteboardWrapper.props';
import InfoComponent from '../components/Info';
import AddComponent from '../components/Add';

const WhiteboardWrapper = props => (
  <div className="NoteContainer-wrapper">
    <InfoComponent header="Floggit Whiteboard" logo="" user={'username'} department={'DreamierTeam'} />
    <NoteList
      notes={props.notes}
      onRemove={props.handleRemove}
      onEdit={props.handleUpdateText}
      onChangeColor={props.handleUpdateColor}
    />
    <AddComponent onAdd={props.handleAdd} />
  </div>
);

WhiteboardWrapper.propTypes = WhiteboardWrapperProps;

export default WhiteboardWrapper;
