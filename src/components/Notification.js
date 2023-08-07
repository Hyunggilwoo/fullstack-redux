import { useDispatch } from "react-redux"

const Notification = () => {

  const dispatch = useDispatch();
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export default Notification