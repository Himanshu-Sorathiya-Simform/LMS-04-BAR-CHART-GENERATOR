interface BarProps {
	maximumPoint: number;
	name: string;
	value: number;
}

function Bar({ name, value, maximumPoint }: BarProps) {
	return (
		<div className="flex h-full w-16 flex-col items-center justify-between gap-2">
			<span className="mt-auto w-16 truncate text-center text-sm text-gray-500">
				{value}
			</span>

			<div
				className="w-10 rounded-t-lg bg-blue-500"
				style={{ height: `${(value / maximumPoint) * 95}%` }}
			></div>

			<span className="w-16 truncate text-center">{name}</span>
		</div>
	);
}

export default Bar;
