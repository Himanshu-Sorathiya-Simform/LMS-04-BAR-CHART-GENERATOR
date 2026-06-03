import type { Point } from "../types/types.ts";

interface BarProps {
	maximumPoint: number;
	point: Point;
	handleFocus: (
		e: React.FocusEvent<HTMLButtonElement, Element>,
		point: Point,
	) => void;
}

function Bar({ point: { name, value, id }, maximumPoint, handleFocus }: BarProps) {
	return (
		<button
			id={String(id)}
			className="flex h-11/12 w-16 flex-col items-center justify-end gap-2 border-2 border-transparent focus:border-neutral-300 focus:outline-0"
			data-id={String(id)}
			onFocus={(e) => handleFocus(e, { name, value, id })}
		>
			<span className="w-16 truncate text-center text-sm text-gray-500">
				{value}
			</span>

			<div
				className="w-10 rounded-t-lg bg-blue-500"
				style={{ height: `${(value / maximumPoint) * 95}%` }}
			></div>

			<span className="w-16 truncate text-center">{name}</span>
		</button>
	);
}

export default Bar;
