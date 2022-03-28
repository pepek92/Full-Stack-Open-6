import { createSlice } from "@reduxjs/toolkit"

const initialState = []
  
const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      setNotification(state, action) {
          state.push(action.payload)
      },
      reset: () => initialState
  }
  })

export const newNotification = (message, time) => {
  return async dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(reset())
  }, time)
  }
}

export const { setNotification, reset } = NotificationSlice.actions

export default NotificationSlice.reducer