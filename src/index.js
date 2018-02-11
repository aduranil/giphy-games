import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './containers/Board';
import 'semantic-ui-css/semantic.min.css';
import { createStore,applyMiddleware } from 'redux'
import boardReducer from './reducers'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(boardReducer, applyMiddleware(reduxThunk))

const Root = ({ store }) => {
  return (
      <Provider store={store}>
        <Board/>
      </Provider>
  )
}


ReactDOM.render(
  <Root store={store}/>, document.getElementById('root')
);
