import { connect } from 'react-redux';

import WhiteboardWrapper from './WhiteboardWrapper';
import { addNote, removeNote, updateNoteText, updateNoteColor } from '../../reduxStore/config/notes';

const mapStateToProps = state => ({
  notes: state,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeNote(id));
  },
  handleAdd: (note) => {
    dispatch(addNote(note));
  },
  handleUpdateText: (note) => {
    dispatch(updateNoteText(note));
  },
  handleUpdateColor: (note) => {
    dispatch(updateNoteColor(note));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardWrapper);
