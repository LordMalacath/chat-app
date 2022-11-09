import { createSlice } from "@reduxjs/toolkit";

//----------------------------------------------------------------

export const chatSlice = createSlice({
    name: 'activeChat',
    initialState: {
        chatId: null,
        searchedUser: "",
    },

    reducers: {
        setActiveChat: (state, action) => {
            // console.log(action.payload.searchedUserInfo, action.payload.user);
            state.searchedUser = action.payload.searchedUserInfo;

            state.chatId = action.payload.user.uid > action.payload.searchedUserInfo.uid
                ? action.payload.user.uid + action.payload.searchedUserInfo.uid
                : action.payload.searchedUserInfo.uid + action.payload.user.uid
        }
    },
})


export const { setActiveChat } = chatSlice.actions

export default chatSlice.reducer