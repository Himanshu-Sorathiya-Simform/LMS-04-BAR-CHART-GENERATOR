interface BarProps {
	maximumPoint: number;
	name: string;
	value: number;
}

function Bar({ name, value, maximumPoint }: BarProps) {
	return (
		<button className="flex h-11/12 w-16 flex-col items-center justify-end gap-2 border-2 border-transparent focus:border-neutral-300 focus:outline-0">
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
