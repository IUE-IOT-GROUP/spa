import {DeviceParameter} from "./device-parameter";
import {Place} from "./place";
import {Fog} from "./fog";

export class Device {
    id: string;
    name: string;
    mac_address: string;
    ip_address: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    device_id: string;
    place_id: string;
    fog_id: string;
    parameters: DeviceParameter[];
    device: [];
    place: Place;
    fog: Fog;

}
