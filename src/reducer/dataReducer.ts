import type { Data, Point } from "../types/types.ts";

interface DataActionState {
	type: "ADD_POINT" | "UPDATE_POINT" | "DELETE_POINT";
	payload?: Point | string;
}

function dataReducer(data: Data, action: DataActionState) {
	switch (action.type) {
		case "ADD_POINT": {
			const { payload } = action;

			if (!payload || typeof payload === "string") return data;

			const newPoints = [...data.points, payload];

			return { ...data, points: newPoints };
		}

		case "UPDATE_POINT": {
			const { payload } = action;

			if (!payload || typeof payload === "string") return data;

			const index = data.points.findIndex((data) => data.id === payload.id);

			const newPoints = [
				...data.points.slice(0, index),
				payload,
				...data.points.slice(index + 1),
			];

			return { ...data, points: newPoints };
		}

		case "DELETE_POINT": {
			const { payload } = action;

			if (typeof payload !== "string") return data;

			const newPoints = data.points.filter((point) => point.id === +payload);

			return { ...data, points: newPoints };
		}

		default:
			throw new Error("Unrecognized action.");
	}
}

export { type DataActionState, dataReducer };
