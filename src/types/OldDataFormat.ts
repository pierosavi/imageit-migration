export default interface OldDataFormat {
	bgimage: string;
	islocked: boolean;
	sensors: Sensor[];
	valueMappings: ValueMapping[];

	// Anything else
	[key: string]: any;
}

interface ValueMapping {
	bgBlink: boolean;
	bgColor: string;
	compareTo: string;
	fontColor: string;
	isSensorFontBold: boolean;
	mappingOperatorName: string;
	name: string;
	nameBlink: boolean;
	operatorName: string;
	valueBlink: boolean;
	id: string;
}

interface Sensor {
	bgBlink: boolean;
	bgColor: string;
	decimals: number;
	displayName: string;
	fontColor: string;
	link_url: string;
	metric: string;
	realBgColor: string;
	realFontColor: string;
	resolvedLink: string;
	unitFormat: string;
	valueMappingIds: string[];
	xlocation: number;
	ylocation: number;
}
