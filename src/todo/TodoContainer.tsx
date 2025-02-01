import { useAppSelector } from "@/redux/features/todo.hooks";
import { FC } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer: FC = () => {
	const todos = useAppSelector((state) => state.todoSlice.todos);
	return (
		<div className="w-2/3 mx-auto">
			<div className="flex justify-between p-5">
				<AddTodoModal></AddTodoModal>
				<TodoFilter></TodoFilter>
			</div>
			<div className="bg-gray-700 text-white rounded-lg  p-3">
				{todos.map((todo) => (
					<TodoCard {...todo} />
				))}
			</div>
		</div>
	);
};

export default TodoContainer;
