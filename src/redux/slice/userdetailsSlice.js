import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "User Details",
    initialState: {
        values: {},
        userDetails: {},
        userContact: {},
        userCreds: {}
    },
    reducers: {
        addData: (state, action) => {
            state.values = action.payload;
        },
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        addUserContact: (state, action) => {
            state.userContact = action.payload;
        },
        addUserCreds: (state, action) => {
            state.userCreds = action.payload;
        },
    }
})

export const { addData, addUserDetails, addUserContact, addUserCreds } = userDetailsSlice.actions;
export default userDetailsSlice;