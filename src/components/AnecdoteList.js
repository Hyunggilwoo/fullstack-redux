import { useDispatch, useSelector } from "react-redux"
import { increaseVote } from '../reducers/anecdoteReducer'
/**
 * Typing a specific string will filter specific values from the entire list of anecdotes.
 * AnecdoteList appears as a master component that will be modified for each new component that I want to interact.
 * 
 */

/**
 * Target Quote's vote count increases.
 * 
 * 
 * @param {*} id 
 */
const AnecdoteList = () => {
    // const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        const filter = state.filter.toLowerCase();
        return state.anecdotes.filter(anecdote => 
            anecdote.content.toLowerCase().includes(filter));

    })


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