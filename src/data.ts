import type { Data } from "./types/types.ts";

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

export { initialData };
