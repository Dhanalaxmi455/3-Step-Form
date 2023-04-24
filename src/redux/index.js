import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./slice/userdetailsSlice";

const Store = configureStore({
    reducer: {
        UserDetails: userDetailsSlice.reducer,
    }
})

export default Store;