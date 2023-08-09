import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'

/**
 * Handles the storing of states in redux for multiple reducers here. 
 */
const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer
    }
    
});

export default store;