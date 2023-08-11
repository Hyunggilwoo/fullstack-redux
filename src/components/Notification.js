import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { clearNotification } from "../reducers/notificationReducer";

/**
 * Notification will be seen by the user.
 * Notification will work with newAnecdote
 * 
 * Logic for timer reset is handled in the anecdoteReducer.
 * @returns 
 */
const Notification = () => {
  // const timer = useRef(null);
  // const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);

  // useEffect(() => {

  //   // resets timer
  //   clearTimeout(timer.current);

  //   if (notification) {
  //     timer.current = setTimeout(() => {
  //       dispatch(clearNotification());
  //     }, 5000);
  //   }

  //   // clean up the timer when the component unmounts or when timer changes
  //   return () => {
  //     clearTimeout(timer.current);
  //   };

  // }, [notification, dispatch]);

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