function YAxis({
	labelY = "Y-Axis",
	maximumPoint,
}: {
	labelY?: string;
	maximumPoint: number;
}) {
	return (
		<div className="flex h-full gap-1 py-6">
			<div className="mr-1 flex flex-col self-center text-sm text-gray-500">
				{labelY
					.split("")
					.reverse()
					.map((c, i) => (
						<span
							key={i}
							className="-rotate-90"
						>
							{c}
						</span>
					))}
			</div>

			<div className="flex flex-col justify-between text-right">
				{Array.from({ length: 8 }).map((_, i) => (
					<span
						key={i}
						className="text-sm text-gray-400"
					>
						{(((8 - i) * maximumPoint) / 8).toFixed(2)}
					</span>
				))}
				<span className="text-sm text-gray-400">0</span>
			</div>

			<p className="h-full w-1 bg-gray-300"></p>
		</div>
	);
}

export default YAxis;
