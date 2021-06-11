import { Device } from "./device";

export class Place {
    id: number;
    name: string;
    parent_id: number;
    places: Place[];
    devices: Device[];
}
