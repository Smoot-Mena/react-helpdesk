import { createSlice } from "@reduxjs/toolkit";
import tickets from "../json/tickets.json";

const initialState = {
    ticketNumber: ++tickets.length,
    user: "",
    contact: "",
    subject: "",
    body: "",
    priority: 3,
    status: "open",
    category: "password reset",
    dateOpened: new Date().toLocaleString()
};

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        
    }
});

export const {} = ticketSlice.actions;

export default ticketSlice.reducer;