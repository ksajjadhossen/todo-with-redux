import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	reducer: {
		todos: [],
	},
};

const todoSlice = createSlice({
	name: "Todo List",
	initialState,
	reducers: {},
});

export default todoSlice.reducer;
