import noteApi from '../../utils/noteApi';

// ACTIONS
const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_UPDATE_TEXT = 'NOTE_UPDATE_TEXT';
const NOTE_UPDATE_COLOR = 'NOTE_UPDATE_COLOR';
const NOTE_REPLACE_NOTES = 'NOTE_REPLACE_NOTES';
const INFO_LIST_ITEM_ADD = 'INFO_LIST_ITEM_ADD';
const INFO_LIST_CLEAR = 'INFO_LIST_CLEAR';
const IS_EDIT = 'IS_EDIT';

const initalState = {
  notes: [],
  infoListItems: [],
  isEdit: false,
};
// REDUCER
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      return Object.assign({}, state, { notes: [...state.notes, action.data] });
    }
    case NOTE_REMOVE: {
      return Object.assign({}, state,
        { notes: state.notes.filter(note => note.id !== action.data.id) });
    }
    case NOTE_UPDATE_TEXT: {
      return Object.assign({}, state,
        { notes: state.notes.map(note => ((note.id === action.data.id) ?
          { ...note, ...action.data } : note)) });
    }

    case NOTE_UPDATE_COLOR: {
      return Object.assign({}, state,
        { notes: state.notes.map(note => ((note.id === action.data.id) ?
          { ...note, ...action.data } : note)) });
    }
    case NOTE_REPLACE_NOTES: {
      return Object.assign({}, state, { notes: [...action.data.notes] });
    }

    case INFO_LIST_ITEM_ADD: {
      return Object.assign({}, state,
        { infoListItems: [...state.infoListItems, action.data.text] });
    }

    case INFO_LIST_CLEAR: {
      return Object.assign({}, state, { infoListItems: [] });
    }

    case IS_EDIT: {
      return Object.assign({}, state, { isEdit: true });
    }

    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddNote = (id, note) => ({
  type: NOTE_ADD,
  data: {
    id,
    title: note.title,
    infoList: note.infoList,
    color: note.color,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalUpdateNoteText = note => ({
  type: NOTE_UPDATE_TEXT,
  data: {
    id: note.id,
    title: note.title,
    infoList: note.infoList,
  },
});

const internalUpdateNoteColor = note => ({
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

const addInfoListItem = text => ({
  type: INFO_LIST_ITEM_ADD,
  data: {
    text,
  },
});
const clearInfoList = () => ({
  type: INFO_LIST_CLEAR,
});

const isEdit = () => ({
  type: IS_EDIT,
});

const replaceNotes = () => dispatch => noteApi.getAll()
  .then(notes => dispatch(internalReplaceNotes(notes)));

const addNote = note => dispatch => noteApi.add(note)
  .then(id => dispatch(internalAddNote(id, note)));

const updateNoteText = note => dispatch => noteApi.update(note)
  .then(() => dispatch(internalUpdateNoteText(note)));

const removeNote = id => dispatch => noteApi.remove(id)
  .then(() => dispatch(internalRemoveNote(id)));

const updateNoteColor = note => dispatch => noteApi.update(note)
  .then(() => dispatch(internalUpdateNoteColor(note)));

export { addNote, removeNote, updateNoteText, updateNoteColor, replaceNotes };
export { addInfoListItem, clearInfoList };
export { isEdit };
export default reducer;
