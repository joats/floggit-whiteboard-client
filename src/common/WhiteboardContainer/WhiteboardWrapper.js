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
      onRemove={props.handleRemove}
      onSave={props.handleUpdateText}
      onChangeColor={props.handleUpdateColor}
      onAddInfoListItem={props.handleOnAddInfoListItem}
    />
    <AddComponent
      onAdd={props.handleAdd}
      onAddInfoListItem={props.handleOnAddInfoListItem}
      infoListItems={props.infoListItems}
      onRemoveInfoListItem={props.handleOnRemoveInfoListItem}
    />
  </div>
);

WhiteboardWrapper.propTypes = WhiteboardWrapperProps;

export default WhiteboardWrapper;
