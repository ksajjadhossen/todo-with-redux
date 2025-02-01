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

		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleCompleted: (state, action) => {
			const task = state.todos.find((item) => item.id === action.payload);
			task!.isCompleted = !task?.isCompleted;
		},
	},
});
export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
