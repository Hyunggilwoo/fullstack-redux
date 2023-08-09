import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { clearNotification } from "../reducers/notificationReducer";
/**
 * Notification will be seen by the user.
 * Notification will work with newAnecdote
 * @returns 
 */
const Notification = () => {
  const [timer, setTimer] = useState(null)
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);

  useEffect(() => {
    clearTimeout(timer);

    if (notification) {
      const newTimer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      setTimer(newTimer);
    }
  }, [notification, dispatch]);

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