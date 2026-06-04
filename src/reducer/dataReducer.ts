import type { Data, Point } from "../types/types.ts";

interface DataActionState {
	type: "ADD_POINT" | "UPDATE_POINT" | "DELETE_POINT";
	payload?: Point | string;
}

function dataReducer(data: Data, action: DataActionState) {
	switch (action.type) {
		case "ADD_POINT": {
			const newPoints = {
				...data,
				points: [...data.points, action.payload],
			};

			return newPoints;
		}

		case "UPDATE_POINT": {
			return data;
		}

		case "DELETE_POINT": {
			if (typeof action.payload !== "string") return;

			const index = data.points.findIndex(
				(point) => point.id === +action.payload,
			);

			const newPoints = [
				...data.points.slice(0, index),
				...data.points.slice(index + 1),
			];

			return { ...data, points: newPoints };
		}

		default:
			throw new Error("Unrecognized action.");
	}
}

export { type DataActionState, dataReducer };
