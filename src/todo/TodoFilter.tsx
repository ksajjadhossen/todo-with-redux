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
				<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoFilter;
