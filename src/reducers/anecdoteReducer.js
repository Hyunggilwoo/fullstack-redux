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
    },
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

/**
 * Uses anecdote services's increaseVote 
 * @requires increaseVote to process anecdote's id to increase vote for a specific anecdote.
 */
export const increaseVoteAsync = id => {
  return async (dispatch, getState) => {

    // get current votes for anecdote with given ID
    const anecdote = getState().anecdotes.find(a => a.id === id);
    const updatedVote = anecdote.votes + 1

    // update votes in backend @returns anecdote and updatedVote
    const updatedAnecdote = await anecdoteService.changeVote(anecdote, updatedVote)

    // update votes in frontend
    dispatch(increaseVote(id));
  }

}
export default anecdoteSlice.reducer;