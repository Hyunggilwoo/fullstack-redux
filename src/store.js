import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer';
import anecdoteService from './services/anecdotes'
import thunk from 'redux-thunk'
/**
 * Handles the storing of states in redux for multiple reducers here. 
 * It is helpful to think that store is configuring a reducer that has a key ( e.g. notification) and value (e.g. reducer for the key)
 */
const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

/*********************** Handles Anecdote Reducer ********************/
anecdoteService.getAll().then(anecdotes => 
    store.dispatch(setAnecdotes(anecdotes))
)

export default store;