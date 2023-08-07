import { useDispatch, useSelector } from "react-redux"
import { increaseVote } from '../reducers/anecdoteReducer'

/**
 * Target Quote's vote count increases.
 * 
 * @param {*} id 
 */
const AnecdoteList = () => {
    // const anecdotes = useSelector(state => state)

    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    // sorting the anecdotes here
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
    return (   
        <div>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map(anecdote => {

                // Reorder the vote by the increasing number
                const handleIncreaseVote = () => {
                    dispatch(increaseVote(anecdote.id))
                };

                return (
                    <div 
                        key={anecdote.id}>
                        <div>
                        {anecdote.content}
                        </div>
                        <div>
                        has {anecdote.votes}
                        <button onClick={handleIncreaseVote}> vote </button> 
                        </div>
                    </div>
                );
            })}
        </div>   


    )

}

export default AnecdoteList;