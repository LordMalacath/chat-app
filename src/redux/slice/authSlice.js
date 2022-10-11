import { createSlice } from "@reduxjs/toolkit";

//----------------------------------------------------------------

export const authSlice = createSlice({
    name: 'loggedUser',
    initialState: {
    },

    reducers: {
        setLoggedUser: (state, { payload }) => {
            state = payload
        }
    },
})


export const { setLoggedUser } = authSlice.actions

export default authSlice.reducer