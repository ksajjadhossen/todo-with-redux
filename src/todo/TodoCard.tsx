import { FC } from "react";

const TodoCard: FC = () => {
	return (
		<div className="bg-white text-black flex justify-around m-3 p-3 rounded-md">
			<input type="checkbox" />
			<h4 className="font-bold">Tittle</h4>
			<h4>Time</h4>
			<h4>Description</h4>
			<div className=" flex space-x-5 justify-between">
				<button>Delete</button>
				<button>Edit</button>
			</div>
		</div>
	);
};

export default TodoCard;
