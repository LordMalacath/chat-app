import { createSlice } from "@reduxjs/toolkit";

//----------------------------------------------------------------

export const authSlice = createSlice({
    name: 'loggedUser',
    initialState: {
        user: null
    },

    reducers: {
        setLoggedUser: (state, action) => {
            state.user = action.payload;
        }
    },
})


export const { setLoggedUser } = authSlice.actions

export default authSlice.reducer