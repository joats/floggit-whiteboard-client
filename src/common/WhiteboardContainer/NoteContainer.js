import { connect } from 'react-redux';

import WhiteboardWrapper from './WhiteboardWrapper';
import { addNote, removeNote, updateNoteText, updateNoteColor, addInfoListItem, clearInfoList, removeInfoListItem } from '../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state.notes,
  infoListItems: state.infoListItems,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (note) => {
    dispatch(addNote(note));
    dispatch(clearInfoList());
  },
  handleUpdateText: (note) => {
    dispatch(updateNoteText(note));
  },
  handleUpdateColor: (note) => {
    dispatch(updateNoteColor(note));
  },

  handleOnAddInfoListItem: (values) => {
    dispatch(addInfoListItem(values.infoListItem));
  },
  handleOnRemoveInfoListItem: (index) => {
    dispatch(removeInfoListItem(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
