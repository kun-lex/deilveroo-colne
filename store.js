import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/BacketSlice"

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
})