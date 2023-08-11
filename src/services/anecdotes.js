import axios from 'axios'

const baseUrl = 'http://localhost:3002/anecdotes'

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
export default { 
    getAll,
    createNew,
}
