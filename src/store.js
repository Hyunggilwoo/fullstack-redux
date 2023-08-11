import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer';
import thunk from 'redux-thunk'
/**
 * Store is the middleman for all of the reducers in the code.
 * Ideally, store should not handle a function of each reducer here.
 * 
 * Handles the storing of states in redux for multiple reducers here. 
 * It is helpful to think that store is configuring a reducer that has a key ( e.g. notification) and value (e.g. reducer for the key)
 */
const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    },
});

export default store;