import { connect } from 'react-redux';

import WhiteboardWrapper from './WhiteboardWrapper';
import { addNote, removeNote, updateNoteText, updateNoteColor, addInfoListItem, clearInfoList } from '../../reduxStore/config/notes';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    notes: state.notes,
    infoListItems: state.infoListItems,
  });
};


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

  handleOnAddInfoListItem: (text) => {
    dispatch(addInfoListItem(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
