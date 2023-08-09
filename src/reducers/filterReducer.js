/**
 * Reducer for the state of filtering anecdotes
 * that match the regex pattern
 */

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state;
    }
}

/**
 * Filter component will use this redux call.
 * @param {*} filter 
 * @returns 
 */
export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter
    }
}

export default filterReducer;