import { useCallback, useRef, useState } from "react";
import { useBar } from "../hooks/useBar.ts";
import type { Point, TooltipState } from "../types/types.ts";
import Bar from "./Bar.tsx";
import Tooltip from "./ui/Tooltip.tsx";
import XAxis from "./ui/XAxis.tsx";
import YAxis from "./ui/YAxis.tsx";

function BarContainer() {
	const { data } = useBar();
	const containerRef = useRef<HTMLDivElement | null>(null);
	const activeBarButtonRef = useRef<HTMLButtonElement | null>(null);

	const [tooltip, setTooltip] = useState<TooltipState | null>(null);

	// function handleDelete(id: string) {
	// 	dispatch({ type: "DELETE_POINT", payload: id });

	// 	activeBarButtonRef.current = null;

	// 	setTooltip(null);
	// }

	// function handleUpdate(point: Point) {
	// 	dispatch({ type: "UPDATE_POINT", payload: point });
	// }

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!containerRef.current) return;

		const target = e.target as HTMLElement;

		if (target.closest("#tooltip")) return;

		const barButton = target.closest("button") as HTMLButtonElement | null;

		if (!barButton) {
			if (activeBarButtonRef.current !== null) {
				activeBarButtonRef.current = null;

				setTooltip(null);
			}

			return;
		}

		if (barButton === activeBarButtonRef.current) return;

		const barHeight = barButton.firstElementChild.getBoundingClientRect().height;

		activeBarButtonRef.current = barButton;

		const innerDiv = barButton.firstElementChild as HTMLDivElement | null;
		const barId = innerDiv?.dataset.id;
		const point = data.points.find((p) => String(p.id) === barId);

		if (!point) return;

		const barButtonRect = barButton.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();

		const tooltipTop =
			containerRect.bottom - e.clientY > 100 ?
				Math.max(
					e.clientY - containerRect.top,
					barButtonRect.height - barHeight,
				)
			:	e.clientY - containerRect.top - 100;
		const tooltipLeft =
			barButtonRect.left - containerRect.left + (barButtonRect.width * 2) / 3;

		setTooltip({
			point,
			top: tooltipTop,
			left: tooltipLeft,
		});
	}

	function handleMouseLeave() {
		activeBarButtonRef.current = null;

		setTooltip(null);
	}

	const handleFocus = useCallback(function handleFocus(
		e: React.FocusEvent<HTMLButtonElement, Element>,
		point: Point,
	) {
		if (!containerRef.current) return;

		const barButton = e.currentTarget;
		const barInnerDiv = barButton.firstElementChild as HTMLDivElement | null;

		if (!barInnerDiv) return;

		activeBarButtonRef.current = barButton;

		const barRect = barInnerDiv.getBoundingClientRect();
		const containerRect = containerRef.current.getBoundingClientRect();

		const tooltipTop =
			containerRect.bottom - barRect.top - barRect.width / 2 > 100 ?
				barRect.top - containerRect.top + barRect.width / 2
			:	barRect.top - containerRect.top - 100 + barRect.width / 2;
		const tooltipLeft = barRect.left - containerRect.left - barRect.width / 2;

		setTooltip({
			point,
			top: tooltipTop,
			left: tooltipLeft,
		});
	}, []);

	const maximumPoint = Math.max(0, ...data.points.map((p) => p.value));

	return (
		<div
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative grid h-full w-full scrollbar-thin grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-hidden"
		>
			{tooltip && (
				<Tooltip
					point={
						data.points.find(
							(p) => String(p.id) === String(tooltip.point.id),
						) || tooltip.point
					}
					top={tooltip.top}
					left={tooltip.left}
				/>
			)}

			<YAxis
				labelY={data.labelY}
				maximumPoint={maximumPoint}
			/>

			<div className="relative overflow-x-hidden">
				<div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-6">
					{Array.from({ length: 9 }).map((_, i) => (
						<p
							key={i}
							className="h-px w-full bg-blue-200"
						></p>
					))}
				</div>

				<div className="flex h-full w-full scrollbar-thin scrollbar-gutter-stable gap-0 overflow-x-auto py-6">
					{data.points.map((point) => (
						<Bar
							key={point.id}
							maximumPoint={maximumPoint}
							point={point}
							onFocus={handleFocus}
						/>
					))}
				</div>
			</div>

			<span className="w-0"></span>

			<XAxis labelX={data.labelX} />
		</div>
	);
}

export default BarContainer;
