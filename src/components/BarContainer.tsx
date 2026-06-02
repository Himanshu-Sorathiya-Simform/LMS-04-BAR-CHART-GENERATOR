import type { Data } from "../types/types.ts";
import Bar from "./Bar.tsx";

function BarContainer({ data }: { data: Data }) {
	const maximumPoint = Math.max(...data.points.map((p) => p.value));

	return (
		<div className="mx-auto grid h-full scrollbar-thin grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-4 overflow-hidden">
			<YAxis labelY={data.labelY} />

			<div className="flex h-full scrollbar-thin scrollbar-gutter-stable gap-2 overflow-x-auto">
				{data.points.map((point) => (
					<Bar
						key={point.name}
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
