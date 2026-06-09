import type { Data } from "../types/types.ts";

const initialData: Data = {
	labelX: "X-Axis",
	labelY: "Y-Axis",
	points: [
		{
			id: Date.now() - 1000,
			name: "A",
			value: 150,
		},
		{
			id: Date.now() - 2000,
			name: "B",
			value: 170,
		},
		{
			id: Date.now() - 3000,
			name: "C",
			value: 200,
		},
	],
};

export { initialData };
