import { createStore } from 'redux'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Filter from './components/Filter'
import Notification from './components/Notification'

import anecdoteService from './services/anecdotes'

import { initializeAnecdotes, setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

/**
 * Anecdote is defined as:
 *  content: anecdote,
    id: getId(),
    votes: 0
 * 
 */

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <Filter />
      <Notification />
      <AnecdoteList />

      <NewAnecdote />
    </div>
  )
}

export default App