import { createSlice } from "@reduxjs/toolkit";
/**
 * Reducer for the state of filtering anecdotes
 * that matching the string of it using redux-toolkit
 */

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.payload;
//         default:
//             return state;
//     }
// }
/**
 * Filter component will use this redux-toolkit call.
 */
const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {

        filterChange(state, action) {
            const filter = action.payload;
            return ( filter )
        }
    },
});


// export const filterChange = filter => {
//     return {
//         type: 'SET_FILTER',
//         payload: filter
//     }
// }

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;