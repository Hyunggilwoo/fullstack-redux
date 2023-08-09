import { useDispatch } from "react-redux"
import { addAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch();

    /**
     * Sending anecdote component to reducer
     * AddAnecdote requires content to be a parameter.
     */
    const handleAddAnecdote = (event) => {
        event.preventDefault() // prevent page from reloading
        const content = event.target.anecdote.value 

        dispatch(addAnecdote(content))
        console.log(content)
        event.target.anecdote.value = '' // initial value 
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