import {Place} from "./place";
import {Device} from "./device";

export class Fog {
    id: string;
    name: string;
    mac_address: string;
    ip_address: string;
    created_at: Date;
    place: Place;
    devices: Device[];
}
