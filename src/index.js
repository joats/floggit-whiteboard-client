import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reduxStore';
import './index.css';
import NoteContainer from './common/WhiteboardContainer';

ReactDOM.render(
  <Provider store={store}>
    <NoteContainer />
  </Provider>
  , document.getElementById('root'));
