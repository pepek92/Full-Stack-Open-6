import { createSlice } from "@reduxjs/toolkit"

const initialState = []
  

const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      newNotification: {
        reducer: (state, action) => {
          state.push(action.payload)
        }
      },
      reset: () => initialState
    }
  })

export const { newNotification, reset } = NotificationSlice.actions

export default NotificationSlice.reducer