import { createSlice } from "@reduxjs/toolkit";
import tickets from "../json/tickets.json";

const initialState = tickets;

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {}
});

export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;