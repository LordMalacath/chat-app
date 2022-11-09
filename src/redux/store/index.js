import { configureStore } from "@reduxjs/toolkit"
import authReducer from "redux/slice/authSlice"
import chatReducer from "redux/slice/chatSlice"

//---------------------------------------------------------

export default configureStore({
    reducer: {
        loggedUser: authReducer,
        activeChat: chatReducer,
    }
})