import noteApi from '../../utils/noteApi';

// ACTIONS
const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_UPDATE_TEXT = 'NOTE_UPDATE_TEXT';
const NOTE_UPDATE_COLOR = 'NOTE_UPDATE_COLOR';
const NOTE_REPLACE_NOTES = 'NOTE_REPLACE_NOTES';


// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case NOTE_ADD: {
      return [...state, action.data];
    }
    case NOTE_REMOVE: {
      return state.filter(note => note.id !== action.data.id);
    }
    case NOTE_UPDATE_TEXT: {
      return state.map(note => ((note.id === action.data.id) ?
        { ...note, ...action.data } : note));
    }
    case NOTE_UPDATE_COLOR: {
      return state.map(note => ((note.id === action.data.id) ?
        { ...note, ...action.data.notes } : note));
    }
    case NOTE_REPLACE_NOTES: {
      return [...action.data.notes];
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internaladdNote = (id, note) => ({
  type: NOTE_ADD,
  data: {
    id,
    title: note.title,
    infoList: note.infoList,
    color: note.color,
  },
});

const removeNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const updateNoteText = note => ({
  type: NOTE_UPDATE_TEXT,
  data: {
    id: note.id,
    title: note.title,
    infoList: note.infoList,
  },
});

const updateNoteColor = note => ({
  type: NOTE_UPDATE_COLOR,
  data: {
    id: note.id,
    color: note.color,
  },
});

const internalReplaceNotes = notes => ({
  type: NOTE_REPLACE_NOTES,
  data: {
    notes,
  },
});

const replaceNotes = () => dispatch => noteApi.getAll()
  .then(notes => dispatch(internalReplaceNotes(notes)));

const addNote = note => dispatch => noteApi.add(note)
  .then(id => dispatch(internaladdNote(id, note)));

export { addNote, removeNote, updateNoteText, updateNoteColor, replaceNotes };
export default reducer;
