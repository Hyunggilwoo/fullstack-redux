import { createStore } from 'redux'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAnecdote'
import Filter from './components/Filter'
import Notification from './components/Notification'

/**
 * Anecdote is defined as:
 *  content: anecdote,
    id: getId(),
    votes: 0
 * 
 */

const App = () => {

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