import Bar from "./Bar.tsx";

function BarContainer() {
	const totalHeight = 500;

	const data = [
		{
			name: "A",
			value: 150,
		},
		{
			name: "B",
			value: 180,
		},
		{
			name: "C",
			value: 200,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
		{
			name: "D",
			value: 130,
		},
	];

	return (
		<div className="mx-auto grid w-full scrollbar-thin scrollbar-gutter-stable grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-4 overflow-x-scroll">
			<YAxis />

			<div className="flex justify-center gap-8">
				{data.map((point) => (
					<Bar
						totalHeight={totalHeight}
						name={point.name}
						value={point.value}
					/>
				))}
			</div>

			<span className="w-0"></span>

			<XAxis />
		</div>
	);
}

function YAxis() {
	return (
		<div className="flex w-fit flex-col items-center gap-1 text-nowrap">
			<p className="h-full w-1 bg-gray-300"></p>
			<span className="text-gray-500">Y-Axis</span>
		</div>
	);
}

function XAxis() {
	return (
		<div className="flex items-center gap-1 text-nowrap">
			<span className="text-gray-500">X-Axis</span>
			<p className="h-1 w-full bg-gray-300"></p>
		</div>
	);
}

export default BarContainer;
