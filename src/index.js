import React from 'react'
import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { filterChange  } from './reducers/filterReducer'


const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
  
})

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange(''))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)