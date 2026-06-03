import { useRef } from "react";
import { useBar } from "../hooks/useBar.ts";
import type { Point } from "../types/types.ts";
import Bar from "./Bar.tsx";
import Tooltip from "./ui/Tooltip.tsx";

function BarContainer() {
	const { data } = useBar();
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const barRef = useRef<HTMLButtonElement | null>(null);

	function moveTooltip(point: Point, tooltipTop: number, tooltipLeft: number) {
		if (!tooltipRef) return;

		tooltipRef.current.style.display = "grid";
		tooltipRef.current.style.top = `${tooltipTop}px`;
		tooltipRef.current.style.left = `${tooltipLeft}px`;
		tooltipRef.current.innerHTML = "";
		const fragment = document.createDocumentFragment();

		for (const key of Object.keys(point)) {
			if (key === "id") continue;

			const keySpan = document.createElement("span");
			keySpan.classList.add("text-sm");
			keySpan.textContent = `${key[0].toUpperCase()}${key.slice(1)}:`;

			const valSpan = document.createElement("span");
			valSpan.classList.add("font-semibold", "text-sm");
			valSpan.textContent = point[key];

			fragment.append(keySpan, valSpan);
		}

		tooltipRef.current.append(fragment);
	}

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const bar = document
			.elementFromPoint(e.clientX, e.clientY)
			.closest("button");

		if (!bar || bar === barRef.current) return;

		barRef.current = bar;

		const barRect = barRef.current.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();

		const tooltipTop = e.clientY - containerRect.top;
		const tooltipLeft = barRect.left - containerRect.left + barRect.width / 2;

		const barId = bar.dataset.id;
		const point = data.points.find((p) => String(p.id) === barId);

		moveTooltip(point, tooltipTop, tooltipLeft);
	}

	function handleMouseLeave() {
		tooltipRef.current.style.display = "none";
		barRef.current = null;
	}

	function handleFocus(
		e: React.FocusEvent<HTMLButtonElement, Element>,
		point: Point,
	) {
		barRef.current = e.currentTarget;

		const barRect = e.currentTarget.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();

		const tooltipTop = barRect.top - containerRect.top;
		const tooltipLeft = barRect.left - containerRect.left;

		moveTooltip(point, tooltipTop, tooltipLeft);
	}

	const maximumPoint = Math.max(...data.points.map((p) => p.value));

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative grid h-full w-full scrollbar-thin grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-4 overflow-hidden"
		>
			<Tooltip ref={tooltipRef} />

			<YAxis labelY={data.labelY} />

			<div className="flex h-full scrollbar-thin scrollbar-gutter-stable items-end gap-2 overflow-x-auto">
				{data.points.map((point) => (
					<Bar
						key={point.id}
						maximumPoint={maximumPoint}
						point={point}
						handleFocus={handleFocus}
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
