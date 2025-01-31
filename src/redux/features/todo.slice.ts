import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
	id?: string;
	tittle: string;
	description: string;
	isCompleted?: boolean;
};
type TInitialState = {
	todos: TTodo[];
};
const initialState: TInitialState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "Todo List",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTodo>) => {
			state.todos.push({
				...action.payload,
				isCompleted: false,
				id: Math.random().toString(36).substr(2, 9),
			});
		},
	},
});
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
