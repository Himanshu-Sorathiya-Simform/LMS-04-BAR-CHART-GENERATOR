interface BarProps {
	totalHeight: number;
	name: string;
	value: number;
}

function Bar({ totalHeight, name, value }: BarProps) {
	return (
		<div className="flex flex-col items-center justify-between gap-2">
			<div
				className="mt-auto max-w-16 min-w-8 bg-blue-500"
				style={{ height: `${(totalHeight / value) * 100}px` }}
			></div>

			<span>{name}</span>
		</div>
	);
}

export default Bar;
