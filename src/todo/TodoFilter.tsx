import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC, useState } from "react";

const TodoFilter: FC = () => {
	const [position, setPosition] = useState("bottom");
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Filter</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Todo Priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoFilter;
