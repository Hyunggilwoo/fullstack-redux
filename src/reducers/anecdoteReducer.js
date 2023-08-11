import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {

    increaseVote(state, action) {
      const id = action.payload;

      return state.map(anecdote => 
          anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1} 
          : anecdote
          );
    },
    appendAnecdote(state, action) {
      state.push(action.payload) // why use state.push instead of return action.payload
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { increaseVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

/**
 * When a user accesses the webpage, initializes anecdotes using a thunk.
 * @returns 
 */
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

/**
 * Creating note is done asynchronously
 */
export const addAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export default anecdoteSlice.reducer;