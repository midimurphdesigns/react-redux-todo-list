import React, { Component } from 'react';
import { Provider } from 'react-redux'

import AppBar from 'material-ui/AppBar';

import logo from './logo.svg';
import './app.css';
import { Routes } from './Routes'
import { configureStore } from './store/configureStore'
import * as TodoActions from './todos/actions/todoActions'

const store = configureStore()

store.dispatch(TodoActions.GetTodos())

const App = (props) => {
  return (
      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;