import type { Point } from "../types/types.ts";

interface BarProps {
	maximumPoint: number;
	point: Point;
	onFocus: (e: React.FocusEvent<HTMLButtonElement, Element>, point: Point) => void;
}

function Bar({ point: { name, value, id }, maximumPoint, onFocus }: BarProps) {
	return (
		<button
			className="flex h-full flex-col items-center justify-end border-2 border-transparent focus:border-neutral-300 focus:outline-0"
			onFocus={(e) => onFocus(e, { name, value, id })}
		>
			<div
				id={String(id)}
				className="relative mx-3 w-12 rounded-t-lg bg-blue-500 transition-all"
				style={{ height: `${(value / maximumPoint) * 100}%` }}
				data-id={String(id)}
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
