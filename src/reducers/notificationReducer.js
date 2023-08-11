import { createSlice } from "@reduxjs/toolkit";

/**
 * At default, notification will be empty.
 */
const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            return action.payload;
        },
        clearNotification(state) {
            return ''
        },
    }
})
export const { createNotification, clearNotification} = notificationSlice.actions;

let timer;
// async operation that updates the timer based on the most recent clicks
export const showNotificationWithTimeout = (message, duration) => {
    return async dispatch => {
        console.log("Showing notification with message:", message);
        console.log("Duration:", duration);
        // If there is an existing timer, clear it
        if (timer) {
            clearTimeout(timer);
        }

        // dispatch notification
      dispatch(createNotification(message));

      // set a new timer
      timer = setTimeout(() => {
        dispatch(clearNotification());
      }, duration);
    }
}

export default notificationSlice.reducer;