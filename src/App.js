import { useSelector, useDispatch } from 'react-redux'
import {increaseVote } from './reducers/anecdoteReducer'
import { createStore } from 'redux'
import IncreaseVoteButton from './components/IncreaseVote'
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
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const increaseVote = (id) => {
    dispatch(increaseVote(id))
  }



  return (
    <div>
      <IncreaseVoteButton anecdotes={anecdotes} />
      {/* <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div 
          key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <IncreaseVoteButton anecdote={anecdote} />
          </div>
        </div>
      )} */}

        <NewAnecdote />
    </div>
  )
}

export default App