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
			className="flex h-full w-16 flex-col items-center justify-end border-2 border-transparent focus:border-neutral-300 focus:outline-0"
			data-id={String(id)}
			onFocus={(e) => handleFocus(e, { name, value, id })}
		>
			<div
				className="relative w-10 rounded-t-lg bg-blue-500"
				style={{ height: `${(value / maximumPoint) * 100}%` }}
			>
				<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full truncate text-sm text-gray-500">
					{value}
				</span>

				<span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full truncate">
					{name}
				</span>
			</div>
		</button>
	);
}

export default Bar;
