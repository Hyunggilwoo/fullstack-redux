import { useSelector, useDispatch } from 'react-redux'
import {increaseVote } from './reducers/anecdoteReducer'
import { createStore } from 'redux'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'

/**
 * Anecdote is defined as:
 *  content: anecdote,
    id: getId(),
    votes: 0
 * 
 */

const store = createStore(increaseVote)

const App = () => {

  return (
    <div>
      <AnecdoteList />

      <NewAnecdote />
    </div>
  )
}

export default App