export default interface NewDataFormat {
	options: Options;
	[key: string]: any;
}

interface Options {
	imageUrl: string;
	forceImageRefresh: boolean;
	lockSensors: boolean;
	sensorsTextSize: number;
	sensors: Sensor[];
	mappings: Mapping[];
}

interface Query {
	id: string;
	alias: string;
}

interface Position {
	x: number;
	y: number;
}

interface Sensor {
	name: string;
	query: Query;
	visible: boolean;
	backgroundColor: string;
	fontColor: string;
	bold: boolean;
	link: string;
	position: Position;
	mappingIds: string[];
	decimals: number;
	valueBlink: boolean;
	backgroundBlink: boolean;
	unit: string | undefined;
}

interface Values {
	fontColor: string;
	backgroundColor: string;
	valueBlink: boolean;
	backgroundBlink: boolean;
	bold: boolean;
	visible: boolean;
}

interface Mapping {
	id: string;
	description: string;
	compareTo: number | string;
	operator: string;
	values: Values;
}
