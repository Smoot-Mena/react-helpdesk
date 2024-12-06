import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import ticketsReducer from "../features/ticketsSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tickets: ticketsReducer,
    }
});