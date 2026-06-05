import { useState } from "react";
import type { Point } from "../../types/types.ts";
import { validate } from "../../utils/validateFormResponse.ts";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";

interface TooltipProps {
	point: Point;
	top: number;
	left: number;
	onUpdate: (point: Point) => void;
	onDelete: (id: string) => void;
}

function Tooltip({ point, top, left, onUpdate, onDelete }: TooltipProps) {
	const [error, setError] = useState("");

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;

		const field: [string, string | number | boolean][] = [[name, value]];

		const { isValid, error } = validate(field);

		if (isValid === true) {
			setError("");
			onUpdate({
				...point,
				[name]: name === "value" ? Number(value) : value,
			});
		} else {
			setError(error);
		}
	}

	return (
		<div
			id="tooltip"
			style={{
				top: `${top}px`,
				left: `${left}px`,
			}}
			className="absolute z-10 w-64 rounded-md bg-white px-3 py-2 shadow-md transition-all duration-150"
		>
			<p className="text-center text-red-600">{error}</p>

			<div className="grid grid-cols-[auto_1fr] items-center gap-2">
				<span className="text-sm">Name:</span>
				<input
					type="text"
					name="name"
					autoComplete="off"
					className="w-full rounded-md px-1 text-sm font-semibold outline-2 outline-gray-300 focus:outline-2 focus:outline-gray-500"
					value={point.name}
					onChange={handleChange}
				/>

				<span className="text-sm">Value:</span>
				<input
					type="text"
					name="value"
					autoComplete="off"
					className="w-full rounded-md px-1 text-sm font-semibold outline-2 outline-gray-300 focus:outline-2 focus:outline-gray-500"
					value={point.value}
					onChange={handleChange}
				/>
			</div>

			<div className="col-span-2 mt-1 flex justify-start border-t border-gray-100 pt-1">
				<Button
					className="flex h-7 w-7 items-center justify-center rounded-md p-1 text-red-500 transition hover:bg-red-100"
					onClick={() => onDelete(String(point.id))}
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
