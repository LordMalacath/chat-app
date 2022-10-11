import { configureStore } from "@reduxjs/toolkit"
import authReducer from "redux/slice/authSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        // chat: '',
    },
})