import { memo } from "react";

interface XAxisProps {
	labelX?: string;
}

const XAxis = memo(function XAxis({ labelX = "X-Axis" }: XAxisProps) {
	return (
		<div className="flex items-center gap-1 text-nowrap">
			<span className="text-gray-500">{labelX}</span>
			<p className="h-1 w-full bg-gray-300"></p>
		</div>
	);
});

export default XAxis;
