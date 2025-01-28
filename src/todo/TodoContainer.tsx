import { FC } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer: FC = () => {
	return (
		<div className="w-2/3 mx-auto">
			<div className="flex justify-between p-5">
				<AddTodoModal></AddTodoModal>
				<TodoFilter></TodoFilter>
			</div>
			<div className="bg-gray-700 text-white rounded-lg  p-3">
				{/* <div className="text-center font-bold text-2xl p-2">
					There is no task pending
				</div> */}

				<TodoCard></TodoCard>
			</div>
		</div>
	);
};

export default TodoContainer;
