import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reduxStore';
import './css/master.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NoteContainer from './common/WhiteboardContainer';

ReactDOM.render(
  <Provider store={store}>
    <NoteContainer />
  </Provider>
  , document.getElementById('root'));
