interface BarProps {
	maximumPoint: number;
	name: string;
	value: number;
}

function Bar({ name, value, maximumPoint }: BarProps) {
	return (
		<div className="flex h-full flex-col items-center justify-between gap-2">
			<span className="mt-auto text-sm text-gray-500">{value}</span>

			<div
				className="max-w-16 min-w-8 rounded-t-lg bg-blue-500"
				style={{ height: `${(value / maximumPoint) * 100}%` }}
			></div>

			<span>{name}</span>
		</div>
	);
}

export default Bar;
