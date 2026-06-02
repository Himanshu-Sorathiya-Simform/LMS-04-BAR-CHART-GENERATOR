import { useReducer } from "react";
import BarContainer from "../components/BarContainer.tsx";
import InputsContainer from "../components/InputsContainer.tsx";
import { dataReducer } from "../reducer/dataReducer.ts";
import type { Data } from "../types/types.ts";

const initialData: Data = {
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
	],
};

function BarLayout() {
	const [data, dispatch] = useReducer(dataReducer, initialData);

	return (
		<div className="flex h-3/4 w-200 flex-col items-center justify-end gap-4 overflow-hidden rounded-md border border-gray-300 bg-gray-50 p-4">
			<BarContainer data={data} />

			<p className="h-0.5 w-full bg-gray-400"></p>

			<InputsContainer handleCreate={dispatch} />
		</div>
	);
}

export default BarLayout;
