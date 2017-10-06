import { createStore } from 'redux';
import reducer, { replaceNotes } from './config/notes';
import noteApi from '../utils/noteApi';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

noteApi.getAll().then(notes => store.dispatch(replaceNotes(notes)));

export default store;
