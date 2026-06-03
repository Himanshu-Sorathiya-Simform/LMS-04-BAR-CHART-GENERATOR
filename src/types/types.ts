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

export type { Data, Point };
