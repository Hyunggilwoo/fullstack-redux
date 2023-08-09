import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'
import notificationReducer from './notificationReducer';

/**
 * Handles the storing of states in redux for multiple reducers here. 
 * It is helpful to think that store is configuring a reducer that has a key ( e.g. notification) and value (e.g. reducer for the key)
 */
const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
    
});

export default store;