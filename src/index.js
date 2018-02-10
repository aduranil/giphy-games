import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './containers/Board';
import 'semantic-ui-css/semantic.min.css';
import { createStore,applyMiddleware } from 'redux'
import boardReducer from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(boardReducer, applyMiddleware(reduxThunk))

ReactDOM.render(<Board store={store}/>, document.getElementById('root'));
