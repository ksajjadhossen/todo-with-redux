import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/features/todo.hooks";
import { addTodo } from "@/redux/features/todo.slice";

import { FC, FormEvent, useState } from "react";

const AddTodoModal: FC = () => {
	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const taskDetails = {
			tittle: task,
			description: description,
		};

		dispatch(addTodo(taskDetails));
		setTask("");
		setDescription("");
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="">Add Todo</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>List Your Todo</DialogTitle>
					<DialogDescription>
						List your todo of your daily life.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="task" className="text-right">
								Task
							</Label>
							<Input
								value={task}
								onChange={(e) => setTask(e.target.value)}
								id="task"
								name="task"
								type="text"
								placeholder="Write your task"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								id="description"
								name="description"
								type="text"
								placeholder="Write your description"
								className="col-span-3"
							/>
						</div>
					</div>
					<div className="text-right">
						<Button type="submit">Save Changes</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddTodoModal;
