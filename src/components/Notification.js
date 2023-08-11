import { useSelector } from "react-redux";
import React from "react";


/**
 * Notification will be seen by the user.
 * Notification will work with newAnecdote
 * 
 * Logic for timer reset is handled in the anecdoteReducer.
 * @returns 
 */
const Notification = () => {
  const notification = useSelector(state => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification