import type { RefObject } from "react";

interface TooltipProps {
	ref: RefObject<HTMLDivElement | null>;
}

function Tooltip({ ref }: TooltipProps) {
	return (
		<div
			ref={ref}
			style={{ display: "none" }}
			className="absolute top-0 left-0 z-10 grid w-50 grid-cols-[auto_1fr] gap-2 rounded-md bg-white px-3 py-2 shadow-md transition-all duration-200"
		></div>
	);
}

export default Tooltip;
