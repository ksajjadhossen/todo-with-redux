import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";

import { FC, useState } from "react";

const AddTodoModal: FC = () => {
	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");
	return (
		<Dialog>
			<form action="">
				<DialogTrigger asChild>
					<Button className="">Add todo</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>List Your Todo</DialogTitle>
						<DialogDescription>
							List your todo of your daily life.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Task
							</Label>
							<Input
								id="task"
								type="text"
								placeholder="Write your task"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Description
							</Label>
							<Input
								id="description"
								type="text"
								placeholder="write your description"
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="submit">Save changes</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default AddTodoModal;
