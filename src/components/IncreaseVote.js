import { useDispatch, useSelector } from "react-redux"
import { increaseVote } from '../reducers/anecdoteReducer'


// const Anecdote = ({ anecdote, handleClick }) => {
//     return (
//         <li onClick={handleClick}>
//             {anecdote.content}
//             <strong> {anecdote.votes + 1} </strong>
//         </li>
//     )
// }
/**
 * Target Quote's vote count increases.
 * 
 * @param {*} id 
 */
const IncreaseVoteButton = ( {anecdotes} ) => {
    // const anecdotes = useSelector(state => state)

    const dispatch = useDispatch()
    // const handleIncreaseVote = () => {
    //     dispatch(increaseVote(anecdote.id))
    // }
    return (   
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => {
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

export default IncreaseVoteButton;