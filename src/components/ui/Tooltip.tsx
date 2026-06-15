import type { Point } from "../../types/types.ts";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

import { useModal } from "@himanshu-sorathiya/react-kit";

interface TooltipProps {
	point: Point;
	top: number;
	left: number;
}

function Tooltip({ point, top, left }: TooltipProps) {
	const { openModal } = useModal();

	return (
		<div
			id="tooltip"
			style={{
				top: `${top}px`,
				left: `${left}px`,
			}}
			className="absolute z-10 max-w-60 min-w-40 rounded-md bg-white px-3 py-2 shadow-md transition-all duration-150"
		>
			<div className="grid grid-cols-[auto_1fr] items-center gap-2">
				<span className="text-sm">Name:</span>
				<span className="truncate text-sm font-semibold">{point.name}</span>

				<span className="text-sm">Value:</span>
				<span className="text-sm font-semibold">{point.value}</span>
			</div>

			<div className="col-span-2 mt-1 flex justify-start border-t-2 border-gray-100 pt-1">
				<Button
					className="flex h-7 w-7 items-center justify-center rounded-md p-1 transition hover:bg-gray-100"
					onClick={() => openModal("edit", point)}
				>
					<Icon
						id="edit"
						className="h-5 w-5"
					/>
				</Button>

				<Button
					className="flex h-7 w-7 items-center justify-center rounded-md p-1 text-red-500 transition hover:bg-red-100"
					onClick={() => openModal("delete", point)}
				>
					<Icon
						id="delete"
						className="h-5 w-5"
					/>
				</Button>
			</div>
		</div>
	);
}

export default Tooltip;
