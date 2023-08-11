import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'
/**
 * These are backend actions that needs to reflect what happens in the front-end to be exhibited
 * in the same way in the back-end.
 * @returns 
 */

// as a server side, memory or update can be processed in asynchronous manner
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

/**
 * Contents of anecdote is stored here
 * @param {*} content 
 * @returns 
 */
const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

/**
 * Update vote count count of anecdote specified to the id.
 */
const changeVote = async (anecdote, vote) => {
    const object = { ...anecdote, votes: vote}
    console.log(anecdote.id)
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, object)
    return response.data
}
export default { 
    getAll,
    createNew,
    changeVote,
}
