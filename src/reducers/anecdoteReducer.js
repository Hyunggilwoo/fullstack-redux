import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {

    /**
     * Automatically generates id
     * @param {*} state 
     * @param {*} action 
     */
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    increaseVote(state, action) {
      const id = action.payload;

      return state.map(anecdote => 
          anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1} 
          : anecdote
          );
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { addAnecdote, increaseVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

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
export default anecdoteSlice.reducer;