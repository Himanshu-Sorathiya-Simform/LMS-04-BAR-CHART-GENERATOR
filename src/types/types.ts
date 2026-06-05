interface Point {
	id: number;
	name: string;
	value: number;
}

interface Data {
	labelX: string;
	labelY: string;
	points: Point[];
}

interface TooltipState {
	point: Point;
	top: number;
	left: number;
}

export type { Data, Point, TooltipState };
