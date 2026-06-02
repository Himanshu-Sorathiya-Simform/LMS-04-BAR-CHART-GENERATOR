import { useRef, useState } from "react";
import Bar from "./Bar.tsx";

interface Data {
	labelX: string;
	labelY: string;
	points: { name: string; value: number }[];
}

function BarContainer() {
	const containerRef = useRef<HTMLDivElement>(null);

	const [data, setData] = useState<Data>({
		labelX: "Item",
		labelY: "Price",
		points: [
			{
				name: "A",
				value: 150,
			},
			{
				name: "B",
				value: 170,
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
				name: "E",
				value: 50,
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
				name: "E",
				value: 50,
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
				name: "E",
				value: 50,
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
				name: "E",
				value: 50,
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
				name: "E",
				value: 50,
			},
		],
	});

	const maximumPoint = Math.max(...data.points.map((p) => p.value));

	return (
		<div
			ref={containerRef}
			className="mx-auto grid h-full scrollbar-thin grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-4 overflow-hidden"
		>
			<YAxis labelY={data.labelY} />

			<div className="flex h-full scrollbar-thin scrollbar-gutter-stable gap-8 overflow-x-auto">
				{data.points.map((point) => (
					<Bar
						maximumPoint={maximumPoint}
						name={point.name}
						value={point.value}
					/>
				))}
			</div>

			<span className="w-0"></span>

			<XAxis labelX={data.labelX} />
		</div>
	);
}

function YAxis({ labelY = "Y-Axis" }: { labelY?: string }) {
	return (
		<div className="flex w-fit flex-col items-center gap-1 text-nowrap">
			<p className="h-full w-1 bg-gray-300"></p>
			<span className="text-gray-500">{labelY}</span>
		</div>
	);
}

function XAxis({ labelX = "X-Axis" }: { labelX?: string }) {
	return (
		<div className="flex items-center gap-1 text-nowrap">
			<span className="text-gray-500">{labelX}</span>
			<p className="h-1 w-full bg-gray-300"></p>
		</div>
	);
}

export default BarContainer;
