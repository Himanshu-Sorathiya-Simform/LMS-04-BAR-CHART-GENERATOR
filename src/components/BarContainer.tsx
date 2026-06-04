import { useRef } from "react";
import { useBar } from "../hooks/useBar.ts";
import type { Point } from "../types/types.ts";
import Bar from "./Bar.tsx";
import Tooltip from "./ui/Tooltip.tsx";
import XAxis from "./ui/XAxis.tsx";
import YAxis from "./ui/YAxis.tsx";

function BarContainer() {
	const { data, dispatch } = useBar();
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const barRef = useRef<HTMLDivElement | null>(null);

	function handleDelete(id: string) {
		dispatch({ type: "DELETE_POINT", payload: id });

		barRef.current = null;
		tooltipRef.current.style.display = "none";
	}

	function handleUpdate(point: Point) {
		dispatch({ type: "UPDATE_POINT", payload: point });
	}

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

			const valInput = document.createElement("input");
			valInput.setAttribute("name", key);
			valInput.setAttribute("autocomplete", "true");
			valInput.setAttribute(
				"class",
				"font-semibold text-sm w-full px-1 outline-2 focus:outline-2 outline-gray-300 focus:outline-gray-500 rounded-md",
			);
			valInput.value = point[key];

			fragment.append(keySpan, valInput);
		}

		const svgNS = "http://www.w3.org/2000/svg";
		const svgElement = document.createElementNS(svgNS, "svg");

		svgElement.setAttribute(
			"class",
			"h-7 w-7 stroke-1 rounded-md p-1 text-red-500 cursor-pointer hover:bg-red-100 transition",
		);
		svgElement.addEventListener("click", () => {
			handleDelete(barRef.current.dataset.id);
		});

		const useElement = document.createElementNS(svgNS, "use");
		useElement.setAttribute("href", "/icons/ui_icons_sprite.svg#delete");

		svgElement.appendChild(useElement);
		fragment.append(svgElement);

		tooltipRef.current.append(fragment);
	}

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const bar = document
			.elementFromPoint(e.clientX, e.clientY)
			.closest("div[data-id]");

		if (
			bar !== barRef.current
			&& barRef.current
			&& tooltipRef.current.children[1] instanceof HTMLInputElement
			&& tooltipRef.current.children[3] instanceof HTMLInputElement
		) {
			const newPointValues: Point = {
				id: +barRef.current.dataset.id,
				name: tooltipRef.current.children[1].value,
				value: +tooltipRef.current.children[3].value,
			};

			handleUpdate(newPointValues);
		}

		if (!bar || !(bar instanceof HTMLDivElement) || bar === barRef.current)
			return;

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
		if (e.currentTarget.firstElementChild instanceof HTMLDivElement)
			barRef.current = e.currentTarget.firstElementChild;

		const barRect = e.currentTarget.firstElementChild.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();

		const tooltipTop = barRect.top - containerRect.top + barRect.width / 2;
		const tooltipLeft = barRect.left - containerRect.left - barRect.width / 2;

		moveTooltip(point, tooltipTop, tooltipLeft);
	}

	const maximumPoint = Math.max(0, ...data.points.map((p) => p.value));

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative grid h-full w-full scrollbar-thin grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-hidden"
		>
			<Tooltip ref={tooltipRef} />

			<YAxis
				labelY={data.labelY}
				maximumPoint={maximumPoint}
			/>

			<div className="relative flex h-full scrollbar-thin scrollbar-gutter-stable gap-2 overflow-x-auto py-6">
				<div className="absolute inset-0 flex flex-col justify-between py-6">
					{Array.from({ length: 9 }).map((_, i) => (
						<p
							key={i}
							className="h-px w-full bg-blue-200"
						></p>
					))}
				</div>

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

export default BarContainer;
