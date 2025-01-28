import { FC } from "react";
import TodoCard from "./TodoCard";

const TodoContainer: FC = () => {
	return (
		<div>
			<div>
				<button>Add todo</button>
				<button>Filter</button>
			</div>
			<div className="bg-gray-700 text-white rounded-lg w-2/3 mx-auto p-3">
				{/* <div className="text-center font-bold text-2xl p-2">
					There is no task pending
				</div> */}

				<TodoCard></TodoCard>
			</div>
		</div>
	);
};

export default TodoContainer;
