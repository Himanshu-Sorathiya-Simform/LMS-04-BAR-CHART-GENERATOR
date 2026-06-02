import type { Data, Point } from "../types/types.ts";

interface DataActionState {
	type: "ADD_POINT" | "UPDATE" | "DELETE";
	payload: Point;
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

		case "UPDATE": {
			return data;
		}

		case "DELETE": {
			return data;
		}

		default:
			throw new Error("Unrecognized action.");
	}
}

export { type DataActionState, dataReducer };
