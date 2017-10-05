import { createStore } from 'redux';

// ACTIONS
const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_UPDATE_TEXT = 'NOTE_UPDATE_TEXT';
const NOTE_UPDATE_COLOR = 'NOTE_UPDATE_COLOR';


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
        { ...note, ...action.data } : note));
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const addNote = note => ({
  type: NOTE_ADD,
  data: {
    id: (+(new Date())).toString(),
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

const store = createStore(reducer);

// TODO REMOVE BEFORE LAUNCH
window.store = store;
window.addNote = addNote;
window.removeNote = removeNote;
window.updateNoteText = updateNoteText;
window.updateNoteColor = updateNoteColor;

export { addNote, removeNote, updateNoteText, updateNoteColor };
export default reducer;
