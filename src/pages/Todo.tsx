import TodoContainer from "@/todo/TodoContainer";
import { FC } from "react";

const Todo: FC = () => {
	return (
		<>
			<h3 className="text-2xl text-center py-5 font-bold">My Todo</h3>
			<TodoContainer />
		</>
	);
};

export default Todo;
