export class DeviceDataType {
    details: [];
    min_y: number;
    max_y: number;
    min_x: Date;
    max_x: Date;
    count: number;
    data: DeviceData[]
    graphData: DeviceGraphData[];
}


export class DeviceData {
    value: number;
    created_at: Date;
}

export class DeviceGraphData {
    value: number;
    created_at: Date;
}
