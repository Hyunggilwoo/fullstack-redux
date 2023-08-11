import { useDispatch, useSelector } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

/**
 * When a new anecdote is added, notification appears
 * @returns 
 */
const NewAnecdote = () => {
    const dispatch = useDispatch();

    /**
     * Sending anecdote component to reducer
     * AddAnecdote requires content to be a parameter.
     * Asynchronously adding content of anecdote.
     * @param event.target.{name}.value must equal input's name attribute
     */
    const handleAddAnecdote = async (event) => {
        event.preventDefault() // prevent page from reloading
        const content = event.target.anecdote.value 
        event.target.anecdote.value = ''
        
        dispatch(addAnecdote(content))
        // console.log(newAnecdote)
 // initial value 
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleAddAnecdote}>
                <div><input name="anecdote"/></div>
                <button  type="submit">create</button>
            </form>
        </div>
    )
}

export default NewAnecdote;